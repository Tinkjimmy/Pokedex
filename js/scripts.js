let pokemonList =[{name:'Bulbasaur' ,height:0.7 ,types:['grass','poison']},
                    {name:'Charmander' ,height:0.6 ,types:['fire']},
                    {name:'Squirtle' ,height:0.5 ,types:['water']},
                    {name:'Caterpie' ,height:0.3  ,types:['bug']},
                    {name:'Beedrill' ,height:1 ,types:['bug','poison']}
];

for(let i = 0; i<pokemonList.length ; i++){
    if( pokemonList[i].height > 0.9){
        // with this code, if the height is above 0.9 m it will write :"wow that's big"
        document.write("<p>" + pokemonList[i].name + " height : " + pokemonList[i].height + " m , wow that's big! </p>")
    }else{
        document.write ("<p>" + pokemonList[i].name + " height : " + pokemonList[i].height + " m </p>");
        }
    }






