import './App.css';

function App() {
  return (
        <Board className="Board">
        </Board>
  );
}

function Board() {
  const squareBoxValues = ['','','','','','','','',''];
  return (
    <div>
      <SquareBox clickValue={squareBoxValues[0]}></SquareBox>
      <SquareBox clickValue={squareBoxValues[1]}></SquareBox>
      <SquareBox clickValue={squareBoxValues[2]}></SquareBox>
      <br/>
      <SquareBox clickValue={squareBoxValues[3]}></SquareBox>
      <SquareBox clickValue={squareBoxValues[4]}></SquareBox>
      <SquareBox clickValue={squareBoxValues[5]}></SquareBox>
      <br/>
      <SquareBox clickValue={squareBoxValues[6]}></SquareBox>
      <SquareBox clickValue={squareBoxValues[7]}></SquareBox>
      <SquareBox clickValue={squareBoxValues[8]}></SquareBox>
    </div>
  )
}

function SquareBox(props){
  return ( <input type="text" value={props.clickValue} />)
}

export default App;
