# Summary Section 20 Global State Management and Data fetching

1. **Global state management** adalah solusi yang ditawarkan pada react js untuk mengirim state ke element yang dalam, contoh global state management yang sering digunakan adalah **Redux** tapi ada contoh lain seperti _React Context Api, Recoil, x-state dan pop-x._

2. **Redux** merupakan library yang digunakan untuk management state global pada React JS yang menggunakan struktur _"one way data flow"_ dan menggunakan beberapa type code. **Redux** cocok digunakan dibeberapa kondisi yaitu ketika banyak state yang harus ditaruh dibanyak tempat, state sering berubah, logic untuk mengubah state begitu kompleks, code dalam lingkup besar serta melibatkan banyak orang dan ketika perlu mengetahui update state seiring berjalan waktu.

3. Beberapa jenis redux libraries dan tools yaitu _React-redux, Redux-toolkit, dan Redux Devtools Extentions_. Redux juga memiliki komponen penting yaitu _Actions, Reducer, dan Store._ Dalam redux kita dapat memakai dan mengubah state menggunakan _hooks dan connect_

4. **Redux-thunk** merupakan thunk middleware untuk redux yang dapat membuat action creator yang mengembalikan function bukan action. Untuk **persisted state** merupakan component redux yang dapat menyimpan state ke storage

5. **Data Fetching** merupakan sebuah proses aplikasi atau website yang menjalin interaksi atau komunikasi dengan sebuah server atau aplikasi lain yang di dalamnya terdapat proses request dan response. Untuk cara fetching data pada React JS dapat dilakukan dengan _Fetch Api yang sudah ada, menggunakan library Axios, dan menggunakan React Query Library._