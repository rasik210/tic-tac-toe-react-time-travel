import Board from './Board';

export default function Game(){
    // const [xIsNext, setXIsNext] = useState(true);
    // const [history, setHistory] = useState([Array(9).fill(null)]);
    // const currentSquares = history[history.length - 1];
    return(
        <div>
            <div>
                <Board />
            </div>
            <div>
                <ol>
                    
                </ol>
            </div>
        </div>
    )
}