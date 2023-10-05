const froyoFlavors = prompt(
  "Enter your favorite froyo flavers seperate by ,"
).split(",");

let customerOrder = {};

for (flavor of froyoFlavors) {
  customerOrder[flavor] === undefined
    ? (customerOrder[flavor] = 1)
    : (customerOrder[flavor] += 1);
}
// Output
console.log("You have order: ");
for (flavor in customerOrder) {
  console.log(`${flavor}: ${customerOrder[flavor]}`);
}

// console.log(froyoFlavors);
