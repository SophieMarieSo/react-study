import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHand,
  faHandBackFist,
  faHandScissors,
} from '@fortawesome/free-solid-svg-icons';
import './App.css';
import Box from './components/Box';

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

  const play = (userChoice) => {};

  return (
    <>
      <h1 className='title'>Let's Play</h1>
      <div className='box-container'>
        <Box title='YOU' />
        <Box title='COMPUTER' />
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
    </>
  );
}

export default App;
