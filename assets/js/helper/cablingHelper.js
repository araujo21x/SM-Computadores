import {setCable} from '../data/localStorage.js';

export function psuPlugged(display) {
   const plugPSU = document.getElementById('plugPSU');

   if (display === 'none') {
      setCable('powerSupply', false);
      plugPSU.classList.remove('plugged');
   } else {
      setCable('powerSupply', true);
      plugPSU.classList.add('plugged');
   }


   if (plugPSU.classList.length === 3 || display === 'none') psuCable(display);
}

export function psuCable(display) {
   for (let x = 1; x <= 30; x++) {
      const elementCable = document.
         getElementById(`thread_psu_mother_${x < 10 ? `0${x}` : x}`);
      elementCable.style.display = display;
   }
}
