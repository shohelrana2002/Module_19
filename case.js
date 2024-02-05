let school = "chukkmushs Primary school";
let subject = "Chemistry";
let book = "chemistry";
console.log(school);
console.log(school.toLowerCase());
console.log(school.toUpperCase());
if (subject.toLocaleLowerCase === book.toLocaleLowerCase) {
  console.log("Boi Porbo na Ami same tai");
} else {
  console.log("boi pora ar lagbe jehetu same na tai");
}

let drink = "water";
let liquid = "water ";
//  sapce saranor jono :trim use kora hoy
if (drink.trim === liquid.trim) {
  console.log("paanir opr nam jibon");
} else {
  console.log("pani khao jabe na");
}
