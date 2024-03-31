const students = [
    {
        Name:"Deepanshu singh",
        marks:95,
    },
    {
        Name:"Pranjal singh",
        marks:75,
    },
    {
        Name:"Ankit singh",
        marks:92,
    },
    {
        Name:"Himanshu singh",
        marks:99
    },
    {
        Name:"Durgesh singh",
        marks:89,
    },
];

let StudentClearExam = students.find(function(item, index, arr){
  
          if( item.marks>=90 ){
             return  console.log(`Congratulation ${item.Name}! You have cleared the exam. `);
          }
});
console.log(StudentClearExam);

