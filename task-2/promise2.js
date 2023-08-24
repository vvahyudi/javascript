const playlist = [
	{ songTitle: "Standing In Motion", artist: "Yanni" },
	{ songTitle: "The End Of August", artist: "Yanni" },
	{ songTitle: "Love Me", artist: "Yiruma" },
]

const getPlaylist = (playlist) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			let success = true
			if (success) {
				resolve(playlist)
			} else {
				reject(new Error("Songs not found"))
			}
		}, 5000)
	})
}

const showPlaylist = (playlist) => {
	playlist.forEach((song) => {
		const { songTitle, artist } = song
		console.log(`${artist} - ${songTitle}`)
	})
}

getPlaylist(playlist)
	.then(showPlaylist)
	.catch((err) => console.log(err))

