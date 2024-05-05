 // alert (1)

// console.log(salom);
//------------------------->>>

//"use, strict"---->>>muammoni hal qiladi kodni eski formatta yozsa ishlamaydi //

// let number = 3;
// console.log(number);

// number = 5;
// console.log(number);

// const pi = 3.14;
// console.log(pi);

// var x = 15;
// console.log(x);

// "use strict"
// a = 10;
// console.log(a);


//----2---->>

//const number = 8; //data type = number;
//const firstName = "shohruh"; //data type = string; "hamma narsa bolishi mumkin"
//const bool = false; // data type = boolean; true yoki false bo'ladi
//const isMaried = true;

//---kerakli qism---- "null va undefiend" 
//console.log(a); //data type  = null;

//let lastName;
//console.log(lastName); // undefiend

//console.log( 4 / 0 ); //Infinity xolat mumkin bo'lmagan
//console.log( -4 / 0 ); //-Infinity xolat mumkin bo'lmagan

//console.log("shohruh" * 10);//NaN -> son emas

// let lastName;
// console.log(lastName);

// 'use strict';
// const person =  {
//   firstName: "Shohruh",
//   lastName: "Rahmonqulov",
//   age: 17,
//   job: "Front-end Js developer",
//   isMaried: false,
// };
// console.log(person);//persondan keyin nuqta qo'yib kalit yordamida qidirsa bo'ladi
// //             0      2          3      4   5  6     7
// const arr = ["red", "black", "yellow", {}, [], 10, false]; //sanoq 0 dan boshlanadi
// console.log(arr[0]);//massivlar hamma qiymatni chiqaradi [ ichidagi ] qiymatni chiqarish

"use strict";

//alert("Hello World"); //ok bo'limi faqat

//confirm("Siz 18 yoshdamisiz"); //ok va otmena ma'lumotlari

//const userAge = confirm("Siz 18 yoshdamisiz?");
//console.log(userAge);//true false chiqarish

//const userName = prompt("Ismiz nima?", "");
//console.log(userName);//ma'lumot yozish uchun joy bekor qilsa null qiymat beradi

// const answers = [];
// answers[0] = prompt('Ismingiz nima ?');
// answers[1] = prompt('Familiyangiz nima ?');
// answers[2] = prompt("Yoshingiz nima ?");

// // console.log(answers); // malomotni console ga chiqaradi
// document.write(answers);// malumotni ekranga chiqaradi 

// const firstName = prompt('Ismingiz nima ? ');
// console.log(typeof firstName); // string turida


// const firstName = +prompt('Yoshingiz nechchida ?');
// console.log(typeof firstName); // + belgisi bilan raqam bo'ladi.

// const firstName = +prompt('Yoshingiz nechchida ?');
// console.log(firstName + 10); // son qo'shadi

//const firstName = prompt('Yoshingiz nechchida ?');
//console.log(firstName + 10); // sonlarni ketma-ket yozadi prompt da + ishorasi bo'lmasa

// alert('Hello world');

// const firstName = "Shohruh";
// const age = 17;

// console.log(`Mani ismim ${firstName} va mani yoshim ${age} da`);

// const xName = prompt('Enter your name ?', "");
// console.log(`User's name ${xName}`);

"use strict";

// const x = 10,
//       y = 15;


// console.log(x + y);
// console.log(x - y);
// console.log(5 / 5);
// console.log(5 * 5);

//------------------>>>>
// console.log("Hello" + " " +"World");

//--------------------->>>>
// let z = 10;
// console.log(++z);
// console.log(z);

//-------------->>>>

// let incr = 99;
// let decr = 99;

// console.log(++incr);
// console.log(--decr);

// console.log(incr++);
// console.log(decr++);

// ----------------->>>>

// console.log(5 % 2); // ----------------->>> qoldiq
                          
// const q = 15;
// const m = 7;

// console.log(q % m);

// console.log(2 * 3 == 6); // true
// console.log(2 * 3 == "6");// true
// console.log(2 * 3 === "6"); // falce
//----------------------->>>>
// const isCheked = true,
//       isClose = false;

// console.log(isCheked && isClose);  // && -hammasi true bo'lsa true bo'ladi.
//                                    // || -bittasi true bo'lsa true bo'ladi. 
//                                   // ! -not false qiymat teskarisiga o'zgaradi.
// console.log(isCheked && !isClose); 

// ---------------->>>>>>>>>

// const isChecked = true,
//       isClose = false;

// console.log(isChecked && (isClose || !isChecked)); // ishlatilishi
// ----------------->>>>>>>>




// -------------------14------------------DARS-------->>>>>
// "use strict"

// const age = 25;

// if (age < 20) {  // if ishlamasa else ishlaydi
//   console.log("Kichkina");
// } else if (age == 25) { // yosh teng bo'lganda if va else bit xil ishlatiladi
//   console.log("Yosshlar teng");
// } else {     // else ----agarda degani
//   console.log("Standart yosh");
// }


// const num = 10;

// num == 10 ? console.log('ok') : console.log('Not right');
// // ? - bu belgi { if } o'rnida ishlatiladi.
// // : - bu belgi { else } o'rnida ishlatiladi. 


// "use strict"

// const num = 30;

// switch (num) {
//   case 20:
//    console.log('OK');  // switch case ham huddi if=else-dek 
//   break; 
//   case 30:
//    console.log('30'); // case-dan keyin doimo { break } ishlatiladi.
//   break; 
//    default: 
//     console.log("Default case"); // default dan keyin yozish shart emas.
// }



// ----------------------15----------------------->>>>>>>>>>>>
"use strict";


// let x = 5; // let o'zgaruvchi

// // the first method
// while(x <= 10) {
//   console.log(x);
//   x++;
// }


// //the second method
// do {
//   console.log(x);
//   x++
// } while(x <= 10)


// //the third method
// for(let i = 0; i <=10; i++){
//   if ( i == 5) {
//    //  break; // i == 5 ga bormasi to'xtaydi.
//    continue; // i == 5 ni tashlab ketadi. 
//   }
//   console.log(i);
// } // i -- faqat { for } ichida ishlaydi



// "use strict";

// const firstName = "Shohruh";
// const age = 19;

// // console.log(`Mening ismim ${firstName} va yoshim ${age}`);

// const name = prompt("Ismimgizni  kiriting", "");
// console.log(`mening ismim ${name}`);


















































