// console.log('====================================');
// console.log("Train task running!");
// console.log('====================================');


// MIT-TASK F

//gptdan foydalandim  let b = a + 1 ikkinchi for qanday mantioq bilan boshlashni bilmadim

const list = []
function findDoublers(str) {

    for (let i = 0; i < str.length; i++) {
        list.push(str[i])
    }

    for (let a = 0; a < list.length; a++) {


        for (let b = a + 1; b < list.length; b++) {
            // console.log(list[a], list[b])
            if (list[a] === list[b]) {
                return true
            }
        }
    }
    return false
}

console.log(findDoublers("helo"))








// // MIT-TASK E

// const list = [];

// function getReverse(string) {
//     for (let i = 0; i < string.length; i++) {
//         const element = string[i];
//         list.push(element)
//     }
//     return list.reverse().join('')
// }

// // console.log(getReverse("hello"));
// console.log(getReverse("Kevin"));













// // MIT-TASK D

// const list1 = [];
// const list2 = [];
// function checkContent(item1, item2) {
//     for (let i = 0; i < item1.length; i++) {
//         // console.log(item1[i])
//         list1.push(item1[i])
//     }

//     for (let i = 0; i < item2.length; i++) {
//         // congit sole.log(item2[i])
//         list2.push(item2[i])
//     }

//     let sorted1 = list1.sort().join('')
//     let sorted2 = list2.sort().join('')
//     // console.log(sorted1);
//     // console.log(sorted2);
//     if (sorted1 == sorted2) {
//         return true
//     } else {
//         return false
//     }

//     // console.log(list1.sort())
//     // console.log(list2.sort())
// }

// // console.log(checkContent("mitgroup", "gmtiprou"));
// console.log(checkContent("Kevin", "Kevin"));









// // MIT-TASK C

// const moment = require('moment');


// // console.log('====================================');
// // console.log(moment().format('MMMM Do YYYY, h:mm a'));
// // console.log('====================================');


// const time = moment().format('MMMM Do YYYY, h:mm a');

// class Shop {
//     constructor(param1, param2, param3) {
//         this.param1 = param1;
//         this.param2 = param2;
//         this.param3 = param3;

//     }
//     // qoldiq parametr berildi boshqa mahsulot ham hisobga olgan holda
//     qoldiq(item1, item2, item3) {
//         console.log('====================================');
//         console.log(`Bugun hozir ${time} da ${this.param1} ta ${item1}, ${this.param2} ta ${item2} va ${this.param3} ta ${item3} mavjud! `);
//         console.log('====================================');
//     }

//     sotish(item, num) {
//         if (item === "non") {
//             this.param1 -= num;
//         } else if (item === "lag'mon") {
//             this.param2 -= num;
//         } else {
//             this.param3 -= num;
//         }
//     }

//     qabul(item, num) {
//         if (item === "non") {
//             this.param1 += num;
//         } else if (item === "lag'mon") {
//             this.param2 += num;
//         } else {
//             this.param3 += num;
//         }
//     }
// }



// const shop = new Shop(4, 5, 2);

// shop.qoldiq("non", "lag'mon", "cola");  // SHOP faqat non lagmon va cola emas boshqa mahsulotlar bolishi ham mumkin deb qoldiq metodga parametr berildi.

// // shop.sotish("non", 3)

// // shop.qoldiq("non", "lag'mon", "cola")

// // shop.qabul("cola", 4)

// // shop.qoldiq("non", "lag'mon", "cola")

// // shop.qabul("lag'mon", 4)
// // shop.qoldiq("non", "lag'mon", "cola")

// shop.sotish("non", 3);
// shop.qabul("cola", 4);
// shop.qoldiq("non", "lag'mon", "cola");


// // MIT-TASK B

// let count = 0;

// function countnum(sen) {
//     for (let i = 0; i < sen.length; i++) {
//         if (sen[i] <= 9) {
//             count++
//         }  // agar minusli sonlar ham qatnashsa

//     }
//     return count;
// }

// console.log(countnum("-3-4ad2a54y79wet0sfgb9"))
// console.log(countnum("123456789"))










//  MIT-TASK A

// let count = 0;
// function num(sen, inc) {
//     for (let i = 0; i < sen.length; i++) {
//         if (sen[i] === inc) {
//             count++
//         }
//     }
//     return count;
// }

// console.log(num("Aziz", "z"));


////////////////////////////////////////////

