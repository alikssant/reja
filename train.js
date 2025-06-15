// TASK D

// Ikkita parametra ega function tuzing,
// va functioning
// berilgan birinchi va ikkinchi parametr
// qiymatlari o'zaro to'liq
// mos kelsa true qiymat qaytarsin

// Masalan: checkContent("mitgroup", "gmtiprou");
// Yuqoridagi misolda birinchi va ikkinchi parametr
// qiymatli bir xil
// ya'ni bir xil harflar qatnashganligi
//  uchun true qiymat qaytaradi.

//Yechim

function checkContent(word1, word2) {
  const newWord = [...word1];
  newWord.sort();
  const newWord2 = [...word2];
  newWord2.sort();
  const sortedWord1 = newWord.join(""); // string qilamiz
  const sortedWord2 = newWord2.join(""); // string qilamiz
  if (sortedWord1 === sortedWord2) {
    return true;
  } else {
    return false;
  }
}
console.log("Example 1:", checkContent("mitgroup", "gmtiprou"));
console.log("Example 2:", checkContent("abc", "cab"));
console.log("Example 3:", checkContent("hello", "world"));
console.log("Example 4:", checkContent("aabc", "abcc"));

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
