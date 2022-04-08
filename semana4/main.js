//const pokemon= document.getElementById('poke')
const buscar= document.getElementById('buscar') // Obtenemos la variable buscar para mas adelante aplicarle la funcion onclik
var comprobar;

const getPokemon = async() =>{ // Creamos la funcion que consulatara la api asincrona
    
    try{
    
    const pokemon= document.getElementById('poke') // obtenmos la constante plkemon para mas adelante sacar su valor
    let url= `https://pokeapi.co/api/v2/pokemon/${pokemon.value.toLowerCase()}` // declaramos la url con el pokemon que estamos buscando
    
    const res= await fetch(url) // esperamos la consulta que realiza fetch y la guardamos en la variable res
    const data= await res.json() // convertimos la respuesta en un archovo json
    console.log(url) 
    console.log(data.sprites.front_default) // data que muestra la api
    const pokeimagen=data.sprites.front_default
    const pokeimg= document.getElementById('pokeimg')
    const pokename=document.getElementById('pokename')
    pokeimg.src=pokeimagen;
    let instrucciones= document.getElementById('instrucciones')
    instrucciones.innerHTML='';
    const NameStat=[]
    for(let i=0;i<6;i++){
       NameStat.push(data.stats[i].stat.name)
    
    }
    const ValueStat= NameStat.map( (e,i) => `<li>${data.stats[i].stat.name}: ${data.stats[i].base_stat}</li>`)
    
    console.log(ValueStat)
    instrucciones.innerHTML= `<div id="instrucciones" class="  contenedor2 "> 

    <div class="name comun"><h1>${data.forms[0].name.toUpperCase()}</h1></div>
    <div class="estadisticas comun">   <h2>Estadisticas</h2> <ul>${ValueStat.join("")}</ul></div>
    <div class="habilidades comun"><h2>Habilidades</h2><ul> <li> Normal: ${data.abilities[0].ability.name}</li> <br> <li>Oculata: ${data.abilities[1].ability.name}</li></ul></div>
    <div class="tipo comun"><h3>Tipo: ${data.types[0].type.name}</h3>  </div>  <br>
    
   
    </div>`;
      
}
    catch{ 
        
        const imgerror= document.getElementById('pokeimg')
        instrucciones.innerHTML= ''
    //     instrucciones.innerHTML=` <div id="instrucciones" class="contenedor2 "> 
             
    //         <h1 class="name">No pudimos encontrar el Pokemon (Revisa que este escrito correctamente.)</h1>
            
    // </div>`
     imgerror.src='./images/error.gif'
    }
}

buscar.onclick= getPokemon // cuando damos click este buscara el pokemon.

// forms.name => esta el nombre.
// types.type.name esta el tipo de pokemn
// abilities[0].ability.name su habilidad normal
//abilities[1].ability.name su habilidad oculta
//moves[0] sus movimientos.
//stats sus estaditicas.