// console.log("MAP")

// $(document).ready(function(){
//     var mymap = L.map('map').setView([48.462, -123.3117], 15);
    
//     L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
//         attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//         maxZoom: 28,
//         id: 'mapbox.streets-satellite',
//         accessToken: 'pk.eyJ1Ijoib290aGViYWxsc29vIiwiYSI6ImNqeXBkMmN0MTA3OTUzbXFyMTc4MDJ5angifQ.mY2js0Eh5AWkpOejtzvecg'
//     }).addTo(mymap);

//     if(global_current_lidar == 'hanover'){
//         map.panTo(new L.LatLng(40.737, -73.923));
//     }


// })

console.log("MAP")



$(document).ready(function(){
      
    var mymap = L.map('map').setView([48.462, -123.3117], 15);
      
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 28,
        id: 'mapbox.streets-satellite',
        accessToken: 'pk.eyJ1Ijoib290aGViYWxsc29vIiwiYSI6ImNqeXBkMmN0MTA3OTUzbXFyMTc4MDJ5angifQ.mY2js0Eh5AWkpOejtzvecg'
    }).addTo(mymap);


    // var popup = L.popup();

    // function onMapClick(e) {
    //     popup
    //         .setLatLng(e.latlng)
    //         .setContent("You clicked the map at " + e.latlng.toString())
    //         .openOn(mymap);
    // }

    // mymap.on('click', onMapClick);

    // bind click event to the story divs, add a marker and zoom to that story's location. Remember to add dot before story as it is classname
    $('.story').on('click', function(){
        // parse lat and lng from the divs data attribute
        var latlng = $(this).data().point.split(',');
        var lat = latlng[0];
        var lng = latlng[1];
        //var zoom = 14;
        var zoom = latlng[2];
            // add a marker
        //var marker = L.marker([lat, lng],{}).addTo(mymap);
        // set the view
        mymap.flyTo([lat, lng], zoom);
    })
})




