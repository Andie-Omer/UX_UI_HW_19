console.log("Homework 19");
$(document).ready(function(){
    $(".change").on({

        click: function(){
            $(this).css("background-color", "black");
            $(this).css("font-size", "16px");
            $(this).css("color", "white");
            $(this).css("font-family", "arial");   
        }  
    });
});
