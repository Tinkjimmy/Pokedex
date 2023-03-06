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
                          let button = document.createElement("button");
                          button.innerText = pokemon.name;
                          button.classList.add("pokeButton");
                          listItem.appendChild(button);
                          pokemonList.appendChild(listItem);

                          button.addEventListener("click", function () {
                            showDetails(pokemon);
                          });
                        }



                        let modalContainer = document.querySelector("#modal-container");

                        function hideModal() {
                          modalContainer.classList.remove("is-visible");
                        }

                        window.addEventListener("keydown", (e) => {
                          if (
                            e.key === "Escape" &&
                            modalContainer.classList.contains("is-visible")
                          ) {
                            hideModal();
                          }
                        });

                        modalContainer.addEventListener("click", (e) => {
                          let target = e.target;
                          if (target === modalContainer) {
                            hideModal();
                          }
                        });

                        function showDetails(pokemon) {
                          loadDetails(pokemon).then(function () {
                            showModal(pokemon);
                          });
                        }

                        function showModal(pokemon) {
                          modalContainer.innerHTML = "";
                          let modal = document.createElement("div");
                          modal.classList.add("modal");
                      
                          let closeButtonElement = document.createElement("button");
                          closeButtonElement.classList.add("modal-close");
                          closeButtonElement.innerText = "Close";
                          closeButtonElement.addEventListener("click", hideModal);
                      
                          let titleElement = document.createElement("h1");
                          titleElement.innerText = pokemon.name;
                      
                          let contentElement = document.createElement("p");
                          contentElement.innerText = pokemon.height;

                          let imgElement = document.createElement('img')
                          imgElement.src = pokemon.imageUrl;
                      
                          modal.appendChild(closeButtonElement);
                          modal.appendChild(titleElement);
                          modal.appendChild(contentElement);
                          modal.appendChild(imgElement);
                          modalContainer.appendChild(modal);
                      
                          modalContainer.classList.add("is-visible");

                          imgElement.classList.add('img-pokemon');
                        }
                          
                            function hideModal() {
                              modalContainer.classList.remove('is-visible');
                            };
                          
                            window.addEventListener('keydown', (e) => {
                              if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
                                hideModal();  
                              }
                            });
                            
                            modalContainer.addEventListener('click', (e) => {
                            
                              let target = e.target;
                              if (target === modalContainer) {
                                hideModal();
                              }
                  
                          });

                          
                        

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





                        
                          







        

   
   



