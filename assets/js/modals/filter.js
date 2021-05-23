import {request} from '../helper/utils.js';

import {
   motherBoardFilterCamp,
   cpuFilterCamp,
   coolerFilterCamp,
   ramFilterCamp,
   pciFilterCamp,
   romCamp,
   M2Camp,
   psuCamp,
} from '../data/filterData.js';
import {removingPieceFitted} from '../data/db.js';
import hardwareItem from '../components/partBox.js';
import {loading} from '../helper/utils.js';

export default function(part) {
   switch (part) {
   case 'motherBoard':
      motherBoardFilter();
      break;
   case 'cpu':
      cpuFilter();
      break;
   case 'cooler':
      coolerFilter();
      break;
   case 'ram':
      ramFilter();
      break;
   case 'pciExpress':
      pciExpressFilter();
      break;
   case 'rom':
      romFilter();
      break;
   case 'm2':
      m2Filter();
      break;
   case 'recorder':
      recorderFilter();
      break;
   case 'powerSupply':
      psuFilter();
      break;
   }

   const modalButton = document.getElementById('modalButton');
   modalButton.innerHTML = '';

   const button = document.createElement('button');
   button.className = 'normalButton';
   button.addEventListener('click', async function() {
      filter(part);
   });
   button.innerText = 'Pesquisar';

   modalButton.appendChild(button);
}

export async function filter(typePart) {
   loading(true);
   const filterRequest = {type: typePart};

   Array.from(document.getElementsByClassName('selectFilter'))
      .forEach((element) => {
         if (element.value !== '') filterRequest[element.name] = element.value;
      });

   const url = new URL('https://api-draganddrop.herokuapp.com/v1/piece/filter');
   url.search = new URLSearchParams(filterRequest).toString();

   const response = await fetch(url, {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
   });
   renderFilter(response, typePart, filterRequest.showPieces);
   setTimeout(() => {
      loading(false);
   }, 3000);
}

async function renderFilter(response, typePart, showPieces) {
   if (response.status !== 200) alert('Erro! peça não encontrada!');
   else {
      const parts = await response.json();
      const verifiedParts = removingPieceFitted(parts, typePart);

      if (verifiedParts.length === 0) {
         alert('Erro! só foi encontrada uma peçã e ela já esta encaixada!');
      } else {
         // pegar a div

         const divDroppableParts = document.querySelector(
            `#${typePart}Tab #droppableParts`);
         divDroppableParts.innerHTML = '';

         // adicionar as peçãs

         if (showPieces === 'pluggable') {
            const newParts = justPluggable(verifiedParts);
            newParts.forEach((element) => {
               divDroppableParts.appendChild(hardwareItem(element));
            });
         } else if (showPieces === 'notPluggable') {
            const newParts = notPluggable(verifiedParts);
            newParts.forEach((element) => {
               divDroppableParts.appendChild(hardwareItem(element));
            });
         } else {
            verifiedParts.forEach((element) => {
               divDroppableParts.appendChild(hardwareItem(element));
            });
         }

         // fechar modal
         const modal = document.getElementById('modal');
         modal.classList.remove('open');
      }
   }
};

function createTitleFilter(name) {
   const modalTitle = document.getElementById('modalTitle');
   modalTitle.innerText = `Filtro e Ordenação de ${name}`;
};

function creatItemForm({name, question, answer}) {
   const divItemFilter = document.createElement('div');
   divItemFilter.className = 'itemFilter';

   const p = document.createElement('p');
   p.innerText = `${question}: `;
   divItemFilter.appendChild(p);

   const select = document.createElement('select');
   select.className = 'selectFilter';
   select.name = name;

   if (name !== 'order' && name !== 'sortType' && name !== 'showPieces') {
      const optionNull = document.createElement('option');
      optionNull.value = '';
      optionNull.text = 'Todas';
      select.appendChild(optionNull);
   }

   if (name === 'showPieces') {
      const optionNull = document.createElement('option');
      optionNull.value = 'all';
      optionNull.text = 'Todas';
      select.appendChild(optionNull);
   }

   answer.forEach((element) => {
      const option = document.createElement('option');
      option.value = element.value;
      option.text = element.text;
      select.appendChild(option);
   });
   divItemFilter.appendChild(select);
   return divItemFilter;
};

