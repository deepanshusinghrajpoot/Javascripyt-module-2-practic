/*
function RegularFunction(Name){
    this.Name = Name;
}
// If a function is use as constructor 
// than use new keyword and first latter of function is capital latter
const regularobj = new RegularFunction('John')
console.log(regularobj);

let Arrowfunction =  (Dane) => this.Dane = Dane;
// If a function is use as constructor 
// than use new keyword and first latter of function is capital latter
const Degularobj = new Arrowfunction('peter');
console.log(Degularobj);
                                 */




/*
let nnn = ["I", "love", "javascript"];
console.log(nnn);
let mmm = nnn.splice(1,3);
console.log(mmm);
console.log(nnn);
                     */

let ch = ['t', 'e', 'x', 't'];
let ccc = ch.splice(-2);
console.log(ccc);
// output:- ['x', 't']

// syntax(3):- arr.splice(m); :- startIndex(m) se last element is splice
let cc = ch.splice(1);
console.log(cc);
// output:- ['e', 'x', 't']

/*
const person = {
    Name:'Johan',
    sayHi: function(city,age){
        console.log(`Hello, ${this.Name} age of ${age} from ${city} `);
    },
}
const otherPerson = {
  Name:'Peter',
}

const boundFunction = person.sayHi.bind(otherPerson,'Maharajganj',40);
boundFunction();

*/

let MultiplicationOfTwoNumber = (...m ) => { let nnnn = 1;  console.log(m); for(let i of m){ nnnn = nnnn * i; } return nnnn };
console.log(MultiplicationOfTwoNumber(4,5,3,4,5,6,7));

function mul(...m){ console.log(m);  let mmmm = 1; for(let i of m ){ mmmm = mmmm * i; } return mmmm; };
console.log(mul(4,5,3,4,5,6,7));

const person = {
    Name:'johan',
    greet:function(){
      console.log('greet',this);
      console.log(`Hellow, my name is ${this.Name}`); // [ Regular function has this keyword So, It is called
    },                                                //   Global object(windows) (Learn) ]
    greetTwo: () =>{
      console.log('greetTwo',this);                   
      console.log(`hellow, my name is ${this.Name}`); // [ Arrow function has not this keyword so, It is not 
    }                                                 //   called Global object(windows) (Learn) ]
}
     person.greet();
     person.greetTwo();

     function RegularFunction(Name){
        this.Name = Name;
   }
   // If a function is use as constructor 
   // than use new keyword and first latter of function is capital latter
   const regularobj = new RegularFunction('John')
   console.log(regularobj);

   //but

   let Arrowfunction =  (Dane) => this.Dane = Dane;
   // If a function is use as constructor 
   // than use new keyword and first latter of function is capital latter
   const Degularobj = new Arrowfunction('peter');
   console.log(Degularobj);
   