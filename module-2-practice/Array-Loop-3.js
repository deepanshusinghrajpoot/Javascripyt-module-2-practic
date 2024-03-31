//##########
// array 
//##########
// (1):- Order list of element 
// (2):- contiguous memory allocation
// (3):- It contain number [number, boolean, string, object, arrayItself ]

//#######################
// why use Array
//#######################
// (1):- we can group of list of Item
//    eg:-  (a):- List of user
//          (b):- List of product
// (2):- Store large amount of data
// (3):- Improve Performance
// (4):- It has many Inbuild method(properties) which through add, remove, delete, manupulate
// (5):- easy to use
// (6):- Batter readbellity

//##############################
// Decleration of array(Syntax)
//##############################

//*********** (1):- using square brecket ************* */
// ***************************************************
   let  numbersArray = [1, 2, 3, 4, 5];
   console.log(numbersArray) ;
              // output:- [ 1, 2, 3, 4, 5 ]

//*********** (2):- using array constructor **************
// ******************************************************
   let fruitItem = new Array("mango", "apple", "banana");
   console.log(fruitItem);
              // output:- [ 'mango', 'apple', 'banana' ]


   // draw back of constructor method
   // Only one element is not an number
   let fruti = new Array(5);
   console.log(fruti);
              //  output:- [ <5 empty item> ]

   // there is two element So, 
   let Fruit = new Array(5, 6);
   console.log(Fruit);
             //   output:- [ 5, 6 ]
              

   // ************** Array.length **************
   // ******************************************
   console.log(Fruit.length);
   // It is creat an array of size 5
   // but according to syntax it is creat an array :- [5]
   // output :- [<5 empty item>]


// **************** (3):- using Array literal *******************
// **************************************************************
 let mixedArray = Array('Apples', true, 10, {Name:"Johan"});
 console.log(mixedArray);
                // output:- [ 'Apples', true, 10, { Name:'Johan' } ]


 //###############################################
 //***************** properties ******************
 //###############################################

 // index:- 0, 1, 2, 3, 4, ...........
 
 // ****************** delete operator in array **************
 //**************************************************************
 // It is delete element at index:- 1
 // but
 // In place of index:- 1 is empty and No effect on size

  let num = [1, 3, 6, "fruiti", 'orange', `banana`, { Attack:"power full"}];
  for(let i=0; i<num.length; i++){
     // delete even index
     if(i%2==0){
        delete num[i];
     }
  }
  console.log(num);
          //output:- [ <1 empty item>, 3, <1 empty item>, 'fruiti', <1 empty item>, 'banana', <1 empty item> ]



//********************************* Iteration of arrays ***************************************
//********************************************************************************************* 
// In iteration have many inbuild method that is:- foreach,  map, filtter, reduce etc;
//******* basic iteration ************* 
let nim =  Array(10, 20, 30, 40);

          //*********************
          // using for loop
          //********************* 
          for(let i=0; i<nim.length; i++){
            console.log(`for loop :- at index ${i} value is ${nim[i]}`);
          }
                    // output:- for loop :- at index 0 value is 10
                    // output:- for loop :- at index 1 value is 20
                    // output:- for loop :- at index 2 value is 30
                    // output:- for loop :- at index 3 value is 40


         //***************
         // for of loop
         //*************** 
         // It is given direct value
         // syntax:- for(let i of nim){body}
         for(let i of nim){
            console.log(`forof loop:- value is ${i}`)
         }
                     // output:- forof loop :- value is 10
                     // output:- forof loop :- value is 20
                     // output:- forof loop :- value is 30
                     // output:- forof loop :- value is 40


          //*********************         
          // using while loop
          //********************* 
          let i=0;
          while(i<nim.length){
               console.log(`while loop:- at index ${i} value is ${nim[i]}`);
               i++;
          }
                     // output:- while loop:- at index 0 value is 10
                     // output:- while loop:- at index 1 value is 20
                     // output:- while loop:- at index 2 value is 30
                     // output:- while loop:- at index 3 value is 40


          //************************
          // using do while loop
          //************************ 
          // It is execute atleast once
          let j=0;
          do{
            console.log(`do while loop:- at index ${j} value is ${nim[j]}`);
            j++;
          }while(j<nim.length);
                     // output:- do while loop:- at index 0 value is 10
                     // output:- do while loop:- at index 1 value is 20
                     // output:- do while loop:- at index 2 value is 30
                     // output:- do while loop:- at index 3 value is 40


         

