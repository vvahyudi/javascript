const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
	if (
		typeof nilaiAwal !== "number" ||
		typeof nilaiAkhir !== "number" ||
		!Array.isArray(dataArray)
	) {
		return "Tipe data tidak sesuai"
	}

	if (nilaiAwal > nilaiAkhir) {
		return "Nilai akhir harus lebih besar dari nilai awal"
	}

	if (dataArray.length < 5) {
		return "Data tidak boleh kurang dari 5"
	}

	const filteredArray = dataArray.filter(
		(data) => data >= nilaiAwal && data <= nilaiAkhir,
	)

	if (filteredArray.length === 0) {
		return "Data tidak ditemukan"
	}

	const sortedArray = filteredArray.slice().sort((a, b) => a - b)

	return sortedArray
}

console.log(seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]))
// Output: [8, 14, 17]

console.log(seleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8]))
// Output: “Nilai akhir harus lebih besar dari nilai awal”

console.log(seleksiNilai(4, 17, [2, 25, 4]))
// Output: “Jumlah angka dalam dataArray harus lebih dari 5”

console.log(seleksiNilai(5, 17, [2, 25, 4, 1, 30, 18]))
// Output: “Nilai tidak ditemukan”
