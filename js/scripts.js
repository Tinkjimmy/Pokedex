let pokemonRepository = (function(){
    let pokemonList =[];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';                                

                        function getAll() {
                                      return pokemonList;
                                    }  ;
                        function add(pokemon){
                              if (
                                typeof pokemon === "object" &&
                                "name" in pokemon
                    
                                ){
                                  pokemonList.push(pokemon);
                                } else{
                                  console.log("pokemon is not correct");
                                }
                                    };
                                      
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
                        };

                        async function loadDetails(item) {
                          let url = item.detailsUrl;
                          try {
                            const response = await fetch(url);
                            const details = await response.json();
                            
                            item.imageUrl = details.sprites.front_default;
                            item.height = details.height;
                            item.types = details.types;
                          } catch (e) {
                            console.error(e);
                          }
                        }

                        function addListItem(pokemon) {
                          let pokemonList = document.querySelector(".pokemon-list");
                          let listItem = document.createElement("li");
                          listItem.classList.add('list-group-item');
                          let button = document.createElement("button");
                          button.innerText = pokemon.name;
                          button.classList.add('pokeButton');
                          button.classList.add('btn-block');
                          button.classList.add('btn-primary');
                          button.setAttribute('data-toggle', 'modal');
                          button.setAttribute('data-target', '#exampleModal');
                          button.classList.add('col-4');

                          listItem.appendChild(button);
                          pokemonList.appendChild(listItem);

                          button.addEventListener("click", function () {
                            showDetails(pokemon);
                          });
                          };



                       


                        function showDetails(pokemon) {
                          loadDetails(pokemon).then(function () {
                            showModal(pokemon);
                          });
                        }

                        function showModal(pokemon) {
                          
                          let modalBody = $(".modal-body");
                          let modalTitle = $(".modal-title");
                          
                          modalTitle.empty();
                          modalBody.empty();
                      
                          let pokeName = $("<h1>" + pokemon.name + "</h1>");
                          let pokeImg = $("<img class ='modal-img' style='width:50%'>");
                          pokeImg.attr("src", pokemon.imageUrl);
                          let pokeHeight = $("<p>" + "Height : " + pokemon.height + "</p>");
                          
                          modalTitle.append(pokeName);
                          modalBody.append(pokeImg);
                          modalBody.append(pokeHeight);
        
                        }
                      
                        

                        return {
                          add: add,
                          getAll: getAll,
                          addListItem: addListItem,
                          loadList: loadList,
                          loadDetails: loadDetails,
                          showDetails:showDetails
                              };
  
                        })();
                        
                        pokemonRepository.loadList().then(function() {
                      
                          pokemonRepository.getAll().forEach(function(pokemon){
                            pokemonRepository.addListItem(pokemon);
                          });
                        });





                        
                          







        

   
   



