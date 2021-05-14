import {drop, allowDrop} from '../dragAndDrop/desktop.js';

export default function(id, nameClass, fatherDiv, isMotherBoard) {
   const div = document.createElement('div');
   div.id = id;

   div.addEventListener('drop', function() {
      drop(event);
   });

   div.addEventListener('dragover', function() {
      allowDrop(event);
   });

   if (nameClass) div.className = nameClass;

   if (isMotherBoard) {
      const p = document.createElement('p');
      p.innerText = 'Clique em placa-mãe, escolha uma e arraste aqui!';
      div.appendChild(p);
   }

   fatherDiv.appendChild(div);
}

export function dropZonePCDetails(id, nameClass, fatherDiv) {
   const div = document.createElement('div');
   div.id = id;
   div.class = nameClass;
   fatherDiv.appendChild(div);
}