function motherBoardFilter() {
   createTitleFilter('Placa-Mãe');
   const modalBody = document.getElementById('modalBody');
   modalBody.innerHTML = '';

   const divForm = document.createElement('div');
   divForm.className = 'filterForm';
   divForm.appendChild(creatItemForm(motherBoardFilterCamp.order));
   divForm.appendChild(creatItemForm(motherBoardFilterCamp.sortType));
   divForm.appendChild(creatItemForm(motherBoardFilterCamp.showPieces));
   divForm.appendChild(creatItemForm(motherBoardFilterCamp.chipset));
   divForm.appendChild(creatItemForm(motherBoardFilterCamp.socket));
   divForm.appendChild(creatItemForm(motherBoardFilterCamp.suportM2));
   divForm.appendChild(creatItemForm(motherBoardFilterCamp.memorySizeSupport));
   divForm.appendChild(creatItemForm(motherBoardFilterCamp.memorySlotAmount));
   divForm.appendChild(creatItemForm(motherBoardFilterCamp.memorySlotType));
   divForm.appendChild(creatItemForm(motherBoardFilterCamp.motherFrequencies));

   modalBody.appendChild(divForm);
};

function cpuFilter() {
   createTitleFilter('Processador');
   const modalBody = document.getElementById('modalBody');
   modalBody.innerHTML = '';

   const divForm = document.createElement('div');
   divForm.className = 'filterForm';

   divForm.appendChild(creatItemForm(cpuFilterCamp.order));
   divForm.appendChild(creatItemForm(cpuFilterCamp.sortType));
   divForm.appendChild(creatItemForm(cpuFilterCamp.showPieces));
   divForm.appendChild(creatItemForm(cpuFilterCamp.chipset));
   divForm.appendChild(creatItemForm(cpuFilterCamp.socket));
   divForm.appendChild(creatItemForm(cpuFilterCamp.memorySizeSupport));
   divForm.appendChild(creatItemForm(cpuFilterCamp.memorySlotAmount));
   divForm.appendChild(creatItemForm(cpuFilterCamp.cpuFrequencies));
   divForm.appendChild(creatItemForm(cpuFilterCamp.baseClockSpeed));
   divForm.appendChild(creatItemForm(cpuFilterCamp.maximumBoostSpeed));
   divForm.appendChild(creatItemForm(cpuFilterCamp.cache));
   divForm.appendChild(creatItemForm(cpuFilterCamp.core));
   divForm.appendChild(creatItemForm(cpuFilterCamp.threads));
   divForm.appendChild(creatItemForm(cpuFilterCamp.grapshicProcessor));

   modalBody.appendChild(divForm);
};

function coolerFilter() {
   createTitleFilter('Cooler');
   const modalBody = document.getElementById('modalBody');
   modalBody.innerHTML = '';

   const divForm = document.createElement('div');
   divForm.className = 'filterForm';

   divForm.appendChild(creatItemForm(coolerFilterCamp.order));
   divForm.appendChild(creatItemForm(coolerFilterCamp.sortType));
   divForm.appendChild(creatItemForm(coolerFilterCamp.showPieces));
   divForm.appendChild(creatItemForm(coolerFilterCamp.compatibilityCpu));
   divForm.appendChild(creatItemForm(coolerFilterCamp.speedFan));
   divForm.appendChild(creatItemForm(coolerFilterCamp.fanAirflow));

   modalBody.appendChild(divForm);
};

