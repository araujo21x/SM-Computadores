/* eslint-disable max-len */
import {openAlert, putName} from '../alert.js';
import {reset, goToHome} from '../helper/utils.js';


export default function(className, typeAlert, iClassName, pText, fatherDiv) {
   const button = document.createElement('button');
   button.className = className;

   if (typeAlert === 'confirm') {
      button.addEventListener('click', function() {
         openAlert(
            typeAlert,
            'Deseja gerar PDF ?',
            'Gerar um arquivo pdf com as especificações que você montou até agora',
            putName,
         );
      });
   } else if (typeAlert === 'confirmDanger') {
      button.addEventListener('click', function() {
         openAlert(
            typeAlert,
            'Deseja reiniciar ?',
            'Ao confirmar você vai precisar recomeçar o processo de montagem',
            reset,
         );
      });
   } else {
      button.addEventListener('click', function() {
         openAlert(
            typeAlert,
            'Deseja voltar a pagina inicial ?',
            'Ao confirmar você voltara para a pagina inicial. O processo de montagem não sera perdido',
            goToHome,
         );
      });
   }


   const i = document.createElement('i');
   i.className = `fas ${iClassName} imgOptionsButton`;

   const p = document.createElement('p');
   p.innerText = pText;

   button.appendChild(i);
   button.appendChild(p);
   fatherDiv.appendChild(button);
}
