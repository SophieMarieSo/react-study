import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHand,
  faHandBackFist,
  faHandScissors,
  faRotate,
} from '@fortawesome/free-solid-svg-icons';
import './App.css';
import Box from './components/Box';
import { useState } from 'react';

function App() {
  const choice = {
    rock: {
      name: 'rock',
      img: 'https://blackbearwow.github.io/image/rockPaperScissors/rock.png',
    },
    scissors: {
      name: 'scissors',
      img: 'https://blackbearwow.github.io/image/rockPaperScissors/scissors.png',
    },
    paper: {
      name: 'paper',
      img: 'https://blackbearwow.github.io/image/rockPaperScissors/paper.png',
    },
  };

  const initialImg = {
    name: 'initial game image',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRASAX0_l80MRfGqhk3vo52CVyPb5_opvEwlA&s',
  };

  const [userSelect, setUserSelect] = useState(initialImg);
  const [computerSelect, setComputerSelect] = useState(initialImg);
  const [result, setResult] = useState('');

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);

    const computerChoice = randomChoice();
    setComputerSelect(choice[computerChoice]);

    setResult(judgement(choice[userChoice], choice[computerChoice]));
  };

  const randomChoice = () => {
    const choiceArray = Object.keys(choice);
    const randomNum = Math.floor(Math.random() * choiceArray.length);
    return choiceArray[randomNum];
  };

  const resetGame = () => {
    setComputerSelect(initialImg);
    setUserSelect(initialImg);
  };

  const judgement = (user, computer) => {
    if (user.name === computer.name) return 'TIE';
    if (user.name === 'rock')
      return computer.name === 'scissors' ? 'WIN' : 'LOSE';
    if (user.name === 'scissors')
      return computer.name === 'paper' ? 'WIN' : 'LOSE';
    if (user.name === 'paper') return computer.name === 'rock' ? 'WIN' : 'LOSE';
  };

  return (
    <div className='game-container'>
      <h1 className='title'>Let's Play</h1>
      <FontAwesomeIcon
        className='reset-btn'
        icon={faRotate}
        onClick={resetGame}
      />
      <div className='box-container'>
        <Box title='YOU' select={userSelect} result={result} />
        <Box title='COMPUTER' select={computerSelect} result={result} />
      </div>

      <div className='btn-container'>
        <button className='scissors' onClick={() => play('scissors')}>
          <FontAwesomeIcon icon={faHandScissors} />
        </button>
        <button className='rock' onClick={() => play('rock')}>
          <FontAwesomeIcon icon={faHandBackFist} />
        </button>
        <button className='paper' onClick={() => play('paper')}>
          <FontAwesomeIcon icon={faHand} />
        </button>
      </div>
    </div>
  );
}

export default App;
