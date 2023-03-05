const productNameInput = document.getElementById("productName");
const cekProductCategory = document.getElementById('productCategory');
const cekImageProduct = document.getElementById('imageProduct');
const cekProductFreshness = document.getElementsByName('productFreshness');
let freshnessValue = false;
const cekAdditional = document.getElementById('additionalProduct');
const productPriceInput = document.getElementById("productPrice");

const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", function (event) {
    if (productNameInput.value === "" || productNameInput.value.length > 25) {
        event.preventDefault();
        alert("Product Name must not be empty and must not exceed 25 characters.");
        return;
    } else if (productNameInput.value.match(/[\#\{\}\@\/\(\)]/g) !== null) {
        alert("Product name must not contain symbol.")
    } else if (cekProductCategory.value === "") {
        event.preventDefault();
        alert("Product Category must not be empty.");
        return;
    } else if (cekImageProduct.value === "") {
        event.preventDefault();
        alert("Product Image must not be empty.");
        return;
    } else if (cekProductFreshness.value === "") {
        event.preventDefault();
        alert("Product Freshness must not be empty.");
        return;
    } else if (cekAdditional.value === "") {
        event.preventDefault();
        alert("Product Additional must not be empty.");
        return;
    } else if (productPriceInput.value === "") {
        event.preventDefault();
        alert("Product Price must not be empty.");
        return;
    } else {
        alert("Product created successfully.");
    }

});