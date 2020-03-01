function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
$(document).ready(function() {

    $("#menu .col-md-3").hover(function(){
        $(this).find(".offer").css("display","flex");
    },function(){
        $(this).find(".offer").hide();
    });

    $("#btn[type=submit]").click(function() {
        var name = $('input#name').val();
        alert(`Thank you ${name} for choosing Rayanas pizza. welcome Again.`);
    });  
});