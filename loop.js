let computer = {
  brand: "hp",
  price: 5000,
  procesor: "intel",
  sd: "512",
};

for (let compute in computer) {
  console.log(compute);
  console.log(computer[compute]);
}

let keys = Object.keys(computer);

console.log(keys);

for (let key of keys) {
  console.log(key, "/", computer[key]);
}
