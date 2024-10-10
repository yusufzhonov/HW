let arr = [1, 2, false, 'hello', 24, 'world', undefined, null, 'error', 22];

let numbers = arr.filter(item => typeof item === 'number').length;

if (numbers > 5) {
  console.log("Гуд");
}