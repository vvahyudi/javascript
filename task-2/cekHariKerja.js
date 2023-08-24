// blok program
const cekHariKerja = (day) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"]
			let cek = dataDay.find((item) => {
				return item === day
			})
			if (cek) {
				resolve(cek)
			} else {
				reject(new Error(`Hari ini bukan hari kerja`))
			}
		}, 3000)
	})
}
// blok program

// callback function then catch
cekHariKerja("Rabu".toLowerCase())
	.then((result) => {
		console.log(result + " adalah hari kerja") // Menampilkan hasil jika promise berhasil
	})
	.catch((error) => {
		console.error(error.message) // Menampilkan pesan kesalahan jika promise ditolak
	})

// //callback function try catch
// Menggunakan async/await dengan try dan catch
async function checkDayWithTryCatch() {
	try {
		const result = await cekHariKerja("Rabu".toLowerCase()) // Menunggu hasil promise dengan await
		console.log(result + " adalah hari kerja") // Menampilkan hasil jika promise berhasil
	} catch (error) {
		console.error(error.message) // Menampilkan pesan kesalahan jika promise ditolak
	} finally {
		console.log("Selesai")
	}
}

checkDayWithTryCatch()

/* Penjelasan then...catch & try...catch
then...catch
then catch merupakan method yang mereturn Promise. 
then digunakan ketika Promise berstatus fullfilled (terpenuhi).
catch digunakan ketika Promise berstatus rejected.

try...catch
try catch merupakan deklarasi synchronous
try digunakan untuk menulis blok kode yang akan dijalankan.
catch digunakan untuk menulis blok kode yang akan dijalankan ketika terjadi error pada try.
*/
