var myobj ={name: "Suzan",age: 12, grade:7};
var myJSON =JSON.stringify(myobj); // JSON FORMAT
var myNew = JSON.parse(myJSON); // JS format
document.getElementById("result").innerHTML = myNew.name + myNew.age + "years old" + "and is in grade " +myNew.grade;