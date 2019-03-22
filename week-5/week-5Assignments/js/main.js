// 'use strict';

// {
//     window.addEventListener('keyup', e => {
//         console.log(e.key);
//     });
// }

var QUESTION ='Hello world';

var types = QUESTION.split('').map(function(str){
    var type = document.createElement('span');
    type.className = 'type';
    type.textContent = str;
    document.querySelector('.container').appendChild(type);
    return type;
});

document.addEventListener('keydown',function(event){
    var keyCode = event.keyCode;
});