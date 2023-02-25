let pokemonRepository = (function(){
    let pokemonList =[];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';                                

                        function getAll() {
                                      return pokemonList;
                                    }  
                        function add(){
                              if (
                                typeof pokemon === "object" &&
                                "name" in pokemon
                    
                                ){
                                  pokemonList.push(pokemon);
                                } else{
                                  console.log("pokemon is not correct");
                                }
                                    }
                                      
                        function addListItem(pokemon){
                        
                            let pokemonList = document.querySelector('.pokemon-list');
                            let listItem = document.createElement('li');
                            let button =document.createElement('button');
                            button.innerText = pokemon.name;
                            button.classList.add('pokeButton');
                            listItem.appendChild(button);
                            pokemonList.appendChild(listItem);
                            button.addEventListener("click", function(){
                              showDetails(pokemon);
                            });
                          }
                                      
                        

                        async function loadList() {
                          try {
                            const response = await fetch(apiUrl);
                            const json = await response.json();
                            json.results.forEach(function (item) {
                              let pokemon = {
                                name: item.name,
                                detailsUrl: item.url
                              };
                              add(pokemon);
                              console.log(pokemon);
                            });
                          } catch (e) {
                            console.error(e);
                          }
                        }

                        async function loadDetails(item) {
                          let url = item.detailsUrl;
                          try {
                            const response = await fetch(url);
                            const details = await response.json();
                            // Now we add the details to the item
                            item.imageUrl = details.sprites.front_default;
                            item.height = details.height;
                            item.types = details.types;
                          } catch (e) {
                            console.error(e);
                          }
                        }
                        
                        function showDetails(pokemon) {
                          loadDetails(pokemon).then(function () {
                            console.log(pokemon);
                          });
                        }

                        return {
                        add: add,
                        getAll: getAll,
                        addListItem: addListItem,
                        loadList: loadList,
                        loadDetails: loadDetails
                            };
                          })();

                        
                        pokemonRepository.loadList().then(function() {
                          // Now the data is loaded!
                          pokemonRepository.getAll().forEach(function(pokemon){
                            pokemonRepository.addListItem(pokemon);
                          });
                        });





                        
                          







        

   
   



