//Función para ordenar los pokemones por nombre
const ordenarPorNombre = (pokemones, callback) => {
  pokemones.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    }
    if (b.name > a.name) {
      return -1;
    }
    return 0;
  });
  console.log('Ordenado por nombre',pokemones)
  callback(pokemones);
}

//Función para ordenar los pokemones por id
const ordenarPorId = (pokemones, callback) => {
  pokemones.sort((a, b) => {
    if (a.id > b.id) {
      return 1;
    }
    if (b.id > a.id) {
      return -1;
    }
    return 0;
  });
  console.log('Ordenado por id',pokemones)
  callback(pokemones);
}
export { ordenarPorNombre, ordenarPorId }