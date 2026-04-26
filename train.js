// console.log('====================================');
// console.log("Train task running!");
// console.log('====================================');

//  MIDTASK

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

console.log('====================================');
console.log("Jack Ma maslahatlari");
console.log('====================================');
const list = [
    "yaxshi talaba boling", // 0–20
    "togri boshliq tanlang va koproq hato qiling", // 20–30
    "uzingizga ishlashingizni boshlang", // 30–40
    "siz kuchli bolgan narsalarni qiling", // 40–50
    "yoshlarga investitsiya qiling", // 50–60
    "endi dam oling, foydasi yoq endi", // 60
];

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


//ASYNCH FUNCTION
async function maslahatBering(a) {
    if (typeof a !== 'number') {
        throw new Error("insert a number", null);
    } else if (a <= 20) {
        return list[0];
    } else if (a > 20 && a <= 30) {
        return list[1];
    } else if (a > 30 && a <= 40) {
        return list[2];
    } else if (a > 40 && a <= 50) {
        return list[3];
    } else if (a > 50 && a <= 60) {
        return list[4];
    } else {

        // return list[5];

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(list[5])
            }, 5000);
        });
    }
}



// //call by then/catch
// console.log("Passed here 0");
// maslahatBering(25)
//     .then(data => {
//         console.log("response:", data);
//     })
//     .catch((err) => {
//         console.log("ERROR:", err);
//     });
// console.log("Passed here 1");


//Promise hell piramidadek syntaxdan yozish noqulay

// Orniga async functionni call qilishda ham async call qilamiz

// console.log("Passed here 0");
// maslahatBering(25)
//     .then(data => {
//         console.log("Passed here 0");
//         maslahatBering(25)
//             .then(data => {
//                 console.log("Passed here 0");
//                 maslahatBering(25)
//                     .then(data => {
//                         console.log("response:", data);
//                     })
//                     .catch((err) => {
//                         console.log("ERROR:", err);
//                     });
//                 console.log("Passed here 1");

//                 console.log("response:", data);
//             })
//             .catch((err) => {
//                 console.log("ERROR:", err);
//             });
//         console.log("Passed here 1");

//         console.log("response:", data);
//     })
//     .catch((err) => {
//         console.log("ERROR:", err);
//     });
// console.log("Passed here 1");


// call by asynch/ await
async function run() {
    let res = await maslahatBering(20);
    console.log(res);
    res = await maslahatBering(31);
    console.log(res);
    res = await maslahatBering(51);
    console.log(res);

}

run();


