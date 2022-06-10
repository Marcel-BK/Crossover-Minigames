import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Minigames from './components/Minigames';
import Memory from './components/Memory/Memory';
import TicTacToe from './components/TicTacToe';
// import RockPaperScissorClone from './components/RockPaperScissorClone'

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
            <Route path='/' element={<Minigames />} />
            <Route path='/tictactoe' element={<TicTacToe />} />
            <Route path='/memory' element={<Memory />} />
            {/* <Route path='/rockpaperscissors' element={<RockPaperScissorClone />} /> */}
        </Routes>
        <Memory />
    </main>
    </div>
  );
}

export default App;
