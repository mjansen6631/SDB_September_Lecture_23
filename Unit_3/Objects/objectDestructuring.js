let theSimpsons = {
    id: 1,
    est: 1989,
    genre: `animated`,
    seasons: { 
        "season one" : [
            {
                episode_title: "Simpsons Roasting on an Open Fire",
                aired: `1989-12-17`
            },
            {
                episode_title: "Bart the Genius",
                aired: `1991-01-01`
            }
        ],
        "season two": [/*  */],
        "season three": [/*  */]
    },
    currently_running:true,
    characters: [`Homer`, `Marge`, `Bart`, `Lisa`, `Maggie`]
}

const {characters, seasons} = theSimpsons;
console.log(characters);
characters.push(`Moe`);
console.log(theSimpsons);

const {currently_running: on_air } = theSimpsons;
// console.log(on_air);

// ! Spread with Objects

