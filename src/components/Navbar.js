import { Link } from 'react-router-dom';
import { MdOutlineInventory2, MdCatchingPokemon } from 'react-icons/md';
import './Navbar.css';
import { useWindowSize } from '../custom_hooks/useWinowSize';
import Conditional from '../utility_components/Conditional';

function Navbar() {
    const [width, height] = useWindowSize();

    return (
        <nav data-testid='navbar' className='navbar'>
            <p className='navbar__title'>Pokemon Catcher</p>
            <div className='navbar__menu'>
                <Link
                    data-testid='inventory__menuItem'
                    className='navbar__menuItem'
                    to='/'
                >
                    <MdOutlineInventory2 size={40} />
                    <Conditional condition={width > 750}>
                        <p>Inventory</p>
                    </Conditional>
                </Link>
                <Link
                    data-testid='catch__menuItem'
                    className='navbar__menuItem'
                    to='/catch-pokemon'
                >
                    <MdCatchingPokemon size={40} />
                    <Conditional condition={width > 750}>
                        <p>Catch Pokemon!</p>
                    </Conditional>
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
