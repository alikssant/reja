// TASK-C

// Shop nomli class tuzing, va bu class 3 xill parametr qabul qilsin.
// Hamda classning quyidagdek 3'ta metodi bo'lsin:

// 1) qoldiq
// 2) sotish
// 3) qabul

// Har bir metod ishga tushgan vaqtda log qilinsin
// MASALAN:
// const shop = new Shop(4, 5, 2)
// shop.qoldiq();
// natija qaytishi kerak: Hozir 20: 40'da 4'ta non, 5'ta lag'mon va 2'ta cola mavjud
// shop.sotish("non", 3); & shop.qabul("cola", 4); & shop.qoldiq();
// Natija qaytishi kerak: Hozir 20:50da 1ta non, 5ta lag'mon va 6ta cola mavjud!

// Yechim
class Shop {
  constructor(non, lagmon, cola) {
    this.non = non;
    this.lagmon = lagmon;
    this.cola = cola;
  }

  getCurrentTime() {
    const now = new Date();
    const hour = ("0" + now.getHours()).slice(-2);
    const minute = ("0" + now.getMinutes()).slice(-2);
    return `${hour}:${minute}`;
  }
  qoldiq() {
    const time = this.getCurrentTime();
    console.log(
      `Hozir ${time}da ${this.non}ta non, ${this.lagmon}ta lag'mon va ${this.cola}ta cola mavjud`
    );
  }
  sotish(mahsulot, soni) {
    if (this[mahsulot] === undefined) {
      console.log(`Bunday mahsulot mavjud emas: ${mahsulot}`);
      return;
    }
    if (this[mahsulot] < soni) {
      console.log(`Kechirasiz, yetarli ${mahsulot} yo'q`);
      return;
    }

    this[mahsulot] -= soni;
    const time = this.getCurrentTime();
    console.log(`Hozir ${time}da ${soni}ta ${mahsulot} sotildi`);
  }
  qabul(mahsulot, soni) {
    if (this[mahsulot] === undefined) {
      console.log(`Bunday mahsulot mavjud emas: ${mahsulot}`);
      return;
    }

    this[mahsulot] += soni;
    const time = this.getCurrentTime();
    console.log(`Hozir ${time}da ${soni}ta ${mahsulot} qabul qilindi`);
  }
}

// Misol:
const shop = new Shop(4, 5, 2);
shop.qoldiq();
shop.sotish("non", 3);
shop.qabul("cola", 4);
shop.qoldiq();

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
