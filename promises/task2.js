import fetch from 'node-fetch';


 //2.2
 let starShips = [];

        let data = await fetch(`https://swapi.dev/api/people/14`);
        let body = await data.json();

    for (const starshipUrl of body.starships){
        let starshipData = await fetch(starshipUrl);
        let starshipBody = await starshipData.json();
        starShips.push(starshipBody.name);
    }
 console.log(starShips)

//2.1
 let starShipsV2 = [];

 fetch(`https://swapi.dev/api/people/14`)
    .then(response => response.json())
    .then(body => {
        const starshipPromises = body.starships.map(starshipUrl =>
            fetch(starshipUrl).then(response => response.json())
        );

        return Promise.all(starshipPromises);
    })
    .then(starshipData => {
        starShipsV2 = starshipData.map(starship => starship.name);
        console.log(starShipsV2);
    })