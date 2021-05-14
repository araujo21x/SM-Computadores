import {getPCBuilding} from '../data/localStorage.js';

export function pcieSpecificity(idDropZone, dropImage) {
   // const pciExpress = document.getElementById('pciExpress_1');
   // pciExpress.classList.add('docked');

   const img = document.getElementById(idDropZone);
   img.src = dropImage;
}

export function ramSpecificity(slot, dropImage) {
   const ram = document.getElementById(slot);
   // ram.classList.add('docked');
   const img = ram.childNodes[0];
   img.src = dropImage;
}

export function tradeImagem(idDropZone, dropImage) {
   const pciExpress = document.getElementById(idDropZone);
   pciExpress.src = dropImage;
}

export function motherBoardSpecificity() {
   const {motherBoard: {hasSocketM2}} = getPCBuilding();
   const m2Div = document.getElementById('m2');
   if (hasSocketM2) m2Div.style.display = 'inline';
}
