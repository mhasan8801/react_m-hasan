# Summary Section 15 Event Handling

1. **State** adalah data private sebuah komponen dimanan data ini hanya tersedia hanya untuk komponen tersebut dan tidak dapat diakses dari komponen lain, kriteria state adalah bisa dimodifikasi dengan setState dan akan terjadi render ulang setelahnya, bersifat asynchronous, serta dipakai dalam class

2. **Stateful components**(atau Class Components) adalah komponen yang memiliki state serta digunakan untuk komponen yang memiliki tingkat kompleksitas yang lebih tinggi, seperti form input atau komponen yang memerlukan interaksi pengguna. Sedangkan **Stateless components** (atau Function Components) adalah komponen yang tidak memiliki state, dan hanya menerima props sebagai input dan menghasilkan JSX sebagai output.

3. **Handling Event** merupakan suatu metode untuk menangani sebuah aksi/event yang diberikan pengguna terhadapa suatu komponen, sedangkan event sendiri adalah suatu peristiwa yang terjadi karena pengguna melakukan sesuatu pada komponen seperti saat tombol ditekan. Beberapa contoh list event pada react yaitu _Clipboar events, form events, mouse events, dan generic events_.
