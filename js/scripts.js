$(document).ready(function() {
    $("#topcont .chef").hover(function(){
        $(this).find(".pic").css("pic","flex");
    },function(){
        $(this).find(".pic").hide();
    });
});