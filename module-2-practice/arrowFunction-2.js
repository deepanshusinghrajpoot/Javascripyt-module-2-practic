/* ############################### */
/* ******* Arrow functon ********* */
/* ############################### */
// [ Arrow function is obtain at :- 2015(ES6) (Learn) ]
// [ ECMA (European Computer Manufacturer's Association)  (Learn)]
// [ porpose :- repersent a function to = sort,easyWay,readable etc (Learn) ]
// [ ***** syntax  :- let dataType = (parameter) => { return performPrameter } (Learn) ]
// [ It is contain return keyword (Learn) ]


// [ return keyword is use two type :- [(1) :-(emplicite return)] [(2) :- (explicite return)] (Learn) ]

// [ explicite return mean :- we use directly return keyword  (Learn) ]
// [ ***** syntax  :- let dataType = (parameter) => { return performPrameter } (Learn) ]
// [ eg:- let add = (a,b) => { return a+b } (Learn) ]

// [ emplicite return mean :- we not use directly return keyword (Learn) ]
// [ ***** syntax of lemda function :- let dataType = (parameter) => performParameter (Learn) ]
// [ eg:- let add = (a,b) => a+b (Learn) ]
// [ Arrow function is a (Lemda function) (Learn) ]










// ***** limitation of arrow function *****
// ****************************************
//  Arrow function is not use as constructor
//  Arrow function is not use with newKeyword
//  Arrow function has not this keyword    etc.


// [ standard arrow function or Explicite return arrow function (Learn) ]  
let add = (a,b) =>{   // [ 1st repersentation of arrow function (Learn) ]
    return a+b;
}
console.log(add(4,6));
                      // output:- 10

// [ Implicite return arrow function]
let sum = (a,b) => a+b ; // [ 2nd repersentation of arrow function (Learn) ]
console.log(sum(4,6));
                      // output:- 10

// [ arrow function with one parameter ]
let addORsum = a => a ;  // [ 3rd repersetaion of arrow function (Learn) ]
console.log(addORsum(10));
                      // output:- 10
                     
  










/* ########################################################################  */
/* ********** Difference b/w Arrow function and Regular function ********** */
/* ######################################################################## */

// [ (1) syntax differance (Learn) ]
// [ (2) arguments object is in regular fuction but arguments object is not in arrow function  (Learn) ]
// [ (3) Regular function has (This) keyword but Arrow function has not (this) keyword  (Learn)]
// [ (4) regular function is use with (new) keyword but Arrow function is not use with (new) keyword (Learn) ]  
//                            or
// [ (4) regular function is use as constructor but Arrow function is not use as constructor (Learn) ]


// [ Second diff:-(2) arguments object is not in arrow function but arguments object is in regular fuction (Learn) ]
 function mul(){
    let arr =  Array.from (arguments);
    let mul=1;
    for(let i=0; i<arr.length; i++){
        mul = mul * arr[i];
    }
    return mul;
 }
 console.log(`for regular function`);
 console.log(mul(1, 2, 3, 4));
 console.log(mul(1, 2, 3));
                     // output:- 24
                     //       :- 6

 /*  ************[ Browser Developer tool (learn) ]***************
     Go to inspect than console and check error
     So you get that is arguments object in arrow function  invalid
     so it is major difference        */
 let multiply = () => { return arguments};
 let Mul = () => arguments ;
 console.log(`for arrow function`);
 console.log(Mul(1, 2, 3, 4));
 console.log(Mul(1, 2, 3));
               // output:- Invailid
               //       :- Invailid


 
 // [ (3) Regular function has (This) keyword but Arrow function has not (this) keyword  (Learn)]
 //   [ (3) Explain by Bind of this
 //     In Arrow function has not this keyword
 //     So it is taken from outside mean It is taken from parent ( Global Object )
 //     In the global case thisKeyword is equal two window
 //      but
 //      In Regular function has this keyword  (Learn) ]
     const person = {
          Name:'johan',
          greet:function(){
            console.log('greet',this);
            console.log(`Hellow, my name is ${this.Name}`); // [ Regular function has this keyword So, It is called
          },                                                //   parent(persion) (Learn) ]
          greetTwo: () =>{
            console.log('greetTwo',this);                   
            console.log(`hellow, my name is ${this.Name}`); // [ Arrow function has not this keyword so, It is  
          }                                                 //   called Global object(window) (Learn) ]
     }
     person.greet();
     person.greetTwo();
             //   output1:- greet {
             //                   Name: 'johan',
             //                   greet: [Function: greet],
             //                   greetTwo: [Function: greetTwo]
             //                }
             //          :- Hellow, my name is johan
             //   output2:- greetTwo>window  (By Browser Developer tool)


        


// [ (4) regular function is use as constructor but Arrow function is not use as constructor (Learn) ]
//     arrow function is not a constructor;
// but
//     new keyword is use with Regular function 
//     So regular fuction is a constructor


    function RegularFunction(Name){
         this.Name = Name;
    }
    // If a function is use as constructor 
    // than use new keyword and first latter of function is capital latter
    const regularobj = new RegularFunction('John')
    console.log(regularobj);
                 // output:- RegularFunction { Name: 'John' }
    

    let Arrowfunction =  (Dane) => this.Dane = Dane;
    // If a function is use as constructor 
    // than use new keyword and first latter of function is capital latter
    const Degularobj = new Arrowfunction('peter');
    console.log(Degularobj);
                 // output:- TypeError:- Arrow function is not a constructor