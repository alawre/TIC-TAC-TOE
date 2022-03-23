import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <App />,
  document.getElementById('root'));

  function calculateWinner(squares) {
    const lines = [
[0,1,2], [3,4,5], [6,7,8], //rows
[0,3,6], [1,4,7], [2,5,8], //columns
[0,4,8], [2,4,6], //diagonals

    ];

    for (let line of lines) {
      const [a,b,c] = line;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]; // 'X' or 'O'
      }
    }
return null;
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
