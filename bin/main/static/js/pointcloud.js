
require([
    "esri/Map",
    "esri/views/SceneView",
    "esri/layers/PointCloudLayer",
    "esri/renderers/smartMapping/creators/color",
    "esri/renderers/smartMapping/creators/type",
    "esri/widgets/Legend",
    "esri/core/promiseUtils"
  ], function(
    Map,
    SceneView,
    PointCloudLayer,
    colorRendererCreator,
    typeRendererCreator,
    Legend,
    promiseUtils
  ) {
    // Create Point Cloud Layer
    var pcLayer = new PointCloudLayer({
      url:
        "https://tiles.arcgis.com/tiles/V6ZHFr6zdgNZuVG0/arcgis/rest/services/BARNEGAT_BAY_LiDAR_UTM/SceneServer"
    });

    // Create Map and View
    var map = new Map({
      basemap: "gray-vector",
      ground: "world-elevation"
    });

    var view = new SceneView({
      container: "viewDiv",
      map: map,
      camera: {
        heading: 210,
        tilt: 78,
        position: {
          x: -8249335,
          y: 4832005,
          z: 50.7,
          spatialReference: {
            wkid: 3857
          }
        }
      }
    });
    view.ui.add("paneDiv", "bottom-left");
    view.ui.add(
      new Legend({
        view: view
      }),
      "bottom-right"
    );

    // stores generated renderers to avoid making service
    // calls for the same renderer multiple times
    var renderersByField = {
      RGB: null,
      CLASS_CODE: null,
      ELEVATION: null,
      INTENSITY: null
    };

    /**
     * Generates renderers based on the input field name. There are four
     * valid input field names: RGB, CLASS_CODE, ELEVATION, and INTENSITY
     */
    function getRenderer(fieldName) {
      // If the renderer is already generated, then return it
      if (renderersByField[fieldName]) {
        return promiseUtils.resolve(renderersByField[fieldName]);
      }

      // Store the generated renderer in a predefined object in
      // case it is requested in the future and return the renderer
      function responseCallback(response) {
        renderersByField[fieldName] = response.renderer;
        return response.renderer;
      }

      if (fieldName === "RGB") {
        return colorRendererCreator
          .createPCTrueColorRenderer({
            layer: pcLayer
          })
          .then(responseCallback);
      }
      if (fieldName === "CLASS_CODE") {
        return typeRendererCreator
          .createPCClassRenderer({
            layer: pcLayer,
            field: fieldName
          })
          .then(responseCallback);
      }
      if (fieldName === "ELEVATION" || "INTENSITY") {
        return colorRendererCreator
          .createPCContinuousRenderer({
            layer: pcLayer,
            field: fieldName
          })
          .then(responseCallback);
      }
    }

    /******************************************************************
     *
     * Display point cloud layer using different renderers
     *
     ******************************************************************/

    view.when(function() {
      // Generate RGB renderer when view is ready and
      // assign the renderer to the point cloud layer
      getRenderer("RGB")
        .then(function(renderer) {
          pcLayer.renderer = renderer;
          map.add(pcLayer);
        })
        .catch(function(error) {
          console.log("error: ", error);
        });

      var radios = document.getElementsByName("renderer");
      // Handle change events on radio buttons to switch to the correct renderer
      for (var i = 0; i < radios.length; i++) {
        radios[i].addEventListener("change", function(event) {
          var fieldName = event.target.value;
          getRenderer(fieldName)
            .then(function(renderer) {
              pcLayer.renderer = renderer;
            })
            .catch(function(error) {
              console.log("error: ", error);
            });
        });
      }
    });
  });