# Perbedaan Synchronous dan Asynchronous dalam Javascript

Synchronous dan asynchronous dalam konteks JavaScript mengacu pada bagaimana kode dieksekusi dan berinteraksi dengan waktu. Berikut adalah perbedaan utama antara keduanya:

**Synchronous (Sinkron)**:

1. Kode synchronous dieksekusi dalam urutan berurutan. Setiap pernyataan atau fungsi harus menunggu hingga pernyataan atau fungsi sebelumnya selesai dieksekusi sebelum dapat berjalan.
2. **Order**: Urutan eksekusi kode harus berurutan, dan kode berjalan satu per satu dari atas ke bawah.
3. **Contoh**: Menggunakan fungsi `console.log()` atau pengulangan `for` akan dieksekusi secara berurutan.

**Asynchronous (Asinkron)**:

1. Kode asynchronous dieksekusi tanpa harus menunggu pernyataan atau fungsi sebelumnya selesai. Kode bisa berjalan secara bersamaan atau berpindah-pindah antara tugas.
2. **Callbacks**: Fungsi callback atau promise digunakan untuk menangani operasi yang memerlukan waktu (seperti membaca file atau mengambil data dari server) tanpa menghentikan eksekusi kode lainnya.
3. **Contoh**: Menggunakan `setTimeout()` untuk menjalankan kode setelah jeda waktu tertentu atau mengambil data dari server dengan `fetch()`.
