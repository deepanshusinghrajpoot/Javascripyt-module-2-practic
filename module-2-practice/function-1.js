//####################################################################
// **************** function *****************
//####################################################################
// [ function is called first class object and first class citezen in javascript (Learn) ]
//         [ because it is have property:- return, function as object, pass the argument as callback , 
//           function inside function, function as value pass 
//           etc. (Learn) ]         

//function is called any where
//Function As A Argument 
function x(callback){     // [ pass the argument as callback (Learn) ]
    console.log('hellow');
    callback();
}
function y(){
    console.log('Bey');
}
x(y);  // function as value pass
                                       // output :- hellow
                                       //        :- Bey
                                






//In Function we use any data type as argument and parameter
let arr=[1, 2, 3, 4, 5, 6];
function printAllElement(NNN){
    for(let i=0; i<NNN.length; i++){
        console.log(NNN[i]);
    }
}
printAllElement(arr); 
                                        // output:- 1
                                        //          2
                                        //          3
                                        //          4
                                        //          5
                                        //          6

   








// [ In function parameter order or argument order is important (Learn) ]
//   order is consider
//   example 


   // In this example order is consider So, no effect on output according to assume
   function greetings(name,city){
        console.log(`Hellow ${name} from city ${city}`);   
   }
   greetings("Johne","Delhi");
                                        // output:- Hellow Johne from city Delhi
  
   // In this example order is not consider So, effect on output according to assume
   // For resolve the problem :- we given argumrnt as object 
   function greet(city , name){
    console.log(`Hellow ${name} from city ${city}`);
   }
   greet("Johne","Delhi");
                                        // output:- Hellow Delhi from city Johan

   //  [ For resolve the problem :- we given argumrnt as object and parameter use in curly brecket (Learn) ]
   // object property :- It does not consider order 
   function obj({city,name}){
    console.log(`Hellow ${name} from city ${city}`)
   }
   obj({name:"Johne", city:"Delhi"});
                                        // output:- Hellow Johan from city Delhi 









     /*  ############################################################# */
    /*   ########## How to handle many number of argument  ########## */
    /*   ############################################################# */

   /*    ********** [ Method-1 :- using (arguments) object (Learn) ] *********** */
   /*    **************************************************************************   */
   //(1) Assume:- We not know the number of argument 
   //(2) Execution :- Of all argument
   //(3) So, [ javascript have a in build arguments as {object}; (Learn) ]
   //(4) that object is :- ***** arguments
   //(5) arguments :- object is in build in every function in javascript

   //(6) IMPORTANT:- [ arguments object is a array like structure but it is not similar to array (Learn) ]

   //(7) Many method of array:- is not use for arguments object (because it is not array. But It is a array like structure)
   //(8) example:- map ,reduce etc;

   //(9) So for this problem we solve by :- [ So, Than convert arguments object in array (Learn) ]
   //(10) [ By The method of array (from) :- syntax:- ***** const convertInArray = Array.from(arguments) :- value:- arguments; (Learn) ]
   //(11) then we use all array method;
   
    function greet(){
        const objectInArray = Array.from(arguments);
        console.log(objectInArray);
        let sum = objectInArray.reduce(function(acc, curr){
            return acc + curr
        },0);
        return sum;
    }
    console.log(greet(1, 2, 3));
    console.log(greet(1, 2, 3, 4, 5));
                                // output:- [ 1, 2, 3]
                                //       :- 6
                                //       :- [ 1, 2, 3, 4, 5]
                                //       :- 15

 /*     ********** [ Method-2:- using rest ...parameter (Learn) ] ********** */   
 /*     ******************************************************** */
  
 // [ In  the place of parameter we use :- ...Parameter (Learn) ]
 // [ It is direct convert all arrgument in array (Learn) ]

 function sumWitharguments(...m){
      console.log(m);
      let sum = m.reduce(function(acc,curr){
        return acc + curr
      },0);
      return sum;
 }
 console.log(sumWitharguments(1, 2, 3));
 console.log(sumWitharguments(1, 2, 3, 4, 5));
                            // output:- [1, 2, 3]
                            //       :- 6
                            //       :- [1, 2, 3, 4, 5]
                            //       :- 15








// #######################################################################################################################
// **************************  function use *********************************
// #######################################################################################################################

console.log(`my name is deepanshu singh I am very Happy today Because I commond on the function but It is not more`);

// use :- for( variable i of ...... ){ body }:- forOf loop :- In Arrow and Regular function


// by rest parameter for many orgument 
let MultiplicationOfTwoNumber = (...m ) => { console.log(m); let nnnn = 1; for(let i of m){ nnnn = nnnn * i; } return nnnn };
console.log(MultiplicationOfTwoNumber(4,5,3,4,5,6,7));

// By rest parameter for many argument
function mul(...m){ console.log(m);  let mmmm = 1; for(let i of m ){ mmmm = mmmm * i; } return mmmm; };
console.log(mul(4,5,3,4,5,6,7));

// by arguments as object for many argument
function muuuu(){
    let iii = Array.from(arguments);
    console.log(iii);
    let sum = 0;
    for(let i of iii){
        sum = sum + i;
    }
    return sum;
}
console.log(muuuu(4,5,3,4,5,6,7));










// use :- for(let variable ; limitation ; upgradation ){ body }:- for loop :- In Arrow and Regular function

// By rest parameter for many argument
let multinni = (...m) => { console.log(m); let pp =1; for(let i=0; i<m.length; i++){ pp = pp*m[i];} return pp;} 
console.log(multinni(1,2,3,4,5,6,7,8,9));

// By rest parameter for many argument
function multi(...m){console.log(m); let pp = 1; for(let i=0; i<m.length; i++){ pp = pp*m[i];} return pp;};
console.log(multi(1,2,3,4,5,6,7,8,9));



// OR
 
// By rest parameter for many argument
let muulti = (...m) => {
    console.log(m);
    let nnnn =1;
    for(let i=0; i<m.length; i++){
        nnnn = nnnn * m[i];
    }
    return nnnn;
}
console.log(muulti(1,2,3,4,5,6,7,9));




// By rest parameter for many argument
function mutti(...m){
console.log(m);
let mmmm =1;
for(let i=0; i<m.length; i++){
 mmmm = mmmm * m[i];  
}
return mmmm;
}
console.log(mutti(1,2,3,4,5,3,4,5,6,7,9));




// By arguments object for many argument
function mmmmm(){
    let iii = Array.from(arguments);
    console.log(iii);
    let sum =0;
    for(let i=0; i<iii.length; i++){
        sum = sum + iii[i];
    }
    return sum;
}
console.log(mmmmm(1,2,3,4,5,3,4,5,6,7,9));
