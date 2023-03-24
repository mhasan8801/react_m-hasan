# Summary Section 19 React Form

1. Dalam React, kita dapat membuat form dengan menggunakan elemen HTML seperti form, input, textarea, dan select. Namun, input yang ada di dalam form tersebut diatur menggunakan state dalam komponen React. Ketika nilai input berubah, state diperbarui dan nilai input akan berubah sesuai dengan state yang baru. Oleh karena itu, state harus didefinisikan dalam komponen React dan nilai input harus dihubungkan ke state.

2. Controlled component adalah input form yang diatur sepenuhnya oleh React. Nilai input diatur oleh state dan ketika nilai diubah, state juga diperbarui. Input dikontrol sepenuhnya oleh React, sehingga React juga dapat memvalidasi input. Controlled component memudahkan pengelolaan state dan interaksi dengan elemen form.

3. Uncontrolled component membiarkan DOM mengatur input dan nilai input tidak diatur oleh state. Namun, nilai input masih dapat diakses menggunakan referensi pada DOM elemen input. Uncontrolled component memudahkan penggunaan elemen form dalam situasi sederhana dan dapat mempercepat waktu pengembangan.

4. Penggunaan controlled component lebih disukai daripada uncontrolled component karena React dapat mengontrol nilai input dan memvalidasi input. Selain itu, controlled component juga memudahkan pengelolaan state dan interaksi dengan elemen form.. Ketika memilih antara controlled component dan uncontrolled component, perlu dipertimbangkan kompleksitas aplikasi, kebutuhan validasi input, dan faktor-faktor lain seperti kecepatan pengembangan dan efisiensi memori.

5. React juga menyediakan kemampuan untuk melakukan validasi input form. Validasi dapat dilakukan dengan membuat fungsi validasi yang memeriksa nilai input dan memberikan pesan kesalahan jika nilai input tidak valid. Validasi dapat dilakukan baik pada controlled component maupun uncontrolled component.