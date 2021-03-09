//Basic JS dan JS ES6

//let vs const vs var
//let
// let bilanganPi = 3.14;
// bilanganPi = 3.; 

// console.log(bilanganPi);

// bilanganPi = 3.2;
// console.log(bilanganPi);

// //const
// const warna = ["merah", "kuning", "kelabu"];
// warna.push("nila", "ungu");
// console.log(warna); // Output: ["merah", "kuning", "kelabu", "nila", "ungu"];

// //var
// var bahasaFavorit = "JavaScript";
// var bahasaFavorit = "Python";
// console.log(bahasaFavorit);

// //Scoping Variabel dengan var
// var judulBuku = "Harry Potter";
// if (judulBuku === "Harry Potter") {
//   var pengarang = "J.K. Rowling";
// }
// console.log(pengarang); // Output: J.K. Rowling

// //String Literal
// let nama = "sarah";
// let umur = 24;

// let kalimat = "Namanya " + nama + ". Umurnya " + umur + " tahun.";
// console.log(kalimat);

//Arrow Function
// const operasiPenjumlahan = (bilangan1, bilangan2) => {
//     const hasil =  bilangan1 + bilangan2;
//     return hasil;
//   };
//   console.log(operasiPenjumlahan(3, 4)); 
//   const namaJenisAnjing = () => {
//     const anjing = ["Pug", "Bulldog", "Poodle"];
//     return anjing[Math.floor(Math.random()*(anjing.length))];
//   } 
//   console.log(namaJenisAnjing());
 
// //Implicit Return Value
// function greeting(nama) {
//     return `Hi ${nama}`;
//  }
//  console.log(greeting('Einstein')); 


 // const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 33,
// };

// //Hallo, nama saya John Doe. Umur saya 33 tahun.
// let kalimat =
//   "Hallo, nama saya " +
//   person.firstName +
//   " " +
//   person.lastName +
//   ". Umur saya " +
//   person.age +
//   " tahun";

// let kalimat6 = `Hallo, nama saya ${person.firstName} ${person.lastName}. Umur saya ${person.age} tahun`;

// console.log(kalimat);
// console.log(kalimat6);

//Arrow Function

// function sayHello1() {}

// const sayHello2 = function () {};

// const sayHello3 = (param1, param2 = "Adam") => `Hello ${param1} ${param2}`;

// console.log(sayHello3("Stenly", "Doe"));

//Rest Parameter & Spread Operator
// const display = (param1, param2, ...rest) => {
//   console.log(param1, param2, rest);
// };

// display(1, 2, 3, 4, 5, 6);

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [8, 9];

// const combineArr = arr1.concat(arr2.concat(arr3));
// const combineArr = [...arr1, ...arr2, 7, ...arr3];
// const combineArr2 = [...combineArr];

// console.log(combineArr);

// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };

// const combineObj = { ...obj1, ...obj2 };
// console.log(combineObj);

// let person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 33,
// };

// person = {
//   ...person,
//   address: "Manado",
//   job: "Teacher",
// };

// console.log(person);

//Async JS
// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach((item) => {
//   console.log(item);
// });

// const output = numbers.map((item) => {
//   return item + 1;
// });
// console.log(output);

//Callback Function
// function display() {
//   console.log("Fungsi display");
// }

// function func1(callback) {
//   callback();
// }

// func1(() => {
//   console.log("Fungsi display");
// });

// function func1(callback) {
//   console.log("Fungsi 1");
//   callback();
// }

// function func2() {
//   console.log("Fungsi 2");
// }

// function display(callback) {
//   callback(func);
// }

// display(func1(func2));

//Async
//Single-Thread : Concurent
//Multi-Thread : Parallel

setTimeout(() => {
    console.log("Proses 1");
    setTimeout(() => {
      console.log("Proses 2");
      setTimeout(() => {
        console.log("Proses 3");
      }, 3000);
    }, 3000);
  }, 3000);
  
  // console.log("Proses 1");
  // setTimeout(() => {
  //   console.log("Proses 2");
  // }, 5000);
  // setTimeout(() => {
  //   console.log("Proses 3");
  // }, 2000);
  // console.log("Proses 4");
  
  // fetch("https://jsonplaceholder.typicode.com/users")
  //   .then((res) => res.json())
  //   .then((json) => {
  //     console.log(json);
  //   })
  //   .catch((error) => console.log(error));
  
  const getJSONPlaceholder = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const json = await res.json();
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  };
  
  getJSONPlaceholder();

