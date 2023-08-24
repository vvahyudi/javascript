# 10 Method Bawaan Javascript (Built-in Function)

1. **toString()**

   adalah fungsi yang digunakan untuk mengonversi nilai menjadi representasi string. Fungsi ini dapat diterapkan pada berbagai tipe data seperti angka, objek, array, boolean, dll., dan mengubah nilai tersebut menjadi string.

   Fungsi toString() bersifat non-mutating, yang berarti ketika Anda memanggil fungsi ini pada suatu nilai, ia tidak akan mengubah nilai asli. Sebagai gantinya, ia akan mengembalikan nilai baru dalam bentuk string.

   ```javascript
   const number = 42
   const stringNumber = number.toString() // Mengubah angka menjadi string
   console.log(stringNumber) // Output: "42"
   console.log(typeof stringNumber) // Output: "string"
   ```

2. **search()**

   digunakan untuk mencari kecocokan pola (pattern matching) dalam string menggunakan ekspresi reguler (regular expression). Fungsi ini akan mengembalikan indeks dari pertama kali ditemukannya pola dalam string. Jika pola tidak ditemukan, fungsi search() akan mengembalikan nilai -1.

   Fungsi search() bersifat non-mutating, artinya ia tidak mengubah isi dari string asli yang sedang dicari.

   ```javascript
   const string1 = "Lorem ipsum dolor sit amet"
   const searched = string1.search("sit")
   console.log(searched)
   ```

3. **substring()**

   Digunakan untuk mengambil sebagian dari string asli berdasarkan indeks yang ditentukan. Fungsi ini mengembalikan potongan dari string yang dimulai dari indeks awal (inklusif) hingga indeks akhir (eksklusif).

   Fungsi **substring()** bersifat non-mutating, yang berarti ia tidak mengubah string asli yang sedang diolah.

   ```javascript
   const string2 = "the fox jumps over the lazy dog"
   const substringed = string2.substring(3, 7)
   console.log(substringed)
   ```

4. **concat()**

   untuk menggabungkan 2 atau lebih string atau array menjadi satu string atau array baru. Fungsi ini mengembalikan string atau array baru yang merupakan hasil penggabungan dari string atau array yang diberikan.

   Fungsi concat() bersifat non-mutating, yang berarti ia tidak mengubah data asli yang sedang diolah.

   ```javascript
   //contoh penggunaan pada tipe data array
   const arr1 = [7, 8, 9]
   const arr2 = [1, 2, 3, 4, 5, 6]
   console.log(arr1.concat(arr2))
   ```

   ```javascript
   //contoh penggunaan pada tipe data string
   const string1 = "Hello, "
   const string2 = "world!"
   const string3 = " How are you?"
   const result = string1.concat(string2, string3)
   console.log(result) // Output: "Hello, world! How are you?"
   ```

5. **slice()**

   digunakan untuk membuat salinan dari sebagian array atau string asli. Fungsi ini mengembalikan array atau string baru yang berisi elemen atau karakter dari posisi indeks awal hingga indeks akhir yang ditentukan.

   Fungsi slice() bersifat non-mutating, yang berarti ia tidak mengubah array atau string asli yang sedang diolah.

   ```javascript
   //penggunaan dalam array
   const arr3 = [11, 12, 13, 14, 15]
   const sliced = arr3.slice(2, 4)
   console.log(sliced)
   ```

   ```javascript
   //penggunaan dalam string
   const sentence = "Hello, world!"
   const slicedSentence = sentence.slice(7, 12)
   console.log(slicedSentence) // Output: 'world'
   ```

6. **push()**

   Sebuah built-in function yang bersifat mutating, yang berarti ia mengubah array asli dengan menambahkan satu atau lebih elemen ke akhir array. Fungsi ini mengembalikan panjang baru dari array setelah elemen-elemen ditambahkan.

   ```javascript
   const fruits = ["apple", "banana", "cherry"]
   fruits.push("date") // Menambahkan elemen 'date' ke akhir array 'fruits'
   console.log(fruits) // Output: ['apple', 'banana', 'cherry', 'date']
   ```

7. **pop()**

   Digunakan untuk mengubah array asli dengan menghapus dan mengembalikan elemen terakhir dari array. Fungsi ini mengembalikan elemen yang dihapus dari array. Fungsi ini bersifat mutating.

   ```javascript
   const numbers = [1, 2, 3, 4, 5]
   const lastNumber = numbers.pop() // Menghapus dan mengembalikan elemen terakhir dari 'numbers'
   console.log(numbers) // Output: [1, 2, 3, 4] (elemen terakhir '5' dihapus)
   console.log(lastNumber) // Output: 5 (elemen terakhir yang dihapus)
   ```

8. **splice()**

   Digunakan untuk mengubah konten array asli dengan menghapus, mengganti, atau menambahkan elemen-elemen. Fungsi ini bersifat mutating.

   Fungsi splice() dapat digunakan untuk berbagai tujuan, seperti menghapus elemen-elemen, mengganti elemen, dan menambahkan elemen-elemen baru ke dalam array.

   Sintaks dasar `splice()`

   ```javascript
   array.splice(startIndex, deleteCount, ...itemsToAdd)
   ```

   ```javascript
   //Contoh Penggunaan splice()
   const colors = ["red", "green", "blue", "yellow"]
   // Menghapus 1 elemen ('green') dari indeks 1
   colors.splice(1, 1)
   console.log(colors) // Output: ['red', 'blue', 'yellow']

   // Menghapus 1 elemen ('blue') dan menambahkan 2 elemen baru ('purple', 'orange') dari indeks 1
   colors.splice(1, 1, "purple", "orange")
   console.log(colors) // Output: ['red', 'purple', 'orange', 'yellow']
   ```

9. **shift()**

   Digunakan untuk mengubah array asli dengan menghapus dan mengembalikan elemen pertama dari array. Fungsi ini menggeser semua elemen ke indeks yang lebih rendah (indeks berkurang), sehingga panjang array akan berkurang satu.

   ```javascript
   //contoh penggunaan shift()
   const fruits = ["apple", "banana", "cherry"]
   const firstFruit = fruits.shift() // Menghapus dan mengembalikan elemen pertama dari 'fruits'
   console.log(fruits) // Output: ['banana', 'cherry'] (elemen pertama 'apple' dihapus)
   console.log(firstFruit) // Output: 'apple' (elemen pertama yang dihapus)
   ```

   fungsi shift() akan mengubah array asli dengan menghapus elemen pertama dan menggeser semua elemen lainnya ke indeks yang lebih rendah. Hal ini dapat memengaruhi performa, terutama pada array besar, karena seluruh elemen harus digeser.

10. **unshift()**

    Digunakan untuk mengubah array asli dengan menambahkan satu atau lebih elemen ke awal array. Elemen-elemen yang ada akan digeser untuk memberi tempat pada elemen-elemen baru. Fungsi ini bersifat mutating.

    Sintaks **unshift()**

    ```javascript
    array.unshift(element1, element2, ..., elementN);
    ```

    ```javascript
    //Contoh penggunaan unshift()
    const numbers = [2, 3, 4]
    numbers.unshift(0, 1) // Menambahkan elemen-elemen ke awal 'numbers'
    console.log(numbers) // Output: [0, 1, 2, 3, 4]
    ```
