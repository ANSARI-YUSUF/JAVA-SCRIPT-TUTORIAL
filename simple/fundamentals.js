console.log("hi yusuf")

var hello;
console.log(hello);
let hi
console.log(hi)

let s = 'JavaScript';
s[0] = 'j';
console.log(s)


console.log(Boolean('Hi'));// true
console.log(Boolean(''));  // false

console.log(Boolean(20));  // true
console.log(Boolean(Infinity));  // true
console.log(Boolean(0));  // false

console.log(Boolean({foo: 100}));  // true on non-empty object
console.log(Boolean(null));// false



console.log(
    "symbol :" );
    console.log(Symbol() == Symbol()); // false


    console.log( Symbol()); // false



    let contact = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        phone: '(408)-555-9999',
        address: {
            building: '4000',
            street: 'North 1st street',
            city: 'San Jose',
            state: 'CA',
            country: 'USA'
        }
    }

    console.log(contact['phone']); // '(408)-555-9999'
console.log(contact['email']); // 'john.doe@example.com'

console.log(contact['address'].street); // address
// console.log(contact['email']); // 'john.doe@example.com'


let amount = 120_201_123.05; // 120201123.05
let expense = 123_450; // 123450
let fee = 12345_00; // 1234500


console.log(amount)
console.log(expense)
console.log(fee)


let person = {
    name: 'John',
    age: 25,
  };
  
  // add the ssn property
  person.ssn = '123-45-6789';
  
  // change the name
  person.name = 'John Doe';
  
  // delete the age property
  delete person.age;
  
  
  console.log(person);


  let athletes = new Array(3); // creates an array with initial size 3
let scores = new Array(1, 2, 3); // create an array with three numbers 1,2 3
let signs = new Array('Red'); // creates an array with one element 'Red'


var arraylist=[athletes,scores,signs];
console.log(arraylist)




// setTimeout(() => {
// Window.resizeTo(600, 300);
// }, 30)

let jswWindow = window.open(
  'http://localhost/js/about.html',
  'about',
  'height=600,width=600');

setTimeout(() => {
  jswWindow.moveTo(500, 500);
}, 3000);


setTimeout(() => {
  alert('3 seconds has been passed!')

  let message="hellooooooooooooooooooooooooooooooooo"
  window.alert(message);
}, 3000);


let lang = prompt('What is your favorite programming language?');

let feedback = lang.toLowerCase() === 'javascript' ? `It's great!` :
    `It's ${lang}`;

alert(feedback);


let ageStr = prompt('How old are you?');
let age = Number(ageStr);

let feedback1 = age >= 16 ?
    'Youre eligible to join.' :
    'You must be at least 16 year old to join.';

alert(feedback1);


setTimeout(() => {
  location.replace('https://www.javascripttutorial.net');

  reload();


}, 3000);


reload();



let energy = {
    valueOf() {
      return 100;
    },
  };
  
  let currentEnergy = energy - 10;
  console.log(currentEnergy);
  
  currentEnergy = energy + 100;
  console.log(currentEnergy);
  
  currentEnergy = energy / 2;
  console.log(currentEnergy);
  
  currentEnergy = energy * 1.5;
  console.log(currentEnergy);










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


setTimeout(function() {
    console.log('Execute later after 1 second')

    // window.close()
}, 1000);









let p = {
    firstName: 'John',
    lastName: 'Doe',
    greet: function () {
        console.log('Hello, World!');
    },
    getFullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
};


console.log(p.getFullName());

p.greet;  


var counter2 = 1;
var showCounter2 = () => console.log(counter2 );

console.log(window.counter2);
window.showCounter2();








let counter = 1;
let showCounter = () => console.log({ counter });

console.log(window.counter);
// window.showCounter();





const width = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

const height = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;    


console.log(width)

console.log(height)



const features = 'height=600,width=800';
const url = 'file:///C:/Users/Administrator/Desktop/JAVA-SCRIPT-TUTORIAL-main/simple/about.html';

const jsWindow = window.open(url, 'about', features);
console.log(jsWindow)









const width2 = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

const height2 = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;    


console.log(width2)

console.log(height2)


