// 'use strict';

// {
//     window.addEventListener('keyup', e => {
//         console.log(e.key);
//     });
// }

var QUESTION = localStorage.QUESTION || 'Hello world';
var types = [];
var timer = null;
var startTime = 0;

function init() {
    document.querySelector('.container').innerHTML = '';
    types= QUESTION.split('').map(function(str){
        var type = document.createElement('span');
        type.className = 'type';
        type.textContent = str;
        document.querySelector('.container').appendChild(type);
        return type;
    });
    timerEnd();
    document.querySelector('.timer').textContent = '0.000';
}
init();

function timerStart() {
    startTime = new Date().getTime();
    timer = setInterval(function() {
        var time = (new Date().getTime() - startTime) / 1000
        document.querySelector('.timer').textContent = time.toFixed(3);
    }, 10)
}

// time stop 
 function timerEnd() {
     clearInterval(timer);
     timer = null;
 }

document.addEventListener('keydown',function(event){
    var keyCode = event.keyCode;

    if (keyCode === 13) { // enter key
        init();
        return;
    }

    var key = '';
    if (keyCode === 32) { // space key
        key = " ";
    }

    if(keyCode >= 65 && keyCode <= 90) { // a to z
        key = String.fromCharCode(keyCode);
        if (event.shiftKey) {
            key = key.toUpperCase();
        } else {
            key = key.toLowerCase();
        }
    }

    if (key) {
        if (timer === null) {
            timerStart();
        }
    }

    if (key) {
        var next = types[0];
        if (next.textContent === key) {
            next.classList.add('ok');
            types.shift();
            if (types.length === 0) {
                timerEnd();
            } 
        } else{
                next.classList.add('ng');
            }
        }

    console.log(key);
});

document.querySelector('.container').addEventListener('clock', function(event){})
    var text = prompt('Please enter sentences');
    if (text) {
        QUESTION = text;
        localStorage.QUESTION = text;
        init();
    }