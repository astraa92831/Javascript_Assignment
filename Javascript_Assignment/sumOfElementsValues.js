const arr = [5, 15, 45];

const sum = arr.reduce((accumulator, value) => {
  return accumulator + value;
}, 0);

console.log(sum); //  65