// console.log('====================================');
// console.log("Jack Ma maslahatlari");
// console.log('====================================');
// const list = [
//     "yaxshi talaba boling", // 0–20
//     "togri boshliq tanlang va koproq hato qiling", // 20–30
//     "uzingizga ishlashingizni boshlang", // 30–40
//     "siz kuchli bolgan narsalarni qiling", // 40–50
//     "yoshlarga investitsiya qiling", // 50–60
//     "endi dam oling, foydasi yoq endi", // 60
// ];

//CALLBACK FUNCTION
// function maslahatBering(a, callback) {
//     if (typeof a !== 'number') {
//         callback("insert a number", null);
//     } else if (a <= 20) {
//         callback(null, list[0]);
//     } else if (a > 20 && a <= 30) {
//         callback(null, list[1]);
//     } else if (a > 30 && a <= 40) {
//         callback(null, list[2]);
//     } else if (a > 40 && a <= 50) {
//         callback(null, list[3]);
//     } else if (a > 50 && a <= 60) {
//         callback(null, list[4]);
//     } else {
//         setTimeout(function () {
//             callback(null, list[5]);
//         }, 5000);

//         // callback(null, list[5]);
//     }
// }


// function maslahatBering(a, callback) {
//     if (typeof a !== 'number') {
//         callback("insert a number", null);
//     } else if (a <= 20) {
//         callback(null, list[0]);
//     } else if (a > 20 && a <= 30) {
//         callback(null, list[1]);
//     } else if (a > 30 && a <= 40) {
//         callback(null, list[2]);
//     } else if (a > 40 && a <= 50) {
//         callback(null, list[3]);
//     } else if (a > 50 && a <= 60) {
//         callback(null, list[4]);
//     } else {
//         setInterval(function () {
//             callback(null, list[5]);
//         }, 1000);

//         // callback(null, list[5]);
//     }
// }

// console.log("Passed here 0");
// maslahatBering(100, (err, data) => {
//     if (err) {
//         console.log("ERROR", err);
//     } else {
//         console.log('response:', data);

//     }
// });
// console.log("Passed here 1");







// console.log("Passed here 0");
// maslahatBering(50, (err, data) => {
//     if (err) {
//         console.log("ERROR", err);
//     } else {
//         console.log('response:', data);

//     }
// });
// console.log("Passed here 1");


// //ASYNCH FUNCTION
// async function maslahatBering(a) {
//     if (typeof a !== 'number') {
//         throw new Error("insert a number", null);
//     } else if (a <= 20) {
//         return list[0];
//     } else if (a > 20 && a <= 30) {
//         return list[1];
//     } else if (a > 30 && a <= 40) {
//         return list[2];
//     } else if (a > 40 && a <= 50) {
//         return list[3];
//     } else if (a > 50 && a <= 60) {
//         return list[4];
//     } else {

//         // return list[5];

//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(list[5])
//             }, 5000);
//         });
//     }
// }



// // //call by then/catch
// // console.log("Passed here 0");
// // maslahatBering(25)
// //     .then(data => {
// //         console.log("response:", data);
// //     })
// //     .catch((err) => {
// //         console.log("ERROR:", err);
// //     });
// // console.log("Passed here 1");


// //Promise hell piramidadek syntaxdan yozish noqulay

// // Orniga async functionni call qilishda ham async call qilamiz

// // console.log("Passed here 0");
// // maslahatBering(25)
// //     .then(data => {
// //         console.log("Passed here 0");
// //         maslahatBering(25)
// //             .then(data => {
// //                 console.log("Passed here 0");
// //                 maslahatBering(25)
// //                     .then(data => {
// //                         console.log("response:", data);
// //                     })
// //                     .catch((err) => {
// //                         console.log("ERROR:", err);
// //                     });
// //                 console.log("Passed here 1");

// //                 console.log("response:", data);
// //             })
// //             .catch((err) => {
// //                 console.log("ERROR:", err);
// //             });
// //         console.log("Passed here 1");

// //         console.log("response:", data);
// //     })
// //     .catch((err) => {
// //         console.log("ERROR:", err);
// //     });
// // console.log("Passed here 1");


// // call by asynch/ await
// async function run() {
//     let res = await maslahatBering(20);
//     console.log(res);
//     res = await maslahatBering(31);
//     console.log(res);
//     res = await maslahatBering(51);
//     console.log(res);

// }

// run();


