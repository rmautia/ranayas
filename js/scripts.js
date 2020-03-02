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

    //pop-up
    $(function () {
        $('.summary').hide();
        $('.cdata-overlay').hide();

        //form inputs
        $("#checkout").click(function () {
            let flavour = $(".flavour option:selected").val();
            let size = $("#size option:selected").val();
            let crust = $("#crust option:selected").val();
            let topping = $("#toppings option:selected").val();
            let number = $("#number").val();
            console.log(size);

            let order = (f, s, c, t, n, total) => {
                return {f, s, c, t, n, total};
    }
    //check price
    let price, totalPrice;
    switch (flavour) {
        case flavour = "Boerwoers":
            switch (size) {
                case size = "small":
                    price = 500;
                    if (crust === "thin") {
                        totalPrice = (price * number) + 115;
                    } else if (crust === "thick") {
                        totalPrice = (price * number) + 175;
                    } else if (crust === "flatbread") {
                        totalPrice = (price * number) + 180;
                    } else {
                        totalPrice = (price * number) + 300;
                    }
                    break;
                case size = "medium":
                    price = 800;
                    if (crust === "thin") {
                        totalPrice = (price * number) + 115;
                    } else if (crust === "thick") {
                        totalPrice = (price * number) + 175;
                    } else if (crust === "flatbread") {
                        totalPrice = (price * number) + 180;
                    } else {
                        totalPrice = (price * number) + 300;
                    }
                    break;
                case size = "large":
                    price = 1000;
                    if (crust === "thin") {
                        totalPrice = (price * number) + 115;
                    } else if (crust === "thick") {
                        totalPrice = (price * number) + 175;
                    } else if (crust === "flatbread") {
                        totalPrice = (price * number) + 180;
                    } else {
                        totalPrice = (price * number) + 300;
                    }
                    break;
            }
            break;
        case flavour = "Chicken periperi":
            switch (size) {
                case size = "small":
                    price = 500;
                    if (crust === "thin") {
                        totalPrice = (price * number) + 115;
                    } else if (crust === "thick") {
                        totalPrice = (price * number) + 175;
                    } else if (crust === "flatbread") {
                        totalPrice = (price * number) + 180;
                    } else {
                        totalPrice = (price * number) + 300;
                    }
                    break;
                case size = "medium":
                    price = 800;
                    if (crust === "thin") {
                        totalPrice = (price * number) + 115;
                    } else if (crust === "thick") {
                        totalPrice = (price * number) + 175;
                    } else if (crust === "flatbread") {
                        totalPrice = (price * number) + 180;
                    } else {
                        totalPrice = (price * number) + 300;
                    }
                    break;
                case size = "large":
                    price = 1000;
                    if (crust === "thin") {
                        totalPrice = (price * number) + 115;
                    } else if (crust === "thick") {
                        totalPrice = (price * number) + 175;
                    } else if (crust === "flatbread") {
                        totalPrice = (price * number) + 180;
                    } else {
                        totalPrice = (price * number) + 300;
                    }
                    break;
            }
            break;
        case flavour = "Meat Deluxe":
            switch (size) {
                case size = "small":
                    price = 500;
                    if (crust === "thin") {
                        totalPrice = (price * number) + 115;
                    } else if (crust === "thick") {
                        totalPrice = (price * number) + 175;
                    } else if (crust === "flatbread") {
                        totalPrice = (price * number) + 180;
                    } else {
                        totalPrice = (price * number) + 300;
                    }
                    break;
                case size = "medium":
                    price = 800;
                    if (crust === "thin") {
                        totalPrice = (price * number) + 115;
                    } else if (crust === "thick") {
                        totalPrice = (price * number) + 175;
                    } else if (crust === "flatbread") {
                        totalPrice = (price * number) + 180;
                    } else {
                        totalPrice = (price * number) + 300;
                    }
                    break;
                case size = "large":
                    price = 1000;
                    if (crust === "thin") {
                        totalPrice = (price * number) + 115;
                    } else if (crust === "thick") {
                        totalPrice = (price * number) + 175;
                    } else if (crust === "flatbread") {
                        totalPrice = (price * number) + 180;
                    } else {
                        totalPrice = (price * number) + 300;
                    }
                    break;
            }
            break;
        case flavour = "BBQ Steak":
            switch (size) {
                case size = "small":
                    price = 500;
                    if (crust === "thin") {
                        totalPrice = (price * number) + 115;
                    } else if (crust === "thick") {
                        totalPrice = (price * number) + 175;
                    } else if (crust === "flatbread") {
                        totalPrice = (price * number) + 180;
                    } else {
                        totalPrice = (price * number) + 300;
                    }
                    break;
                case size = "medium":
                    price = 800;
                    if (crust === "thin") {
                        totalPrice = (price * number) + 115;
                    } else if (crust === "thick") {
                        totalPrice = (price * number) + 175;
                    } else if (crust === "flatbread") {
                        totalPrice = (price * number) + 180;
                    } else {
                        totalPrice = (price * number) + 300;
                    }
                    break;
                case size = "large":
                    price = 1000;
                    if (crust === "thin") {
                        totalPrice = (price * number) + 115;
                    } else if (crust === "thick") {
                        totalPrice = (price * number) + 175;
                    } else if (crust === "flatbread") {
                        totalPrice = (price * number) + 180;
                    } else {
                        totalPrice = (price * number) + 300;
                    }
                    break;
            }
            break;
        case flavour = "Chicken Macon":
            switch (size) {
                case size = "regular":
                    price = 500;
                    if (crust === "thin") {
                        totalPrice = (price * number) + 115;
                    } else if (crust === "thick") {
                        totalPrice = (price * number) + 175;
                    } else if (crust === "flatbread") {
                        totalPrice = (price * number) + 180;
                    } else {
                        totalPrice = (price * number) + 300;
                    }
                    break;
                case size = "medium":
                    price = 800;
                    if (crust === "thin") {
                        totalPrice = (price * number) + 115;
                    } else if (crust === "thick") {
                        totalPrice = (price * number) + 175;
                    } else if (crust === "flatbread") {
                        totalPrice = (price * number) + 180;
                    } else {
                        totalPrice = (price * number) + 300;
                    }
                    break;
                case size = "large":
                    price = 1000;
                    if (crust === "thin") {
                        totalPrice = (price * number) + 115;
                    } else if (crust === "thick") {
                        totalPrice = (price * number) + 175;
                    } else if (crust === "flatbread") {
                        totalPrice = (price * number) + 180;
                    } else {
                        totalPrice = (price * number) + 300;
                    }
                    break;
            }
            break;
        case flavour = "Cheese Burger":
            switch (size) {
                case size = "small":
                    price = 500;
                    if (crust === "thin") {
                        totalPrice = (price * number) + 115;
                    } else if (crust === "thick") {
                        totalPrice = (price * number) + 175;
                    } else if (crust === "flatbread") {
                        totalPrice = (price * number) + 180;
                    } else {
                        totalPrice = (price * number) + 300;
                    }
                    break;
                case size = "medium":
                    price = 800;
                    if (crust === "thin") {
                        totalPrice = (price * number) + 115;
                    } else if (crust === "thick") {
                        totalPrice = (price * number) + 175;
                    } else if (crust === "flatbread") {
                        totalPrice = (price * number) + 180;
                    } else {
                        totalPrice = (price * number) + 300;
                    }
                    break;
                case size = "large":
                    price = 1000;
                    if (crust === "thin") {
                        totalPrice = (price * number) + 115;
                    } else if (crust === "thick") {
                        totalPrice = (price * number) + 175;
                    } else if (crust === "flatbread") {
                        totalPrice = (price * number) + 180;
                    } else {
                        totalPrice = (price * number) + 300;
                    }
                    break;
            }
            break;
        case flavour = "Chicken Hawaii":
            switch (size) {
                case size = "small":
                    price = 500;
                    if (crust === "thin") {
                        totalPrice = (price * number) + 115;
                    } else if (crust === "thick") {
                        totalPrice = (price * number) + 175;
                    } else if (crust === "flatbread") {
                        totalPrice = (price * number) + 180;
                    } else {
                        totalPrice = (price * number) + 300;
                    }
                    break;
                case size = "medium":
                    price = 800;
                    if (crust === "thin") {
                        totalPrice = (price * number) + 115;
                    } else if (crust === "thick") {
                        totalPrice = (price * number) + 175;
                    } else if (crust === "flatbread") {
                        totalPrice = (price * number) + 180;
                    } else {
                        totalPrice = (price * number) + 300;
                    }
                    break;
                case size = "large":
                    price = 1000;
                    if (crust === "thin") {
                        totalPrice = (price * number) + 115;
                    } else if (crust === "thick") {
                        totalPrice = (price * number) + 175;
                    } else if (crust === "flatbread") {
                        totalPrice = (price * number) + 180;
                    } else {
                        totalPrice = (price * number) + 300;
                    }
                    break;
            }
            break;
        case flavour = "Beef Pepperoni":
            switch (size) {
                case size = "small":
                    price = 500;
                    if (crust === "thin") {
                        totalPrice = (price * number) + 115;
                    } else if (crust === "thick") {
                        totalPrice = (price * number) + 175;
                    } else if (crust === "flatbread") {
                        totalPrice = (price * number) + 180;
                    } else {
                        totalPrice = (price * number) + 300;
                    }
                    break;
                case size = "medium":
                    price = 800;
                    if (crust === "thin") {
                        totalPrice = (price * number) + 115;
                    } else if (crust === "thick") {
                        totalPrice = (price * number) + 175;
                    } else if (crust === "flatbread") {
                        totalPrice = (price * number) + 180;
                    } else {
                        totalPrice = (price * number) + 300;
                    }
                    break;
                case size = "large":
                    price = 1000;
                    if (crust === "thin") {
                        totalPrice = (price * number) + 115;
                    } else if (crust === "thick") {
                        totalPrice = (price * number) + 175;
                    } else if (crust === "flatbread") {
                        totalPrice = (price * number) + 180;
                    } else {
                        totalPrice = (price * number) + 300;
                    }
                    break;
            }
            break;
    }
    switch (topping) {
        case topping = "Beef":
            totalPrice = totalPrice + 170;
            break;
        case topping = "onions":
            totalPrice = totalPrice + 40;
            break;
        case topping = "macon":
            totalPrice = totalPrice + 120;
            break;
        case topping = "capcicum":
            totalPrice = totalPrice + 80;
            break;
        case topping = "olives":
            totalPrice = totalPrice + 120;
            break;
        case topping = "pineapples":
            totalPrice = totalPrice + 120;
            break;
        case topping = "strawberries":
            totalPrice = totalPrice + 120;
            break;
        case topping = "macon":
            totalPrice = totalPrice + 140;
            break;
        case topping = "pork":
            totalPrice = totalPrice + 120;
            break;
        case topping = "Tomatoes":
            totalPrice = totalPrice + 60;
            break;
        case topping = "chicken Tikka":
            totalPrice = totalPrice + 170;
            break;

    }
     //Then
    let newOrder = order(flavour, size, crust, topping, number, totalPrice);
    console.log(newOrder); 

    //on placing order
    $('.summary').slideDown(1000);
    $('.cdata-overlay').slideUp();
    $('#list').slideDown();
    $('.deliver').show(1000);
    $('.delivernot').show(1000);

    $('#list').text(" ");
    $("#list").append("<br>" + "Flavour :   " + newOrder.f + "<br>" + "Size :   "
        + newOrder.s + "<br>" + "Crust :     "
        + newOrder.c + "<br>" + "Toppings :     "
        + newOrder.t + "<br>" + " Number of pizzas :    "
        + newOrder.n + "<br>" + "Total Price :  "
        + newOrder.total + "<br><br>").css('font-family', 'system-ui').css('font-size', '24px');
});

//to request delivery
$(".deliver").click(function () {
    $('.summary').slideUp();
    $('#list').slideUp();
    $('.summary').text("Provide location details").slideDown();
    $('.deliver').hide(1000);
    $('.delivernot').hide(1000);
    $('.cdata-overlay').show();
    
});
//on pressing enter
$(".btn").click(function () {
    var name = $('input#mane').val();
    var address = $('input#address').val();
    var street = $('input#street').val();
    alert(`Thank you ${name}. your order will be delivery to ${address}, ${street} street`)

});


//For self pick
$(".delivernot").click(function () {
    alert("your order has been placed successfully")

});
$(function () {
    $.scrollify.move('#sum-order');
});
});
});
