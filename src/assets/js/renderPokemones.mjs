const renderInicial = (listaPokemones,callback) => {
  console.log('renderInicial');
  setTimeout(() => {
    callback(listaPokemones);
  }, 3000);
}
//funcion render pokemones
const renderPokemones = (pokemones) => {
  console.log('renderPokemones');
  let divPokemones = document.getElementById('pokemones');
  divPokemones.innerHTML = '';
  pokemones.forEach(element => {
    //{ id: 1, name: "Bulbasaur", types: ["poison", "grass"] }
    let divPokemon = document.createElement('div');
    divPokemon.classList.add('col');
    divPokemon.classList.add('col-md-4');
    divPokemon.classList.add('mb-4');
    divPokemon.innerHTML = `
      <div class="card h-100">

      <div class="card-header">
        <h5 class="card-title">${element.name}</h5>
      </div>
      <div class="card-body">
        <h6 class="card-subtitle mb-2 text-muted">ID: ${element.id}</h6>
        <p class="card-text">Tipo: ${element.types}</p>
      </div>
    </div>
      `;
    divPokemones.appendChild(divPokemon);

  });
}
export { renderInicial, renderPokemones }