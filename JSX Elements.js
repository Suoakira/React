// Hello World

// JSX - syntax extension for Javascript used in react.JSX
// compiler needed to convert it into Javascript

// JSX Elements

const h1 = <h1>Hello world</h1>;

// JSX elements and their surroundings

let myArticle = <article></article>;

// Attributes in JSX

const p1 = <p id="large">foo</p>; // able to give ids in JSX
const p2 = <p id="small">bar</p>;

// Nested JSX change 1

const myDiv = (
  <div>
    <h1>Hello world</h1>
  </div>
); // must be wrapped in parenthesis to keep the expression together.

// JSX Outer Elements

const blog = (
  <div>
    <img src="pics/192940u73.jpg" />
    <h1>
      Welcome to Dan's Blog!
    </h1>
    <article>
      Wow I had the tastiest sandwich today.  I <strong>literally</strong> almost freaked out.
    </article>
  </div>
);
   // one element in this case div must be wrapped in the parenthesis
   
 
 // Rendering JSX, this means to make the come on screen
 
 import React from 'react';
import ReactDOM from 'react-dom';

// Copy code here:
ReactDOM.render(<h1>Hello world</h1>, document.getElementById("app"));

 // ReactDOM.render();
 
 import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
ReactDOM.render(<h1>Render me!</h1>, document.getElementById("app"));

// calling react function from the javascript library


 // ReactDom.render() part 2
 
 ReactDOM.render(<h1>Render me!</h1>, document.getElementById('container'));
 
 // Passing a Variable to ReactDOM.render()
import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
const myList = (
  <ul>
    <li>Learn React</li>
    <li>Become a Developer</li>
  </ul>
);

ReactDOM.render(
  myList, 
  document.getElementById('app')
);

// The Virtual DOM

const hello = <h1>Hello world</h1>;

// This will add "Hello world" to the screen:

ReactDOM.render(hello, document.getElementById('app'));

// This won't do anything at all:

ReactDOM.render(hello, document.getElementById('app'));