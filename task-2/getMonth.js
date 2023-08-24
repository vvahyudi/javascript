const getMonth = (callback) => {
	setTimeout(() => {
		let error = true
		let month = [
			"Januari",
			"Februari",
			"Maret",
			"April",
			"Mei",
			"Juni",
			"Juli",
			"Agustus",
			"September",
			"Oktober",
			"November",
			"Desember",
		]
		if (!error) {
			callback(null, month)
		} else {
			callback(new Error("Sorry data not found"), [])
		}
	}, 3000)
}

const showMonth = (error, month) => {
	if (error === null) {
		const monthsOrder = month.map(
			(value, index) => (value += ` adalah bulan ke-${index + 1}`),
		)
		console.log(monthsOrder)
	} else {
		console.log(error.message)
	}
}

getMonth(showMonth)
