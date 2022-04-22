import { useContext, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { PokemonContext } from '../contexts/PokemonContext';
import { addToInventory } from '../redux/pokemonSlice';
import { remove } from '../redux/wildPokemonSlice';
import './CatchingForm.css';

function CatchingForm({ pokemon, setCatching, setSelected }) {
    const givenName = useRef();
    const dispatch = useDispatch();
    const { index } = useContext(PokemonContext);

    const handleSubmit = () => {
        if (givenName.current.value.length <= 0) return;
        dispatch(
            addToInventory({
                ...pokemon,
                givenName: givenName.current.value,
            })
        );
        console.log(index);
        dispatch(remove(index));
        setSelected(false);
        setCatching(false);
    };

    return (
        <form
            className='catchingForm popup'
            onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
            }}
        >
            <p>Name your pokemon!</p>
            <label>
                <input
                    className='catchingForm__nameInput'
                    ref={givenName}
                    maxLength={25}
                    name='name'
                    type={'text'}
                />
            </label>
            <div className='catchingForm__buttons'>
                <label>
                    <button
                        className='catchingForm__cancelButton'
                        type='button'
                        name='cancel'
                        onClick={(e) => {
                            e.preventDefault();
                            setCatching(false);
                        }}
                    >
                        Cancel
                    </button>
                </label>
                <label>
                    <button
                        className='catchingForm__submitButton'
                        name='submit'
                        type='submit'
                    >
                        Submit
                    </button>
                </label>
            </div>
        </form>
    );
}

export default CatchingForm;
