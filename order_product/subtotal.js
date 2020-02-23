var subtotal_value = document.getElementById("subtotal_value");

function update()
{
    var quantity = document.getElementById("quantity").value;
    var price = quantity * 10;
    subtotal_value.innerHTML = price;
}