import './App.css';
import Box from './components/Box';

function App() {
    return (
        <>
            <div className='box-container'>
                <Box title='YOU' />
                <Box title='COMPUTER' />
            </div>
            <div className='btn-container'>
                <button></button>
                <button></button>
                <button></button>
            </div>
        </>
    );
}

export default App;
