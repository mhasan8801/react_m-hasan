// Mengambil elemen pada HTML field from dengan DOM berdasarkan id
const productNameInput = document.getElementById("productName");
const cekProductCategory = document.getElementById('productCategory');
const cekImageProduct = document.getElementById('imageProduct');
const cekProductFreshness = document.getElementsByName('productFreshness');
const cekAdditional = document.getElementById('additionalProduct');
const productPriceInput = document.getElementById("productPrice");

// Mengambil elemen HTML untuk menangkap inputan ke table product
const formProduct = document.getElementById('form-created-product');
const tableProduct = document.getElementById('tableProduct');
const tableBody = tableProduct.querySelector('tbody');

// Mengambil button submit
const submitButton = document.getElementById("submit");

// Menambahkan event listener pada tombol Submit untuk validasi form
submitButton.addEventListener("click", function (event) {
    if (productNameInput.value === "" || productNameInput.value.length > 25) { //Mengecek Product Name kosong atau melebihi 25 karakter
        event.preventDefault(); //Melakukan set form tidak submit jika inputan tidak valid
        alert("Product Name must not be empty and must not exceed 25 characters."); //Menampilkan alert jika kosong atau melebih 25 char
        return; //Kembalikan nilai validasi
    } else if (productNameInput.value.match(/[\#\{\}\@\/\(\)]/g) !== null) { //Mengecek Product Name mengandung karakter @/#{}
        alert("Product name must not contain symbol.")
    } else if (cekProductCategory.value === "") { //Mengecek apakah Product category kosong
        event.preventDefault();
        alert("Product Category must not be empty.");
        return;
    } else if (cekImageProduct.value === "") { //Mengecek apakah Product image kosong
        event.preventDefault();
        alert("Product Image must not be empty.");
        return;
    } else if (cekProductFreshness.value === "") { //Mengecek apakah Product Freshness kosong
        event.preventDefault();
        alert("Product Freshness must not be empty.");
        return;
    } else if (cekAdditional.value === "") { //Mengecek apakah Product Additional kosong
        event.preventDefault();
        alert("Product Additional must not be empty.");
        return;
    } else if (productPriceInput.value === "") { //Mengecek apakah Product price kosong
        event.preventDefault();
        alert("Product Price must not be empty.");
        return;
    } else {
        // Jika semua input valid, submit form
        alert("Product created successfully."); //Tampilkan pesan sukses jika semua inputan valid
    }
});

// Menambahkan event listener pada tombol Submit untuk menambahkan data ke table product
formProduct.addEventListener('submit', function (event) {
    event.preventDefault();

    // Mengambil data dari form
    const formDataProduct = new FormData(formProduct);

    // Membuat table row baru
    const tableRow = tableBody.insertRow();

    // Memasukkan data Product Name pada cell
    const productNameCell = tableRow.insertCell();
    productNameCell.textContent = formDataProduct.get('productName');

    // Memasukkan data Product Category pada cell
    const productCategoryCell = tableRow.insertCell();
    productCategoryCell.textContent = formDataProduct.get('productCategory');

    // Memasukkan data Product Image pada cell
    const productImageCell = tableRow.insertCell();
    productImageCell.textContent = formDataProduct.get('imageProduct');

    // Memasukkan data Product Freshness pada cell
    const productFreshnessCell = tableRow.insertCell();
    productFreshnessCell.textContent = formDataProduct.get('productFreshness');

    // Memasukkan data Product Description/additional pada cell
    const productDescriptionCell = tableRow.insertCell();
    productDescriptionCell.textContent = formDataProduct.get('additionalProduct');

    // Memasukkan data Product Price pada cell
    const productPriceCell = tableRow.insertCell();
    productPriceCell.textContent = formDataProduct.get('productPrice');

    // Setelah inputan dimasukkan ke table, kosongkan form inputan
    formProduct.reset();
});