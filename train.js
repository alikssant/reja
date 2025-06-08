// B-TASK:

//Shunday function tuzing, u 1ta string parametrga ega bolsin,
//  hamda osha stringda qatnashgan
//  raqamlarni sonini bizga return qilsin.
//MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.

//Yechim
function countDigits(string_param) {
  let count = 0;
  for (let i = 0; i < string_param.length; i++) {
    if (
      string_param[i] === "0" ||
      string_param[i] === "1" ||
      string_param[i] === "2" ||
      string_param[i] === "3" ||
      string_param[i] === "4" ||
      string_param[i] === "5" ||
      string_param[i] === "6" ||
      string_param[i] === "7" ||
      string_param[i] === "8" ||
      string_param[i] === "9"
    ) {
      count++;
    }
  }

  return count;
}

// Example:
console.log(countDigits("ad2a54y79wet0sfgb9"));

//console.log("Jack Ma maslahatlari");

const list = [
  "yahshi talaba boling", //0-20
  "togri boshliq tanlang va koproq hato qiling", //20-30
  "uzingizga ishlaringizni boshlang", //30-40
  "siz kuchli bolgan narsalarni qiling", //40-50
  "yoshlarga investitsiya qiling", //50-60
  "endi dam oling, foydasi yoq endi", //60
];

// function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("insert a number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     callback(null, list[5]);
//   }
// }

// maslahatBering(10, (err, data) => {
//   if (err) {
//     console.log("ERROR: ", err);
//   }
//   console.log("javob: ", data);
// });

// maslahatBering(25, (err, data) => {
//   if (err) {
//     console.log("ERROR: ", err);
//   }
//   console.log("javob: ", data);
// });

// maslahatBering(56, (err, data) => {
//   if (err) {
//     console.log("ERROR: ", err);
//   }
//   console.log("javob: ", data);
// });

// maslahatBering("salom", (err, data) => {
//   if (err) {
//     console.log("ERROR: ", err);
//   }
//   console.log("javob: ", data);
// });

// maslahatBering("salom", (err, data) => {
//   if (err) {
//     console.log("ERROR: ", err);
//   } else {
//     console.log("javob: ", data);
//   }
// });

// console.log("passed here 0");

// maslahatBering(65, (err, data) => {
//   if (err) {
//     console.log("ERROR: ", err);
//   } else {
//     console.log("javob: ", data);
//   }
// });

// console.log("passed here 1");

// function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("insert a number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setTimeout(function () {
//       callback(null, list[5]);
//     }, 5000);
//   }
// }

// console.log("passed here 0");

// maslahatBering(65, (err, data) => {
//   if (err) {
//     console.log("ERROR: ", err);
//   } else {
//     console.log("javob: ", data);
//   }
// });

// console.log("passed here 1");

// async function maslahatBering(a) {
//   if (typeof a !== "number") throw new Error("insert a number");
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else return list[5];

// return new Promise((resolve) => {
//   setTimeout(() => resolve(list[5]), 5000);
// });
//}

// console.log("passed here 0");

// maslahatBering(25)
//   .then((data) => {
//     console.log("javob:", data);
//   })
//   .catch((err) => {
//     console.log("ERROR:", err);
//   });

// console.log("passed here 1");

// async function maslahatBering(a) {
//   if (typeof a !== "number") throw new Error("insert a number");
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else return list[5];

//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(list[5]), 5000);
//   });
// }

// async/await
// async function run() {
//   let javob = await maslahatBering(65);
//   console.log(javob);
//   javob = await maslahatBering(31);
//   console.log(javob);
//   javob = await maslahatBering(41);
//   console.log(javob);
// }
// run();
