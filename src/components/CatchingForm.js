import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addToInventory } from '../redux/pokemonSlice';
import { remove } from '../redux/wildPokemonSlice';
import './CatchingForm.css';

function CatchingForm({ pokemon, setCatching }) {
    const givenName = useRef();
    const dispatch = useDispatch();

    const handleSubmit = () => {
        if (givenName.current.value.length <= 0) return;
        dispatch(
            addToInventory({
                ...pokemon,
                givenName: givenName.current.value,
            })
        );
        dispatch(remove(0));
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
