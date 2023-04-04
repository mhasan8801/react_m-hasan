# Summary Section 25 Authentication in React

1. **Authentication** di ReactJS merupakan sebuah proses untuk memastikan identitas pengguna yang melakukan interaksi dengan aplikasi web biasanya berupa login. Hal ini sangat penting karena akan menentukan apakah pengguna diizinkan mengakses fitur-fitur tertentu pada aplikasi. Pada umumnya authentication yang dilakukan berupa validasi _username/email_ dan _password_ pengguna.

2. Berbeda dengan authentication, untuk **authorization** merupakan proses untuk memeriksa apakah pengguna yang diizinkan untuk mengakses sumber daya atau melakukan tindakan tertentu pada website. Dalam proses authorization, website akan memeriksa hak akses pengguna dan mencocokkannya dengan role yang telah ditetapkan.

3. Pada ReactJS, authentication dapat dilakukan dengan menggunakan **JSON Web Token (JWT)**. Dapat dilakukan dengan mengirimkan token pada header request setiap kali pengguna mengakses API. Setelah token diterima oleh server, server akan memvalidasi token tersebut dan menentukan akses yang akan diberikan kepada pengguna untuk mengakses halaman atau fitur yang sudah ditetapkan.
