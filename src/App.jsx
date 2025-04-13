import { Button, Container } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import counterStore from './stores/counterStore';
import CounterBox from './components/CounterBox';

function App() {
  const { count, increase, decrease, increaseBy, decreaseBy, reset } =
    counterStore();
  return (
    <Container className='mt-5'>
      <h1>Count : {count}</h1>
      <CounterBox />

      <Button variant='primary' size='sm' onClick={increase}>
        PLUS
      </Button>
      <Button className='ms-3' variant='primary' size='sm' onClick={decrease}>
        MINUS
      </Button>
      <Button
        className='ms-3'
        variant='primary'
        size='sm'
        onClick={() => {
          const num = prompt('얼마만큼 증가시킬 건가요❓');
          increaseBy(Number(num));
        }}
      >
        PLUS BY NUMBER
      </Button>
      <Button
        className='ms-3'
        variant='primary'
        size='sm'
        onClick={() => {
          const num = prompt('얼마만큼 감소시킬 건가요❓');
          decreaseBy(Number(num));
        }}
      >
        MINUS BY NUMBER
      </Button>
      <Button className='ms-3' variant='warning' size='sm' onClick={reset}>
        RESET
      </Button>
    </Container>
  );
}

export default App;
