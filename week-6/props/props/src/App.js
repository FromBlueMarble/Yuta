import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// function simpleButtonProp(buttonText)
// {
//   return <button>{buttonText}</button>
// }


// function groupOfButtons(numberOfButtons)
// {
//   let tenButtons = "";
//   tenButtons = "<div>"
//   for (var i = 0; i < 10; i++)

//   {
//     tenButtons = tenButtons + simpleButtonProp(i);
//   }
//   tenButtons = tenButtons = "</div>"

//   return tenButtons
// }

//for exmple
//1)

function makePExample(text) 
  {
    return<p>{text}</p>
  }

  //2)
  function createHeader(level, text)
  {
  return <h{level}> {text} </h{level}>
  }
//3)

function makeInputBox()
{
  return <input></input>
}

//4)
function makeAnimageProp(src,alt)
{

}

// 5) Create a Prop that makes a 'table of items'

// 6) Create a prop that makes an ordered list

// 7) Create a prop that makes an unordered list

// 8) Create a prop that asks the user for Username AND password and has 2 buttons inside it

// 9) Create a prop that asks the user to enter text, but ONLY Accepts number

// 10) Create a random prop


class App extends Component {
  render() {
    return (





      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
