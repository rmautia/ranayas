$(document).ready(function() {

    $("#menu .col-md-3").hover(function(){
        $(this).find(".offer").css("display","flex");
    },function(){
        $(this).find(".offer").hide();
    });
});