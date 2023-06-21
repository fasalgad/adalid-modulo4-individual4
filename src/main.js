import './assets/css/bootstrap.min.css';
import listaPokemones from './assets/js/pokemones.mjs';
import { ordenarPorNombre, ordenarPorId } from './assets/js/ordenarpokemones.mjs';
import { renderInicial, renderPokemones } from './assets/js/renderPokemones.mjs';


document.addEventListener('DOMContentLoaded', () => {
  const btnOrdenarNombre = document.getElementById('btnOrdenarNombre');
  const btnOrdenarId = document.getElementById('btnOrdenarId');

  btnOrdenarNombre.addEventListener('click', () => {
    ordenarPorNombre(listaPokemones, renderPokemones);
  });

  btnOrdenarId.addEventListener('click', () => {
    ordenarPorId(listaPokemones, renderPokemones);
  });
  renderInicial(listaPokemones,renderPokemones)
});

