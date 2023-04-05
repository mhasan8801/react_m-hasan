# Summary Section 26 Introduction GraphQL and Apollo Client Setup

1. **GraphQL** merupakan sebuah _query language_ yang digunakan untuk API dimana kita dapat mendefine skema data yang kita inginkan dan kita bisa mengatur field apa saja yang yang kia butuhkan. Dengan **GraphQL** kita hanya membutuhkan satu buah endpoint untuk menggunakan beberapa request yang ingin kita jalankan.

2. Dalam **GraphQL** terdapat beberapa query yang dapat kita gunakan yaitu _query basic_ untuk mengambil field tertentu, _query multiple related data source_ untuk mengambil beberapa data sekaligus dan _query multiple unrelated data source_ untuk mengambil data dengan endpoint berbeda seperti data movies dan books.

3. Pada **GraphQL** terdapat 3 fitur utama yaitu _query_ yang berguna untuk mendapatkan data atau berhubungan dengan fungsi read, _mutation_ untuk manipulasi data baik insert, update, delete dan fitur _subscription_ yang dapat digunakan untuk mendapatkan data secara realtime 

4. **Apollo** merupakan sebuah platform yang digunakan untuk membangun website berbasis **GraphQL**, terdapat _apollo client_ untuk segi tampilan dalam menyediakan fungsi pengambilan data dari server sedangkan _apollo server_ digunakan untuk memproses permintaan dari klien dan mengambil data dari sumber data.