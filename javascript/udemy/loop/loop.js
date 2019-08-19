var todos = [
    "clean room",
    "brush teeth",
    "exercise",
    "study javascript",
    "eat healthy"
];

var todosImportant = [
    "clean room!",
    "brush teeth!",
    "exercise!",
    "study javascript!",
    "eat healthy!"
];
var todosLength = todos.length;

// for (var i=0; i < todos.length; i++){
//     console.log(todos[i], i);
// }

function logTodos(todo, i) {
    console.log(todo,i);
}

todos.forEach(logTodos);
todosImportant.forEach(logTodos);

// var counterOne = 10; 
// while (counterOne > 10) {
//         console.log("white", counterOne);
//         counterOne--;
// }
// var counterTwo = 10 
// do {
//     console.log("do white", counterTwo)
//     counterTwo--;
// } while (counterTwo > 10);

