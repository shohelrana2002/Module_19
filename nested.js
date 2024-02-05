const collage = {
  nam: "Tangail Ploy: Ins:",
  events: ["21feb", "BijoyDibosh", "BookFair"],
  class: ["11", "12"],
  unique: {
    color: "blue",
    brand: "no brand",
    result: {
      gpa: 5,
      merit: "top",
    },
  },
};

collage.events[1] = "16December";
console.log(collage.unique.result["merit"]);

console.log(collage.events[2]);
console.log(collage.events[1]);
delete collage.class;
console.log(collage);
