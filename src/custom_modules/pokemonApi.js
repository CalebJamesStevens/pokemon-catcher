export const fetchRandomPokemon = async (amount = 1) => {
    let pokemon = [];
    for (let i = 0; i < amount; i++) {
        //theres about 1126, but around 898 the id jumps to 10000 so i have to make 2
        //api calls to ensure i'm getting the corret pokemon. Setting the limit of the
        //random to 800 just ensures that wont me an issue. Just for simplicity.
        await fetch(
            `https://pokeapi.co/api/v2/pokemon/${Math.floor(
                Math.random() * 800
            )}`
        )
            .then((res) => res.json())
            .then((data) => {
                pokemon[i] = data;
            });
    }

    console.log(pokemon);
    return pokemon;
};
