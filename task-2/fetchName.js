const fetchName = fetch("https://jsonplaceholder.typicode.com/users")
	.then((response) => response.json())
	.then((result) => {
		result.forEach((user) => {
			console.log(user.name)
		})
	})
	.catch((err) => console.log(err))
console.log(fetchName)
