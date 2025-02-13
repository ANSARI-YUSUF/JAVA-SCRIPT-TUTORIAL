let person = {
    firstName: 'John',
    lastName: 'Doe'
};

  
delete person.firstName


console.log(person)



let employee = {
    firstName: 'Peter',
    lastName: 'Doe',
    employeeId: 1
};

console.log('ssn' in employee);
console.log('employeeId' in employee);


// add the ssn property
person.ssn = '123-45-6789';

// change the name
person.name = 'John Doe';

console.log(person)

let scores = new Array();

scores=["hello",1,true,"hi",1.002];


console.log(scores)

let mountains = ['Everest', 'Fuji', 'Nanga Parbat'];
mountains[2] = 50.0009;

let l=mountains.length;
console.log("lengty:"+l);

console.log(mountains)


for (let i = 0; i < l; i++) {
    


    if(i==1){
        mountains[i]="ashish";
        
    }
    console.log(mountains[i]);
  }



//   le result = (10, 10 + 20,8000);
// console.log("comma operator"+result);
let result=new Array()


let len= result.length;
for (let index = 0; index < len; index++) {
    result[i] = (10, 10 + 20,8000);
    console.log(result[i]);
   
    
}

// for (let index = 0; index < len; index++) {
//     // result[i] = (10, 10 + 20,8000);
//     const element =result[index];
//     console.log(element)
    
// }



// result.forEach(i => {
//     console.log("element in comma operator=" + i);
// });



function say(message) {
    let a=10,b=40;

    console.log(message);
    return a + b;
  }
  
  let resultuuu = say('Hello');
  console.log('Result:', resultuuu);