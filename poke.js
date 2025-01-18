// fetch('https://pokeapi.co/api/v2/pokemon/ditto')
// .then(response=>response.json())
// .then(data=>console.log(data))
// .catch(error=>console.error())

// async function fetchdata(){
//     const pokemonname = document.getElementById('pokemonname').value.toLowerCase()
//     try{
//         const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonname}`)
//     if(!response.ok){
//         throw new Error ("could not fetch the data")
//     }
//     const  data= await response.json()
//     const pokesprites = data.sprites.front_default
//     let img = document.getElementById('pokemonsprite')
//     img.src=pokesprites
//     img.style.display='block'
//     img.style.width='600px'
//     img.style.height='600px'
//     pokemonname.style.color=`${data.color.name}`
//     }
//     catch(error){
//         console.log(error)
//     }

// }

async function fetchdata() {
    const pokemonname = document.getElementById('pokemonname').value.toLowerCase();
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonname}`);
        if (!response.ok) {
            throw new Error("Could not fetch the data");
        }
        const data = await response.json();
        const pokesprites = data.sprites.front_default;
        let img = document.getElementById('pokemonsprite');
        img.src = pokesprites;
        img.style.display = 'block';
        img.style.width = '600px';
        img.style.height = '600px';

        const speciesResponse = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonname}`);
        const speciesData = await speciesResponse.json();
        const pokemonColor = speciesData.color.name;

        document.getElementById('pokemonname').style.color = pokemonColor;
    } catch (error) {
        console.log(error);
    }
}


// note = const pokemonColor = data.color.name;
// It will result in an error because the standard Pokémon API (/pokemon/{pokemonname}) does not contain a color property. The color information is available in the Pokémon species endpoint (/pokemon-species/{pokemonname}), not the standard Pokémon endpoint.
// Here’s why this would fail:

// The API response for the Pokémon endpoint (/pokemon/{pokemonname}) includes general data like abilities, stats, types, and sprites, but not color.
// If you attempt to access data.color.name, JavaScript will throw an error like Uncaught TypeError: Cannot read property 'name' of undefined because data.color does not exist.