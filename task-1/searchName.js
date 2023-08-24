const nameList = [
	"Abigail",
	"Alexandra",
	"Alison",
	"Amanda",
	"Angela",
	"Bella",
	"Carol",
	"Caroline",
	"Carolyn",
	"Deirdre",
	"Diana",
	"Elizabeth",
	"Ella",
	"Faith",
	"Olivia",
	"Penelope",
]

const searchName = (nameToSearch, limit, cbNameList) => {
	const result = nameList.filter((name) =>
		name.toLowerCase().includes(nameToSearch.toLowerCase()),
	)
	return limit === undefined ? result : cbNameList(limit, result)
}

const setLimit = (limit, result) => result.slice(0, limit)

const search = searchName("an", 3, setLimit)
console.log(search)

// searchName adalah sebuah fungsi yang menerima tiga parameter: nameToSearch, limit, dan cbNameList.
// nameToSearch adalah string yang ingin dicari dalam daftar nama.
// limit adalah jumlah maksimal hasil pencarian yang ingin ditampilkan.

// cbNameList adalah fungsi yang akan digunakan untuk membatasi jumlah hasil pencarian jika limit diberikan.

// Dalam fungsi ini, pertama-tama, kita menggunakan metode filter untuk menghasilkan array result yang berisi nama-nama yang memenuhi kriteria pencarian. Metode filter ini memeriksa apakah setiap nama dalam nameList mengandung substring yang dicari, dan tidak memperdulikan apakah huruf besar atau kecil. Kami menggunakan metode toLowerCase() untuk memastikan perbandingan tidak peka terhadap huruf besar/kecil.

// Selanjutnya, kita menggunakan operator ternary (?:) untuk mengembalikan result jika limit tidak didefinisikan, atau memanggil fungsi cbNameList(limit, result) jika limit diberikan.

// setLimit adalah sebuah fungsi yang menerima dua parameter: limit dan result.

// limit adalah jumlah maksimal elemen yang ingin dipertahankan.

// result adalah array yang akan dipotong.

// Fungsi ini menggunakan metode slice() untuk mengambil sejumlah elemen pertama dari array result, sebanyak limit yang diberikan. Ini digunakan dalam konteks mengatur batas jumlah hasil pencarian yang ingin ditampilkan.

// Dengan menggunakan kedua fungsi di atas, kita dapat mencari nama dalam nameList, serta membatasi jumlah hasil pencarian sesuai dengan limit yang diinginkan.
