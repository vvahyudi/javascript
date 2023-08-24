# Perbedaan `var`,`let`,dan `const`

`var`, `let`, dan `const` adalah kata kunci (keywords) yang digunakan dalam JavaScript untuk mendeklarasikan variabel. Meskipun fungsi utamanya adalah sama yaitu untuk menyimpan nilai, namun ada perbedaan penting di antara ketiganya.

Perbedaan utama di antara ketiganya adalah terkait dengan hoisting, scope, dan kemampuan untuk diinisialisasi ulang atau dideklarasikan ulang. Umumnya, disarankan untuk menggunakan `const` saat nilai variabel tidak akan berubah, dan menggunakan `let` ketika nilai variabel dapat berubah. `var` lebih jarang digunakan karena beberapa masalah scope yang dapat menyebabkan perubahan tak terduga dalam program.

1. `var`:

   - Variabel yang dideklarasikan menggunakan `var` memiliki fungsi hoisting, yang berarti deklarasi variabel akan dinaikkan ke atas lingkup fungsinya. Ini berarti variabel dapat diakses sebelum dideklarasikan.

   ```javascript
   console.log(x) // Output: undefined
   var x = 10
   console.log(x) // Output: 10
   ```

   Pada contoh di atas, variabel x diakses sebelum dideklarasikan. Ini terjadi karena konsep hoisting di mana deklarasi variabel x dinaikkan ke atas lingkup fungsinya.

   - Variabel `var` memiliki scope global atau fungsi, tetapi tidak memiliki blok scope (tidak terbatas pada blok kode).

   ```javascript
   var globalVar = "I am global"
   function exampleScope() {
   	var localVar = "I am local"
   	console.log(globalVar) // Output: I am global
   }
   exampleScope()
   console.log(localVar) // Error: localVar is not defined
   ```

   Pada contoh di atas, variabel globalVar dapat diakses di dalam fungsi dan di luar fungsi karena memiliki scope global atau fungsi. Namun, variabel localVar hanya dapat diakses di dalam fungsi karena variabel var tidak memiliki blok scope.

   - Variabel `var` dapat dideklarasikan ulang dan diinisialisasi ulang dalam satu scope yang sama.

   ```javascript
   var num = 5
   console.log(num) // Output: 5
   var num = 10 // Deklarasi ulang
   console.log(num) // Output: 10
   num = 15 // Inisialisasi ulang
   console.log(num) // Output: 15
   ```

2. `let`:

   - Variabel yang dideklarasikan menggunakan `let` juga memiliki hoisting, tetapi hanya dinaikkan ke atas blok kode tempat variabel dideklarasikan.

   ```javascript
   console.log(x) // Error: Cannot access 'x' before initialization
   let x = 10
   console.log(x) // Output: 10
   ```

   Pada contoh di atas, variabel x diakses sebelum dideklarasikan. Meskipun let juga mengalami hoisting, tetapi hoisting hanya berlaku dalam blok kode tempat variabel dideklarasikan.

   - Variabel `let` memiliki block scope, yang berarti variabel hanya berlaku di dalam blok kode tempat ia dideklarasikan.

   ```javascript
   if (true) {
   	let localVar = "I am local"
   	console.log(localVar) // Output: I am local
   }
   // console.log(localVar); // Error: localVar is not defined
   ```

   Pada contoh di atas, variabel localVar hanya berlaku di dalam blok if tempat ia dideklarasikan. Di luar blok tersebut, variabel tidak dapat diakses.

   - Variabel `let` dapat diinisialisasi ulang, tetapi tidak dapat dideklarasikan ulang dalam satu scope yang sama.

   ```javascript
   let num = 5
   console.log(num) // Output: 5
   num = 10 // Inisialisasi ulang
   console.log(num) // Output: 10
   // let num = 15; // Error: Identifier 'num' has already been declared
   ```

   Pada contoh di atas, variabel num dapat diinisialisasi ulang dengan nilai baru. Namun, variabel let tidak dapat dideklarasikan ulang dalam satu scope yang sama. Menggunakan let untuk mendeklarasikan variabel dengan nama yang sama dalam satu scope akan menyebabkan error.

3. `const`:

   - Variabel yang dideklarasikan menggunakan `const` juga memiliki hoisting seperti `let`, dan juga hanya dinaikkan ke atas blok kode tempat variabel dideklarasikan.

   ```javascript
   console.log(x) // Error: Cannot access 'x' before initialization
   const x = 10
   console.log(x) // Output: 10
   ```

   Pada contoh di atas, variabel x diakses sebelum dideklarasikan. Seperti let, hoisting const juga hanya berlaku dalam blok kode tempat variabel dideklarasikan.

   - Variabel `const` memiliki block scope dan juga bersifat konstan, artinya nilai yang disimpan tidak dapat diubah setelah diberikan nilai awal.

   ```javascript
   if (true) {
   	const pi = 3.14
   	console.log(pi) // Output: 3.14
   }
   // pi = 3.14159; // Error: Assignment to constant variable
   ```

   Pada contoh di atas, variabel pi hanya berlaku di dalam blok if tempat ia dideklarasikan. Selain itu, nilai variabel const tidak dapat diubah setelah diberikan nilai awal.

- Variabel `const` tidak dapat diinisialisasi ulang atau dideklarasikan ulang dalam satu scope yang sama.

  ```javascript
  const num = 5
  console.log(num) // Output: 5
  // const num = 10; // Error: Identifier 'num' has already been declared
  // num = 15; // Error: Assignment to constant variable
  ```

  Pada contoh di atas, variabel num tidak dapat dideklarasikan ulang dengan nama yang sama dalam satu scope yang sama. Selain itu, nilai variabel const tidak dapat diinisialisasi ulang setelah diberikan nilai awal.
