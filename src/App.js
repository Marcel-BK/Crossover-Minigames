import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Minigames from './components/Minigames';
import Memory from './components/Memory';
import TicTacToe from './components/TicTacToe';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Header /> */}
      </header>
      <main>
        <Routes>
            <Route path='/' element={<Minigames />} />
            <Route path='/tictactoe' element={<TicTacToe />} />
            <Route path='/memory' element={<Memory />} />
        </Routes>
    </main>
    <footer>
        {/* <Footer /> */}
    </footer>
    </div>
  );
}

export default App;
