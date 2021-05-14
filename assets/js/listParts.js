import {showTitleTabs} from './tab.js';
import {openModal} from './modal.js';
import {dropSave, allowDrop} from './dragAndDrop/desktop.js';
import {motherboardMode, pcMode} from './visualHardware.js';
import {cutId} from './helper/utils.js';
import {getParts} from './data/db.js';
import {checkCompatibility} from './helper/checkCompatibility.js';
import partBox from './components/partBox.js';

// falta colocar o cutId
function sectionTitle(title, tabId) {
   const tagSectionTitle = document.createElement('section');
   tagSectionTitle.id = 'titleSection';

   // create back icon
   const iconBack = document.createElement('i');
   iconBack.className = 'fas fa-arrow-circle-left titleSectionIcon';
   iconBack.addEventListener('click', function() {
      showTitleTabs();
   });

   tagSectionTitle.appendChild(iconBack);

   // create tag p
   const elementP = document.createElement('p');
   elementP.innerText = title;
   tagSectionTitle.appendChild(elementP);

   // create tag icon two
   const iconWhichIs = document.createElement('i');
   iconWhichIs.className = 'fas fa-info-circle titleSectionIcon';
   iconWhichIs.addEventListener('click', function() {
      openModal('whichIs', cutId(tabId));
   });
   tagSectionTitle.appendChild(iconWhichIs);


   return tagSectionTitle;
}

function detailsPart(tabId) {
   const zoneButtons = document.createElement('div');
   zoneButtons.className = 'detailsHardware';

   zoneButtons.appendChild(buttonPartDetails(tabId,
      'Filtrar e Ordenar', 'filter'));

   return zoneButtons;
}

function buttonPartDetails(tabId, text, typeModal) {
   const button = document.createElement('button');
   const p = document.createElement('p');
   const icon = document.createElement('i');

   button.addEventListener('click', function() {
      openModal(typeModal, cutId(tabId));
   });

   p.innerText = text;
   button.appendChild(p);

   if (typeModal === 'order') icon.className = 'fas fa-sort-alpha-up-alt';
   else icon.className = 'fas fa-filter';
   button.appendChild(icon);

   return button;
}

function saveZone(typePart) {
   const saveZone = document.createElement('div');
   const text = document.createElement('p');
   text.innerHTML = 'Guarde sua peçã aqui!';

   saveZone.className = 'saveZone';
   saveZone.id = `${typePart}Save`;
   saveZone.appendChild(text);

   // add drag function
   saveZone.ondrop = function() {
      dropSave(event, typePart);
   };

   saveZone.ondragover = function() {
      allowDrop(event);
   };

   return saveZone;
}

function backButton() {
   const backButton = document.createElement('button');
   backButton.className = 'backButton';
   backButton.addEventListener('click', function() {
      showTitleTabs();
   });

   const iconBack = document.createElement('i');
   iconBack.className = 'fas fa-arrow-left';
   backButton.appendChild(iconBack);

   const p = document.createElement('p');
   p.innerHTML = 'Voltar';
   backButton.appendChild(p);

   return backButton;
}

function checkMode(typePart) {
   switch (typePart) {
   case 'motherBoard':
      motherboardMode();
      break;
   case 'cpu':
      motherboardMode();
      break;
   case 'cooler':
      motherboardMode();
      break;
   case 'ram':
      motherboardMode();
      break;
   case 'pciExpress':
      motherboardMode();
      break;
   case 'm2':
      motherboardMode();
      break;
   case 'rom':
      pcMode();
      break;
   case 'recorder':
      pcMode();
      break;
   case 'powerSupply':
      pcMode();
      break;
   }
};

export function justPlugable(parts) {
   const newParts = parts.filter((part) => {
      const isCompatible = checkCompatibility(part);
      return isCompatible !== 'incompatible' ? part : null;
   });
   return newParts;
}

export function notPluggable(parts) {
   const newParts = parts.filter((part) => {
      const isCompatible = checkCompatibility(part);
      return isCompatible === 'incompatible' ? part : null;
   });
   return newParts;
}

export async function listParts(tabId, title) {
   const typePart = cutId(tabId);
   const parts = await getParts(typePart);

   // Adicionado os botões e a zona de recuperar peça
   const divTab = document.getElementById(tabId);
   divTab.innerText = '';
   divTab.appendChild(sectionTitle(title, tabId));
   divTab.appendChild(detailsPart(tabId));
   divTab.appendChild(saveZone(typePart));

   const section = document.createElement('section');
   section.id = 'droppableParts';

   // Adicionando as peças
   const newParts = justPlugable(parts);
   // falta fazer
   newParts.forEach((element) => section.appendChild(partBox(element)));
   divTab.appendChild(section);
   divTab.appendChild(backButton());

   // mudar o modo de visualização
   checkMode(typePart); // falta fazer
}
