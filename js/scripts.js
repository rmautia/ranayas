$(document).ready(function() {

    $("#menu .column1").hover(function(){
        $(this).find(".offer").css("display","flex");
    },function(){
        $(this).find(".offer").hide();
    });
});