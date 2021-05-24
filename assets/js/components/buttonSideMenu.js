import {openModal} from '../modal.js';

export default function(className, typeModal, iClassName, pText, fatherDiv) {
   const button = document.createElement('button');
   button.className = className;
   button.addEventListener('click', function() {
      openModal(typeModal);
   });

   const i = document.createElement('i');
   i.className = `fas ${iClassName} imgOptionsButton`;

   const p = document.createElement('p');
   p.innerText = pText;

   button.appendChild(i);
   button.appendChild(p);
   fatherDiv.appendChild(button);
}
