let school = {
  classTime: "8:00 pm",
  examTime: "9.00pm",
  subject: "Bangla",
  roll: 571991,
  prpfection: "devloper",
};
let prof = "prpfection";
school[prof] = "Web Devloper Full Stack";
let sub = "subject";
// var er man change kora holo
school.classTime = "10.00am";

school["examTime"] = "12.00m";
console.log(school["classTime"]), console.log(school["examTime"]);
console.log(school[sub]);
console.log(school[prof]);
