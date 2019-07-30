// Control flow

//var
// var firstName ='Jone';
// console.log(firstName);

// var lastName = 'Smith';
// var age = 28;

// var fullAge = true;
// console.log(fullAge);

//if
// var name = "Billy";
// if (name === "Billy") {
//     alert("hi Billy!");
// }

// name = "Susy";
// "Susy"
// if (name === "Billy") {
//     alert("hi Billy!");
// }

//else
if (name === "Billy") {
    alert("hi Billy!");
}else {
    alert("humm I don't know you");
}
undefined

// "Susy"
// name = "Billy"
// "Billy"
// if (name === "Billy") {
//     alert("hi Billy!");
// }else {
//     alert("humm I don't know you");
// }

//else if
if (name === "Billy") {
    alert("hi Billy!");
} else if (name === "Susy") {
    alert("hi Susy!");
} else {
    alert("I don't know you");
}

name
"Billy"
name = "Susy"
"Susy"
if (name === "Billy") {
    alert("hi Billy!");
} else if (name === "Susy") {
    alert("hi Susy!");
} else {
    alert("I don't know you");
}

//&& || !
if (name === "Billy" || name === "Ann") {
    alert("Hi Billy or Ann!");
}

name = "Ann";
"Ann"
if (name === "Billy" || name === "Ann") {
    alert("Hi Billy or Ann!");
}

name = "Billy";
"Billy"
if (name === "Billy" || name === "Ann") {
    alert("Hi Billy or Ann!");
}


//exercise4
var age = prompt ("What is your age?");
if (age < 18) {
    alert("Sorry, you are too young to drive this car. Powering off");
} else if (age === 18) {
    alert ("Congratulations on your first year of driving. Enjoy the ride!");
}else if (age > 18) {
    alert ("Powering On. Enjoy the ride!");
}

// exercise4-SOLUTIONS.txt
var age = prompt("What is your age?");
if (Number(age) < 18) {
	alert("Sorry, you are too yound to drive this car. Powering off");
} else if (Number(age) > 18) {
	alert("Powering On. Enjoy the ride!");
} else if (Number(age) === 18) {
	alert("Congratulations on your first year of driving. Enjoy the ride!");
}