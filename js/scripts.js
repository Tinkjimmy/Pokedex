let pokemonRepository = (function(){
    let repository =[{name:'Bulbasaur' ,height:0.7 ,types:['grass','poison']},
                        {name:'Charmander' ,height:0.6 ,types:['fire']},
                        {name:'Squirtle' ,height:0.5 ,types:['water']},
                        {name:'Caterpie' ,height:0.3  ,types:['bug']},
                        {name:'Beedrill' ,height:1 ,types:['bug','poison']},
                                      ];

                        function getAll() {
                                      return repository;
                                    }  
                            
                                      
                        function addListItem(pokemon){
                        
                            let pokemonList = document.querySelector('.pokemon-list');
                            let listItem = document.createElement('li');
                            let button =document.createElement('button');
                            button.innerText = pokemon.name;
                            button.classList.add('pokeButton');
                            listItem.appendChild(button);
                            pokemonList.appendChild(listItem);
                            button.addEventListener('click', showDetails);}
                                      
                        function showDetails(pokemon){
                          console.log(pokemon)
                        }
                   
                        return {
                        
                        getAll: getAll,
                        addListItem: addListItem
                            };
                          })();
                        

                          pokemonRepository.getAll().forEach(function(pokemon){
                            pokemonRepository.addListItem(pokemon);
                          });
                          







        

   
   



