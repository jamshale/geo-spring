$(document).ready(function(){
    $.get({
        url: "/catalogs",
        success: console.log("success"),
        complete: function(data){
            JSON.stringify(data)
            console.log(data);
        }

    })


})