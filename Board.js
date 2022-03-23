import React from 'react'
import Square from './Square'

function Board() {
  const initialSquares = Array(9).fill(null);
  const [squares, setSquares] = useState(initialSquares);
const [xIsNext, setXIsNext] =useState(true);

  const handleClickEvent =  (i) => {
const newSquares = [...squares];

const winnerDeclared = Boolean (calculateWinner(newSquares));
const squareFilled = Boolean(newSquares[i]);
if (winnerDeclared || squareFilled) {
  return;
}

newSquares [i] = xIsNext ? 'X' : '0';
setSquares(newSquares);
setXIsNext(!xIsNext);
  };
  const renderSquare = (i) => {
    return (
      <Square value={squares[i]} 
      onClickEvent={() => handleClickEvent(i)}
      />
    );
  };
const winner = calculateWinner(squares);
  const status = winner ?
  `Winner: ${winner}`:
  `Next player: ${xIsNext ? 'X' : 'O'}`;
  return (
    <div> <div className='status'>{status}</div>
      <div className='board-row'>
      {renderSquare(0)}{renderSquare(1)}{renderSquare(2)}
      </div>
      <div className='board-row'>
      {renderSquare(3)}{renderSquare(4)}{renderSquare(5)}
      </div><div className='board-row'>
      {renderSquare(6)}{renderSquare(7)}{renderSquare(8)}
      </div>
    </div>
  )
}

export default Board