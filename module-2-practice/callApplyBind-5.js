//#########################################################################################
//*************** call Apply and bind method ****************
//#########################################################################################
// It is important for interviwe
// below eg:- given function is executed as object
    function printName(name){
        console.log(`Hi ${name}`)
    } 
    printName.city="mumbia";
    printName("johan");
    console.log(printName.city);
    // output:- Hi johan
    //          mumbia



//     **********************************************************************************************
//                                GLOBAL EXECUTION CONTEXT                                     
//     **********************************************************************************************                                       *
//          THRED OF EXECUTION(CODE)          *      VARIABLE INORNMENT(MEMORY)
//     **********************************************************************************************
//                                            *                  
//                                            * (1)  printName :- [copy the function
//                                            *                  and function as object]
//                                            *            let :- [ copy function + object]
//                                            *            combo pack store in memory
//                                            *   if () :- lagane pe than :- function execute 
//                                            *   if .  :- lagane pe than :- object execute
//                                            *
//                                            * (2)  It is not only object creat 
//                                            *      but also creat a prototype object
//                                            * 
//                                            * (3)  prototype object:- It is persent in object 
//                                            *                        version of function   
//                                            *      
//                                            *   IMP:- they are used to control the context of this
//                                            *         because this keyword dynamically change the behaviour




//****************** Three inbuild function in javascript **********************
// first :- function
// second :- object
// third :- array




//******************************************************************************
//********** control the behavior of this keyword ******************************
//*********************** by using THREE METHOD ********************************
// (1) first method :- call
// (2) second method :- apply
// (3) third method :-  bind


// *********************** call method ********************************
// ********************************************************************
// explain by example:- suppose we have an app and have a multiple user
    
    const user1 = {
           Name:'Johan',
        // (11)   greetings: function(){
        //          console.log(`Hello, ${this.Name}`)
        //      },
    }
    // 11 :- jaha jaha hai waha se comments hatao :- usse pahle other call co comment kar do
    const user2 = {
            Name:'Peter',
    }
    //(11) user1.greetings(); // greetings function is call by:-() 
                              // than this keyword call user1
                              // because user1 is before the dot(.) 

     // what any method exist to use user1 function
     //  in the user2
     //  yes :- Using call method

      //(11) user1.greetings.call(user2);

     //  at the call time we can use many argument 
     //  according to use
     //  Sabse IMPORTANT :- first argument is change
     //                     The behaviour this , OR
     //                     The context of this , OR
     //                     The reference of this .

// AND:- call method is use for 
//       function Borrowing
// AND:- By call method we make the function is
//       Modular , performed , readable
         // output:- Hellow Johan
         //       :- Hellow peter

//  NOW :- sochne waali baat hai ki jaise :- user1
//                                        :- vase hi user2
//                                        :- vase hi userN
        // than greeting function is outside from function

         function greetings(city,age){
             console.log(`Hello, ${this.Name} from ${city} of age ${age}`);
          }
         greetings(); // this pointer :- is point to global object(window)
         // So
         greetings.call(user1 , "Delhi", 30);  // we know that
                                               // first argument change the reference of this
                                              // AND :- other argument is argument of function
         greetings.call(user2 , "mumbai", 40);
         
        


// *********************** apply method ********************************
// *********************************************************************
// In apply method and call method are only one difference
//   call method:- other argument and first argument is sepret by comma(,)
//   apply method:- other argument is contain in array 
//               :- array and first argument is sepret by comma(,)

     function greed(city,age){
        console.log(`Hellow hero ${this.Name} your age ${age} and you live in ${city}`);
     }
     greed(); // it is called global object(window)
     greed.apply(user1,['delhi', '20']);
     greed.apply(user2,['mumbai','25']);



// *********************** bind method ********************************
// *********************************************************************
//  bind method :- creates a new function with fixed this
  
     const person = {
          Name:'Johan',
          sayHi: function(city,age){
              console.log(`Hello, ${this.Name} age of ${age} from ${city} `);
          },
     }
     const otherPerson = {
        Name:'Peter',
     }
    // it is creat bound function  
    const boundFunction = person.sayHi.bind(otherPerson,'Maharajganj',40);
    boundFunction();
    