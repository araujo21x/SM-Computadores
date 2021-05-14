import {showTitleTabs, disableTab} from '../tab.js';
import {listParts} from '../listParts.js';
import {setBuildingPC, setDropZone, getDropZone, deletePCBuilding}
   from '../data/localStorage.js';
import {motherboardMode, coolerZone} from '../visualHardware.js';
import {phantomDivRemove, showSaveZone, hideSaveZone} from '../helper/utils.js';
import {
   pcieSpecificity,
   ramSpecificity,
   tradeImagem,
   motherBoardSpecificity,
} from '../helper/partSpecificity.js';
import partBox from '../components/partBox.js';
import resizeGrid from '../helper/dropZone.js';
import {checkCompatibility} from '../helper/checkCompatibility.js';

function partSpecificity(partType, idDropZone, part, slot) {
   switch (partType) {
   case 'pciExpress':
      pcieSpecificity(idDropZone, part.dropImage);
      break;
   case 'ram':
      ramSpecificity(slot, part.dropImage);
      break;
   case 'powerSupply':
      tradeImagem(idDropZone, part.dropImage);
      break;
   case 'rom':
      tradeImagem(idDropZone, part.dropImage);
      break;
   case 'recorder':
      tradeImagem(idDropZone, part.dropImage);
      break;
   case 'm2':
      tradeImagem(idDropZone, part.dropImage);
      break;
   case 'motherBoard':
      motherBoardSpecificity();
      break;
   }
}

function checkSlot(idSection, partType) {
   let answer = false;

   if (idSection.slice(idSection.length - 2, idSection.length - 1) === '_') {
      const id = idSection.slice(0, idSection.length - 2);
      if (id === partType) answer = true;
   }
   if (idSection === partType) answer = true;

   return answer;
}

async function installMotherboard(part) {
   // armengue para recarregar as placas
   listParts('motherBoardTab', 'Placa-mãe');
   setBuildingPC(part);

   await setDropZone(part.id);
   motherboardMode();
   partSpecificity(part.type);

   // liberar botoes do menu
   const titleTabs = Array.from(document.getElementsByClassName('titleTab'));
   disableTab(titleTabs);
}

function compatible(event, idDropZone, part) {
   event.target.appendChild(document.getElementById(idDropZone));
   partSpecificity(part.type, idDropZone, part, event.target.id);
   phantomDivRemove();
   setBuildingPC(part, event.target.id);

   const {mode} = getDropZone();
   resizeGrid(mode);

   // liberar botoes do menu
   const titleTabs = Array.from(document.getElementsByClassName('titleTab'));
   disableTab(titleTabs);
}

function malfunction(event, idDropZone, part) {
   alert('Pode apresentar mau funcionamento ou perda de desempenho');

   event.target.appendChild(document.getElementById(idDropZone));
   partSpecificity(part.type, idDropZone, part, event.target.id);
   phantomDivRemove();
   setBuildingPC(part, event.target.id);

   const {mode} = getDropZone();
   resizeGrid(mode);

   // liberar botoes do menu
   const titleTabs = Array.from(document.getElementsByClassName('titleTab'));
   disableTab(titleTabs);
}

function incompatible() {
   alert('Não compatível com a placa mãe!');
}

export function drag(event, part) {
   event.dataTransfer.setData('text', event.target.id);
   event.dataTransfer.setData('part', JSON.stringify(part));
   showSaveZone();// construir depois
}

export function dropEnd() {
   hideSaveZone();// construir depois
}

export function allowDrop(event) {
   event.preventDefault();
}

export async function drop(event) {
   event.preventDefault();

   const data = event.dataTransfer.getData('text');
   const part = JSON.parse(event.dataTransfer.getData('part'));

   if (part.type === 'motherBoard') {
      await installMotherboard(part);

      setTimeout(() => {
         showTitleTabs();
      }, 200);
   } else {
      if (checkSlot(event.target.id, part.type)) {
         switch (checkCompatibility(part)) { // falta fazer essa função
         case 'compatible':
            compatible(event, data, part);
            break;
         case 'malfunction':
            malfunction(event, data, part);
            break;
         case 'incompatible':
            incompatible();
            break;
         }
         setTimeout(() => {
            showTitleTabs();
         }, 200);
      } else {
         if (event.target.id.slice(0, 4) === 'drag') {
            alert('já possui peçã retire a atual');
         } else {
            alert('Esse não é o local da peçã');
         }
      }
   }
   coolerZone();
}

export function dropSave(event, typeTab) { // drop da save zone
   event.preventDefault();

   const data = event.dataTransfer.getData('text');
   const part = JSON.parse(event.dataTransfer.getData('part'));

   const imgDelete = document.getElementById(data);
   imgDelete.parentNode.removeChild(imgDelete);

   if (part.type === typeTab) {
      const droppableParts = document.getElementById('droppableParts');
      droppableParts.appendChild(partBox(part));
   }
   deletePCBuilding(part);
   phantomDivRemove();

   const {mode} = getDropZone();
   resizeGrid(mode);

   const titleTabs = Array.from(document.getElementsByClassName('titleTab'));
   disableTab(titleTabs);
}
