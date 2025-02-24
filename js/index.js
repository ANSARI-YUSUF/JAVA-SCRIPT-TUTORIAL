let address = {
    'building no': 3960,
    street: 'North 1st street',
    state: 'CA',
    country: 'USA'
};

console.log( address)
console.log("country="+address.country)


let person = {
    firstName: 'John',
    lastName: 'Doe'
};

person.firstName = 'Jane';

console.log(person);


// for ( ; ; ) {
//     console.log ("hellooooooooo world ")
//     break;
//     // statements
//  }


for (let j = 1; ; j += 2) {
    console.log(j);
    if (j > 10) {
      break;
    }
  }


  function say(message) {


    message=message+ "hiii senorita"
    console.log(message);
  }

let message="hello you  "
  say(message);





  function addnum(a, b) {
    return a + b;
}


let sum = addnum(10000, 20000);
console.log('Sum:', sum);









function addmultiargs() {
    let summu = 0;
    for (let i = 0; i < arguments.length; i++) {
      summu += arguments[i];
    }
    return summu;
  }


  
  console.log(addnum(1, 2)); // 3
  console.log(addmultiargs(1, 2, 3, 4, 5,77,99,40)); // 15

  function compareBy(propertyName) {
    return function (a, b) {
      let x = a[propertyName], y = b[propertyName];
      return x > y ? 1 : (x < y ? -1 : 0); // Compares properties
    };
}

let products = [
    { name: 'iPhone', price: 900 },
    { name: 'Samsung Galaxy', price: 850 },
    { name: 'Sony Xperia', price: 700 },
];

console.log('Products sorted by name:');
products.sort(compareBy('name')); // Sorts by 'name'
console.table(products);

console.log('Products sorted by price:');
products.sort(compareBy('price')); // Sorts by 'price'
console.table(products);
