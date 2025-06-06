// A-TASK:
// Shunday 2 parametrli function tuzing,
//  hamda birinchi parametrdagi letterni ikkinchi
//  parametrdagi sozdan qatnashga sonini return
// qilishi kerak boladi.
// MASALAN countLetter("e", "engineer") 3ni return qiladi.

//Yechim

function countLetter(first_param, second_param) {
  let count = 0;
  second_param = second_param.toLowerCase();
  first_param = first_param.toLowerCase();

  for (let i = 0; i < second_param.length; i++) {
    if (second_param[i] === first_param) {
      count++;
    }
  }

  return count;
}

// Example:
console.log("Example #1: ", countLetter("e", "engineer"));
console.log("Example #2: ", countLetter("u", "bugun"));
console.log("Example #3: ", countLetter("I", "MIT"));
console.log("Example #4: ", countLetter("m", "recommend"));

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
