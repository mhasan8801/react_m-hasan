// Mengambil elemen-elemen dari DOM
const form = document.getElementById("form-hasan");
const firstNameInput = document.getElementById("inputFirstName");
const lastNameInput = document.getElementById("inputLastName");
const emailInput = document.getElementById("inputEmail");
const helpInput = document.getElementById("inputHelp");
const btnSubmit = document.getElementById("btnSubmit");

// Menambahkan event listener pada button
btnSubmit.addEventListener("click", () => {

    // Membuat pesan yang akan ditampilkan pada alert dari inputan form
    const message = `Name: ${firstNameInput.value} ${lastNameInput.value}\nEmail: ${emailInput.value}\nHelp: ${helpInput.value}`;

    // Menampilkan pesan pada alert
    alert(message);

    // Mengosongkan/reset field inputan
    form.reset();
});