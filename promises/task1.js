import fetch from 'node-fetch';

//V1
 let planets = [];

    for (let i = 1; i <= 10; i++) {
        let data = await fetch(`https://swapi.dev/api/planets/${i}`);
        let body = await data.json();
        planets.push(body.name);
    }
    console.log(planets);

// V2
 let planetsV2 = [];
 const fetchPlanets = () => {
    let promises = [];
    for (let i = 1; i <= 10; i++) {
        let promise = fetch(`https://swapi.dev/api/planets/${i}`).then(response => response.json());
        promises.push(promise);
    }
    return Promise.all(promises);
 };
 fetchPlanets()
    .then(results => {
        planetsV2 = results.map(planet => planet.name);
        console.log(planetsV2);
    });
