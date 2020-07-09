const actorsList = document.getElementById('actorsList');
const searchBar = document.getElementById('searchBar');//targeting the searchBar for filter, to be done after map function done
let hpActors = [];

/* searchBar filter function */
searchBar.addEventListener('keyup', (e)=>{
    //console.log(e.target.value); changed it to the below
    const toCompare = e.target.value.toLowerCase();
    const filteredActors = hpActors.filter(actor=>{
       return (actor.name.toLowerCase().includes(toCompare) || actor.actor.toLowerCase().includes(toCompare)
       );
    });
    //console.log(filteredActors);it warks but not case sensitive, change it to the below calling the below function
    displayActors(filteredActors);//now from the console the filter will be applied on our DOM
});


const loadActors = async()=>{
    try{
        const res = await fetch('http://hp-api.herokuapp.com/api/characters');
        hpActors = await res.json();//changed after filter, we deleted let infront of it
        displayActors(hpActors);
        console.log(hpActors)
    }catch(err){
        console.error(err);
    }
/* filter func */
};

/* mapping */

const displayActors = (actors)=>{
    const htmlString = actors.map((actor)=>{
        return `<li class="actorsListLi">
        <img src="${actor.image}" class="img"></img>
            <h3>${actor.name}</h3>
            <p>Date of Birth: ${actor.dateOfBirth}</p>
            <p>Actor: ${actor.actor}</p>
            <p>Alive: ${actor.alive}</p>
        </li>`;
    }).join('');
    actorsList.innerHTML = htmlString;
}

loadActors();