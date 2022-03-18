function add () {
    var pokeNS = document.querySelector("#pikaNS").value.toLocaleLowerCase();
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeNS}`)
    .then(response => response.json())
    .then(pokeData => {
      //name
        const name = pokeData.forms[0].name;
      
        document.getElementById("pname").textContent = name;
        const abilarrayl = pokeData.abilities.length;
        //ability
        if(abilarrayl == 1){
            document.getElementById("pabi").textContent = pokeData.abilities[0].ability.name;
        } else if (abilarrayl == 2) {
            document.getElementById("pabi").textContent = pokeData.abilities[0].ability.name + " " + "," + " " + pokeData.abilities[1].ability.name;
        }
        else if (abilarrayl == 3) {
            document.getElementById("pabi").textContent = pokeData.abilities[0].ability.name + " " + "," + " " + pokeData.abilities[1].ability.name + " " + "," + " " + pokeData.abilities[2].ability.name;
        }
        // picture
        document.querySelector(".pimgm").srcset = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeData.game_indices[3].game_index}.svg`;  
        document.querySelector(".pimgm").style.border = 'none';
        
        //weight
        document.getElementById("pup").textContent = pokeData.weight + ' lbs';
        //stats
        for (let x = 0; x < pokeData.stats.length; x++){
            document.getElementById(`stat${x}`).textContent = pokeData.stats[x].base_stat;
        }
        //moves
        for (let y = 0; y < pokeData.moves.length; y++) {
            document.getElementById("moves").innerHTML += (y + 1) + ") " + pokeData.moves[y].move.name.toUpperCase() + "<br>";
          
        }
        //exp 
        document.querySelector("#pe").textContent = pokeData.base_experience;

    })
  
   
    
}
function theme() {
    
    document.querySelector('.thc').classList.toggle("thcl");

    document.querySelector('.th').classList.toggle("thw");
    document.body.classList.toggle("bodyw");
    
    document.querySelector('.nav').classList.toggle("navc")
    
}