function ramFilter() {
   createTitleFilter('Memória RAM');
   const modalBody = document.getElementById('modalBody');
   modalBody.innerHTML = '';

   const divForm = document.createElement('div');
   divForm.className = 'filterForm';

   divForm.appendChild(creatItemForm(ramFilterCamp.order));
   divForm.appendChild(creatItemForm(ramFilterCamp.sortType));
   divForm.appendChild(creatItemForm(ramFilterCamp.showPieces));
   divForm.appendChild(creatItemForm(ramFilterCamp.memoryFrequency));
   divForm.appendChild(creatItemForm(ramFilterCamp.memorySize));
   divForm.appendChild(creatItemForm(ramFilterCamp.memorySlotType));

   modalBody.appendChild(divForm);
};

function pciExpressFilter() {
   createTitleFilter('PCI Express');
   const modalBody = document.getElementById('modalBody');
   modalBody.innerHTML = '';

   const divForm = document.createElement('div');
   divForm.className = 'filterForm';

   divForm.appendChild(creatItemForm(pciFilterCamp.order));
   divForm.appendChild(creatItemForm(pciFilterCamp.sortType));
   divForm.appendChild(creatItemForm(pciFilterCamp.showPieces));
   divForm.appendChild(creatItemForm(pciFilterCamp.baseClock));
   divForm.appendChild(creatItemForm(pciFilterCamp.boostClock));
   divForm.appendChild(creatItemForm(pciFilterCamp.CUDACore));
   divForm.appendChild(creatItemForm(pciFilterCamp.memoryInterface));
   divForm.appendChild(creatItemForm(pciFilterCamp.memorySize));
   divForm.appendChild(creatItemForm(pciFilterCamp.memorySpeed));
   divForm.appendChild(creatItemForm(pciFilterCamp.memoryType));

   modalBody.appendChild(divForm);
};

function romFilter() {
   createTitleFilter('Memória ROM');
   const modalBody = document.getElementById('modalBody');
   modalBody.innerHTML = '';

   const divForm = document.createElement('div');
   divForm.className = 'filterForm';

   divForm.appendChild(creatItemForm(romCamp.order));
   divForm.appendChild(creatItemForm(romCamp.sortType));
   divForm.appendChild(creatItemForm(romCamp.showPieces));
   divForm.appendChild(creatItemForm(romCamp.memorySize));
   divForm.appendChild(creatItemForm(romCamp.reading));
   divForm.appendChild(creatItemForm(romCamp.writing));
   divForm.appendChild(creatItemForm(romCamp.rotation));

   modalBody.appendChild(divForm);
};

function m2Filter() {
   createTitleFilter('M2 - Memória ROM');
   const modalBody = document.getElementById('modalBody');
   modalBody.innerHTML = '';

   const divForm = document.createElement('div');
   divForm.className = 'filterForm';

   divForm.appendChild(creatItemForm(M2Camp.order));
   divForm.appendChild(creatItemForm(M2Camp.sortType));
   divForm.appendChild(creatItemForm(M2Camp.showPieces));
   divForm.appendChild(creatItemForm(M2Camp.format));
   divForm.appendChild(creatItemForm(M2Camp.memorySize));
   divForm.appendChild(creatItemForm(M2Camp.model));
   divForm.appendChild(creatItemForm(M2Camp.reading));
   divForm.appendChild(creatItemForm(M2Camp.writing));

   modalBody.appendChild(divForm);
};

function recorderFilter() {
   createTitleFilter('Leitor de DVD');
   const modalBody = document.getElementById('modalBody');
   modalBody.innerHTML = '';
};

function psuFilter() {
   createTitleFilter('Fonte');
   const modalBody = document.getElementById('modalBody');
   modalBody.innerHTML = '';

   const divForm = document.createElement('div');
   divForm.className = 'filterForm';

   divForm.appendChild(creatItemForm(psuCamp.order));
   divForm.appendChild(creatItemForm(psuCamp.sortType));
   divForm.appendChild(creatItemForm(psuCamp.showPieces));
   divForm.appendChild(creatItemForm(psuCamp.voltage));
   divForm.appendChild(creatItemForm(psuCamp.wattage));

   modalBody.appendChild(divForm);
};
