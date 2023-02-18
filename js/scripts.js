let pokemoRepository = (function(){
    let pokemonList1 =[{name:'Bulbasaur' ,height:0.7 ,types:['grass','poison']},
                    {name:'Charmander' ,height:0.6 ,types:['fire']},
                    {name:'Squirtle' ,height:0.5 ,types:['water']},
                    {name:'Caterpie' ,height:0.3  ,types:['bug']},
                    {name:'Beedrill' ,height:1 ,types:['bug','poison']}
                    ];
           
                    return {
                        add: function(pokemon) {
                          pokemonList1.push(pokemon);
                        },
                        getAll: function() {
                          return pokemonList1;
                        }
                      };

})();

console.log(  pokemoRepository.getAll()); 
 pokemoRepository.add({ name: 'Lapras' });
 //this  line is to use the getAll method in the forEach loop
let list = pokemoRepository.getAll()



 list.forEach(function(list){
        if( list.height > 0.9){
            // with this code, if the height is above 0.9 m it will write :"wow that's big"
            document.write("<p>" + list.name + " height : " + list.height + " m , wow that's big! </p>")
        }else{
            document.write ("<p>" + list.name + " height : " + list.height + " m </p>");
            }
        }
 )
   
   



