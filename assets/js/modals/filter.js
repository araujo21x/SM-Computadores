import {removingPieceFitted, getFieldsFilter} from '../data/db.js';
import hardwareItem from '../components/partBox.js';
import {loading} from '../helper/utils.js';
import {justPlugable, notPluggable} from '../listParts.js';
import {openAlert} from '../alert.js';
import {getEvaluativeMode} from '../data/localStorage.js';

export default async function(part) {
   const fieldsFilter = await getFieldsFilter(part);
   switch (part) {
   case 'motherBoard':
      motherBoardFilter(fieldsFilter);
      break;
   case 'cpu':
      cpuFilter(fieldsFilter);
      break;
   case 'cooler':
      coolerFilter(fieldsFilter);
      break;
   case 'ram':
      ramFilter(fieldsFilter);
      break;
   case 'pciExpress':
      pciExpressFilter(fieldsFilter);
      break;
   case 'rom':
      romFilter(fieldsFilter);
      break;
   case 'm2':
      m2Filter(fieldsFilter);
      break;
   case 'recorder':
      recorderFilter(fieldsFilter);
      break;
   case 'powerSupply':
      psuFilter(fieldsFilter);
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
   loading(false);
}

async function renderFilter(response, typePart, showPieces) {
   if (response.status !== 200) {
      // fechar modal
      const modal = document.getElementById('modal');
      modal.classList.remove('open');
      openAlert('confirmDanger', ' Atenção!!!',
         'Erro! peça não encontrada!');
   } else {
      const parts = await response.json();
      const verifiedParts = removingPieceFitted(parts, typePart);

      if (verifiedParts.length === 0) {
         // fechar modal
         const modal = document.getElementById('modal');
         modal.classList.remove('open');
         openAlert('confirmDanger', ' Atenção!!!',
            'Erro! só foi encontrada uma peçã e ela já esta encaixada!');
      } else {
         // pegar a div

         const divDroppableParts = document.querySelector(
            `#${typePart}Tab #droppableParts`);
         divDroppableParts.innerHTML = '';

         // adicionar as peçãs

         if (showPieces === 'pluggable') {
            const newParts = justPlugable(verifiedParts);
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

function creatItemForm({name, question, filterResponse}) {
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
   if (!(name === 'showPieces' && getEvaluativeMode())) {
      filterResponse.forEach((element) => {
         const option = document.createElement('option');
         option.value = element.value;
         option.text = element.text;
         select.appendChild(option);
      });
   }

   divItemFilter.appendChild(select);
   return divItemFilter;
};

function motherBoardFilter(fieldsFilter) {
   createTitleFilter('Placa-Mãe');
   const modalBody = document.getElementById('modalBody');
   modalBody.innerHTML = '';

   const divForm = document.createElement('div');
   divForm.className = 'filterForm';
   fieldsFilter.forEach((element) => {
      divForm.appendChild(creatItemForm(element));
   });

   modalBody.appendChild(divForm);
};

function cpuFilter(fieldsFilter) {
   createTitleFilter('Processador');
   const modalBody = document.getElementById('modalBody');
   modalBody.innerHTML = '';

   const divForm = document.createElement('div');
   divForm.className = 'filterForm';

   fieldsFilter.forEach((element) => {
      divForm.appendChild(creatItemForm(element));
   });


   modalBody.appendChild(divForm);
};

function coolerFilter(fieldsFilter) {
   createTitleFilter('Cooler');
   const modalBody = document.getElementById('modalBody');
   modalBody.innerHTML = '';

   const divForm = document.createElement('div');
   divForm.className = 'filterForm';

   fieldsFilter.forEach((element) => {
      divForm.appendChild(creatItemForm(element));
   });

   modalBody.appendChild(divForm);
};

function ramFilter(fieldsFilter) {
   createTitleFilter('Memória RAM');
   const modalBody = document.getElementById('modalBody');
   modalBody.innerHTML = '';

   const divForm = document.createElement('div');
   divForm.className = 'filterForm';

   fieldsFilter.forEach((element) => {
      divForm.appendChild(creatItemForm(element));
   });

   modalBody.appendChild(divForm);
};

function pciExpressFilter(fieldsFilter) {
   createTitleFilter('PCI Express');
   const modalBody = document.getElementById('modalBody');
   modalBody.innerHTML = '';

   const divForm = document.createElement('div');
   divForm.className = 'filterForm';

   fieldsFilter.forEach((element) => {
      divForm.appendChild(creatItemForm(element));
   });

   modalBody.appendChild(divForm);
};

function romFilter(fieldsFilter) {
   createTitleFilter('Memória ROM');
   const modalBody = document.getElementById('modalBody');
   modalBody.innerHTML = '';

   const divForm = document.createElement('div');
   divForm.className = 'filterForm';

   fieldsFilter.forEach((element) => {
      divForm.appendChild(creatItemForm(element));
   });

   modalBody.appendChild(divForm);
};

function m2Filter(fieldsFilter) {
   createTitleFilter('M2 - Memória ROM');
   const modalBody = document.getElementById('modalBody');
   modalBody.innerHTML = '';

   const divForm = document.createElement('div');
   divForm.className = 'filterForm';

   fieldsFilter.forEach((element) => {
      divForm.appendChild(creatItemForm(element));
   });

   modalBody.appendChild(divForm);
};

function recorderFilter(fieldsFilter) {
   createTitleFilter('Leitor de DVD');
   const modalBody = document.getElementById('modalBody');
   modalBody.innerHTML = '';
};

function psuFilter(fieldsFilter) {
   createTitleFilter('Fonte');
   const modalBody = document.getElementById('modalBody');
   modalBody.innerHTML = '';

   const divForm = document.createElement('div');
   divForm.className = 'filterForm';

   fieldsFilter.forEach((element) => {
      divForm.appendChild(creatItemForm(element));
   });

   modalBody.appendChild(divForm);
};
