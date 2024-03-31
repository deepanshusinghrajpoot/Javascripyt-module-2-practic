let user = {
     Name:'Deepanshu',
     greet:function(){                 // Regular function has this keyword
        console.log(`my name is ${this.Name}`);
     },
}
user.greet();

let user2 = {
    Name:'Himanshu',
    greet:() => {                             // Arrow function has not this keyword
        console.log(`my borther name is ${this.Name}`);
    },
}
user2.greet();




function Greet(name){                // regular function is use as constructor but Arrow function is not use as constructor
    this.name=name;
}
let gggg = new Greet("Deepanshu singh");
console.log(gggg);


