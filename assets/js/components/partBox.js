import {drag, dropEnd} from '../dragAndDrop/desktop.js';
import {checkCompatibility} from '../helper/checkCompatibility.js';
import {openModal} from '../modal.js';
import {getEvaluativeMode} from '../data/localStorage.js';

import partBoxInfo from './partBoxInfo.js';

function imageZone(imageDir, infoImg, part) {
   const divZoneImage = document.createElement('div');
   divZoneImage.className = 'hardwareItemImg';

   const imageTag = creatTagImg(imageDir, infoImg, part);
   const divImage = document.createElement('div');

   if (part.type === 'motherBoard') {
      divImage.style.width = '100%';
      divImage.style.height = '100%';
   }
   divImage.appendChild(imageTag);

   divZoneImage.appendChild(divImage);
   return divZoneImage;
}

function bodyZone(part) {
   const divBody = document.createElement('div');
   divBody.className = 'HardwareItemBody';

   divBody.appendChild(bodyTitle(part.name));
   divBody.appendChild(bodyInfo(part));
   divBody.appendChild(bodyButton(part));

   return divBody;
}

function bodyTitle(namePart) {
   const div = document.createElement('div');
   div.className = 'hardwareItemTitle';
   div.textContent = namePart;

   return div;
}

function bodyInfo(part) {
   const div = document.createElement('div');
   div.className = 'HardwareItemText';

   div.appendChild(partBoxInfo(part));
   return div;
}

function bodyButton(part) {
   const button = document.createElement('button');
   button.addEventListener('click', function() {
      openModal('moreInfo', part);
   });
   button.innerHTML = 'Mais informações';

   return button;
}
export function creatTagImg(imageDir, infoImg, part) {
   const imageTag = document.createElement('img');
   imageTag.src = imageDir;
   imageTag.alt = infoImg;
   imageTag.className = 'imagePiece';
   imageTag.loading = 'lazy';

   // add drag and drop
   imageTag.draggable = true;

   imageTag.addEventListener('dragstart', function() {
      drag(event, part);
   });

   imageTag.addEventListener('dragend', function() {
      dropEnd();
   });

   imageTag.id = `drag_${part.type}_${part.id}`;
   return imageTag;
}

export default function(part) {// refatorar
   const partItemTag = document.createElement('div');
   partItemTag.className = 'hardwareItem';

   // Adicionar a imagem do peça
   partItemTag.appendChild(imageZone(part.image
      , 'imagem', part));
   // Adicionar as info das peça
   partItemTag.appendChild(bodyZone(part));

   // verificar se a peçã e compatível com a placa-mãe e definir a cor da borda
   if (getEvaluativeMode()) {
      partItemTag.classList.add('nullBorder');
   } else {
      partItemTag.classList.add(checkCompatibility(part).situation);
   }

   return partItemTag;
}
