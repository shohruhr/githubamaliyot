// git-hubga qo''shish
// git add -A birishchi tanlanadi
//git commit -m "nom beriladi" > commentariya 
//git push >joylanadi

//git clone > git hub clone codi yozildi
//clone papkaga yozgan narsalarni joylash uchun cd <papka nomi>
//git pull >joylanadi








// -------------------------------------------------------------------------------

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

//"use strict";

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

//"use strict";

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
//"use strict";


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

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<17>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// "use strict";

// function getText(text) {    // text qiymati berilgani uchun getText ni chiqaradi.
//   console.log(text);
// }

// getText("Hello Text");




// "use strict";

// function getText() {
//   console.log("hello world");
// }

// getText();



// let number = 8;

// function getText(text) {
//   console.log(text);
//    number = 10;
//   console.log(number);

// }

// getText("hello world");
// console.log(number);


// let number = 8;  // gobal o'zgaruvchi 

// function getText(text) {
//   console.log(text);
//     let number = 10;
//   console.log(number);
//   //ichki o'zgaruvchi.

// }

// getText("hello world");
// console.log(number);


// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<18>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// "use strict";

// function playFootball(player, callback) {
//   console.log(`Name of player ${player}`);
//   callback();
// }

// playFootball('MoSalah', function () {
//   console.log("His shot 100 goals");
// });

// <<<<<<<<<<<<<<<2-XIL USUL>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// "use strict";

// function playFootball(player, callback) {
//   console.log(`Name of player ${player}`);
//   callback();
// }

// function goals() {
//   console.log("His shot 100 goals");
// }

// playFootball("MoSalah", goals);




//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<19>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// const text = "Hello world";
// const son = [1, 2, 3, 4, 5];

// console.log(son.length);



// const text = "Hello world";         //console.log(text[son]) <-- qo'yilsa o'sha o'rindagi sonni oladi
// console.log(text[2]);                                          //sanashni 0 dan boshlaydi. 



// "use strict"; 

// const text = "Hello world";

// // // // console.log(text[2]);

// // // // console.log((text[0] = "M"));
// // // // console.log(text);

// // // console.log(text.toLocaleLowerCase());
// // // console.log(text.toLocaleUpperCase());

// // console.log(text.indexOf("d"));

// console.log(text.slice(6, 11));
// console.log(text.substr(6, 11));


// const number = 8.8;
// console.log(Math.round(number));


// const borderWidth = "12.8px";
// console.log(parseInt(borderWidth));


//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<20>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<21>>>>>>>>>>>>>>>>>>>>>>>>>>>


// "use  strict";

// const person = {
//   name: Shohruh, //data type string
//   lastName: Raahmonqulov,
//   age: 17, // data type number
//   wishes: [], //array
//   language: function() {}, //funksiylar
//   mother: {
//     name:"name", 
//   },
// };

// const obj = {
//   name: 'div',
//   width:400,
//   height:400,
//   color:{
//     border:"crimson",
//     bg:"coral",
//   },
// };


// // console.log(obj);

// // delete obj.name;

// // console.log(obj);

// let counter = 0;



// for(let key in obj) {
//   if(typeof obj[key] == "object") {
//     for (let i in obj[key]) {
//       console.log(`Property ${key} value ${obj[key][i]}`);
//       counter++;
//     }
//   } else{
//  console.log(`Property ${key} value ${obj[key]}`);
//  counter++;
// }


// console.log(counter);


//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<21>>>>>>>>>>>>>>>>>>>>>>>
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<22>>>>>>>>>>>>>>>>>>>>>>>

// "use strict";

// const arr = [1, 2, 3, 4];

// arr.unshift(0);// boshidan qo'shadi belgini
// console.log(arr);

// arr.shift()
// console.log(arr); //boshdan 1 taelementni oladi

// massivga qo'shish va olib tashlash

// //arr.pop();//massivni oxiridan delete qiladi pop()
//arr.push(5); //qo'shadi oxiriga push()
//console.log(arr)

// //----------
// for(let i = 0; i < arr.length; i++){
//   console.log(arr[i]);
// }


//for (let key of arr) { // val bolsa shuncha takrorlaydi key bolsa faqat ozi chiqadi
//  console.log(key);
//}

// const colors = ["red", "black", "crimson"];

// colors.forEach (function(item, index, arr) { //ozimizdan yoziladi. func ichiga
//   console.log(item, index, arr);
// });

//=============


// const questions = prompt("", "");
// const answers = questions.split(",");

// console.log(answers);
// console.log(answers.join('; '));


// const number = [2, 10, 17, 24, 8];

// number.sort(sortArr);// birinchi raqamdan taxlaydi [ 10, 17, 2, 24, 8 ]
// console.log(number);

// function sortArr(a, b) { // kattaligi bo'yicha taxlaydi number.sort(sortArr); qiymati berilsa
//      return a - b;       //[ 2, 8, 10, 17, 24 ]
// } 


//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<23>>>>>>>>>>>>>>>>>>>>>>











































