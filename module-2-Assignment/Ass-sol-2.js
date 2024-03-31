let sum =0;
// method-1 (It is true)
function calculatetotalcartvalue(){
    let arr = Array.from(arguments);
    for( let i=0; i<arr.length; i++){
        sum= sum+arr[i];
    }
    return sum;
}
console.log(calculatetotalcartvalue(125,20,30));
   
     //   or
let som =0;
let calculatePrice = (...m)=>{
    let i=0;
     while(i<m.length){
        som=som+m[i];
        i++;
     }
     return som;
}
console.log(calculatePrice(125, 20, 30));




// method-2 (It is true) 
let arrrr = [ 125, 20, 30 ];
let sem =0;
function calculateTotalCartValue(){
    for(let i of arrrr){ 
        sem=sem+i;
    }  
    return sem;     
}
console.log(calculateTotalCartValue());




// my doute
//         :- split string of number in array and  array elements are string
// I want  :- array elements are number So, you help me 
let userProductPrice = '125, 20, 30' ;
let arr = userProductPrice.split(', ');
console.log(arr); 