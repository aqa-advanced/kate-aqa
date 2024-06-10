
import fetch from 'node-fetch';

let planetsArray = [];

        let filmData = await fetch(`https://swapi.dev/api/films/3`);
        let filmBody = await filmData.json();


    for (const planetUrl of filmBody.planets){
        let planetData = await fetch(planetUrl);
        let planetBody = await planetData.json();

        let planetObject = {
            planetName: planetBody.name,
            residents: []
        };

        for (const residentUrl of planetBody.residents){
            let residentsData = await fetch(residentUrl);
            let residentsBody = await residentsData.json();
            planetObject.residents.push(residentsBody.name)
        }
        planetsArray.push(planetObject);
    }
    console.log(planetsArray)