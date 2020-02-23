var subtotal_value = document.getElementById("subtotal_value");
var capacity;
var price = 180;

function update()
{
    var eight = document.getElementById("8g");
    var sixteen = document.getElementById("16g");
    var thirtytwo = document.getElementById("32g");

    var quantity = document.getElementById("quantity").value;
    if (eight.checked)
    {
        capacity = 180;
    } else if (sixteen.checked) {
        capacity = 249;
    } else if (thirtytwo.checked) {
        capacity = 429;
    }

    price = quantity * capacity;
    subtotal_value.innerHTML = price;
    localStorage.setItem("subtotal", price);
}

function getSubtotal()
{
    price = localStorage.getItem("subtotal");

    subtotal_value.innerHTML = price;
}