import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Inventory from './components/Inventory';
import CatchPokemon from './components/CatchPokemon';

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <nav>
                    <Link to='/'>Inventory</Link>
                    <Link to='/catch-pokemon'>Catch Pokemon!</Link>
                </nav>
                <Routes>
                    <Route path='/catch-pokemon' element={<CatchPokemon />} />
                    <Route path='/' element={<Inventory />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
