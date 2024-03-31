let users = ' Deepanshu singh, Himanshu singh, Ankit singh, Appu singh, Sudhanshu singh, Divyanshu singh, Durgesh singh, Pranjal singh, Silpi singh, Reena singh, Rubi singh, Labli singh, Mahi singh, Summar singh ';
let arr = users.split(', ');
console.log(arr);


// method-1  ( It is true )
let UserIs = arr.includes('Pranjal singh'); // includes is find out the element in form of boolean
console.log(UserIs);
function isUserAvalable(){
     if(UserIs){
        let indexUser = arr.indexOf('Pranjal singh');
        console.log(`yes, ${arr[indexUser]} is valid user.`);
     }else{
        console.log(`No, Someone is not a valid user.`);
     }
}
console.log(isUserAvalable());

// method-1
function isUserPersent(item){
    for(let i of arr){
        switch(i){
            case 'item': console.log(`Yes, ${i} is a valid user.`);
            break;
            default : console.log(`No, Someone is not a valid user`);
        }
    }
}
console.log(isUserPersent('Deepanshu singh'));

// method-2 (It is true)
let usr = arr.indexOf('Pranjal singh');
console.log(usr);
function isUseravalable(usr){
    if(usr){
        console.log(`yes, ${arr[usr]} is valid user.`);
    }else{
        console.log(`No, Someone is not a valid user.`);
    }
}
console.log(isUseravalable(usr));