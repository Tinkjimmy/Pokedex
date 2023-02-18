let pokemonList1 =[{name:'Bulbasaur' ,height:0.7 ,types:['grass','poison']},
                    {name:'Charmander' ,height:0.6 ,types:['fire']},
                    {name:'Squirtle' ,height:0.5 ,types:['water']},
                    {name:'Caterpie' ,height:0.3  ,types:['bug']},
                    {name:'Beedrill' ,height:1 ,types:['bug','poison']}
];
 // printArrayDetails function declaration
// function printArrayDetails(list){
// for(let i = 0; i<list.length ; i++){
//     if( list[i].height > 0.9){
//         // with this code, if the height is above 0.9 m it will write :"wow that's big"
//         document.write("<p>" + list[i].name + " height : " + list[i].height + " m , wow that's big! </p>")
//     }else{
//         document.write ("<p>" + list[i].name + " height : " + list[i].height + " m </p>");
//         }
//     }
// }
// printArrayDetails(pokemonList1);

 pokemonList1.forEach(function(list){
        if( list.height > 0.9){
            // with this code, if the height is above 0.9 m it will write :"wow that's big"
            document.write("<p>" + list.name + " height : " + list.height + " m , wow that's big! </p>")
        }else{
            document.write ("<p>" + list.name + " height : " + list.height + " m </p>");
            }
        }
 )
   
   



