// let scores = [90, 85, 70];
// let arrJohn = ["John", "Doe", 33, true, scores];
// // console.log(arrJohn[4][1]);
// // console.log(arrJohn[1], arrJohn[2]);

// let objJohn = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 33,
//   isMarried: true,
//   scores: [100, 90, 85],
//   sayHello: function () {
//     console.log("Hello");
//   },
//   address: {
//     street: "Jl. Arnold Mononutu",
//     city: "Minahasa Utara",
//     province: "Sulawesi Utara",
//     postCode: "95371",
//   },
// };

// console.log(objJohn.lastName); //dot notation
// console.log(objJohn["age"]); //bracket notation
// console.log(objJohn.sayHello());
// console.log(objJohn.scores[0]);
// console.log(objJohn.address.province);

//Array Object
let users = [
    {
      fullName: "John Doe",
      age: 33,
      address: "Manado",
    },
    {
      fullName: "Stenly Adam",
      age: 30,
      address: "Minahasa Utara",
    },
    {
      fullName: "Jane Smith",
      age: 25,
      address: "Manado",
    },
  ];
  
  users.map(function (user) {
    console.log(user.fullName);
  });
  
  let filteredUsers = users.filter(function (user) {
    return user.address === "Manado";
  });
  
  let findUsers = users.find(function (user) {
    return user.address === "Manado";
  });
  
  console.log("Filter users: ", filteredUsers);
  console.log("Find users: ", findUsers);
  
  // let numbers = [1, 2, 3, 4, 5];
  
  // for (let i = 0; i < numbers.length; i++) {
  //   console.log(numbers[i]);
  // }
  
  // numbers.forEach(function (item, index, arr) {
  //   return (item *= 2);
  // });
  
  // let output = numbers.map(function (item) {
  //   return (item *= 2);
  // });
  
  // console.log("Array numbers : ", numbers);
  // console.log("Array output : ", output);