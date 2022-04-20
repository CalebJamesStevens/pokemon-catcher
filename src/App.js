import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inventory from './components/Inventory';

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Inventory />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
