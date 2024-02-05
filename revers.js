let sentence = " I am Learning Web dev.";
// revrsh habe

let reverse = "";

for (let letter of sentence) {
  reverse = letter + reverse;
}
console.log(reverse);

// for
let rev = "";
for (let i = 0; i < sentence.length; i++) {
  // console.log(i)
  // console.log(sentence[i])
  let letter = sentence[i];
  rev = letter + rev;
}
console.log(rev);

// short cut

let reversed = sentence.split("").reverse("").join("");
console.log(reversed);
