function say(message) {
    console.log(message);
    return message;
  }
  
  let result = say('Hello');
  console.log('Result:', result);



  showMe(); // a hoisting example

function showMe() {
  console.log('an hoisting example');
}

  function compare(a, b) {
    if (a > b) {
        return -1;
    } else if (a < b) {
        return 1;
    }
    return 0;
}

let a=compare(10,10);
console.log(a)





function add() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    return sum;
  }


  console.log(add(1, 2)); // 3
console.log(add(1, 2, 3, 4, 5)); // 15

// -----------------------------------------------------------------

function firstclass(a, b) {
    return a + b;
}

let f = firstclass;

console.log(f)

// ----------------------------------------------------------------------
let products = [
    {name: 'iPhone', price: 900},
    {name: 'Samsung Galaxy', price: 850},
    {name: 'Sony Xperia', price: 700}
];

console.log(products)