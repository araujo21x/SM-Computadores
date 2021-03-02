/* exported createModalFilter, filter */
const createModalFilter = (piece) => {
   switch (piece) {
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
   button.addEventListener('click', function() {
      filter(piece);
   });
   button.innerText = 'Filtrar';
   modalButton.appendChild(button);
};

const filter = (piece) => {
   const filterRequest = {piece};

   Array.from(document.getElementsByClassName('selectFilter'))
      .forEach((element) => {
         if (element.value !== '') filterRequest[element.name] = element.value;
      });

   console.log(filterRequest);
};

const createTitleFilter = (name) => {
   const modalTitle = document.getElementById('modalTitle');
   modalTitle.innerText = `Filtro de ${name}`;
};

const creatItemForm = ({name, question, answer}) => {
   const divItemFilter = document.createElement('div');
   divItemFilter.className = 'itemFilter';

   const p = document.createElement('p');
   p.innerText = `${question}: `;
   divItemFilter.appendChild(p);

   const select = document.createElement('select');
   select.className = 'selectFilter';
   select.name = name;

   const optionNull = document.createElement('option');
   optionNull.value = '';
   optionNull.text = 'Nenhum';
   select.appendChild(optionNull);

   answer.forEach((element) => {
      const option = document.createElement('option');
      option.value = element.value;
      option.text = element.text;
      select.appendChild(option);
   });
   divItemFilter.appendChild(select);
   return divItemFilter;
};

const motherBoardFilter = () => {
   createTitleFilter('Placa-Mãe');
   const modalBody = document.getElementById('modalBody');
   modalBody.innerHTML = '';

   const divForm = document.createElement('div');
   divForm.className = 'filterForm';

   divForm.appendChild(creatItemForm(motherBoardFilterCamp.chipset));
   divForm.appendChild(creatItemForm(motherBoardFilterCamp.socket));
   divForm.appendChild(creatItemForm(motherBoardFilterCamp.suportM2));
   divForm.appendChild(creatItemForm(motherBoardFilterCamp.memorySizeSupport));
   divForm.appendChild(creatItemForm(motherBoardFilterCamp.memorySlotAmount));
   divForm.appendChild(creatItemForm(motherBoardFilterCamp.memorySlotType));
   divForm.appendChild(creatItemForm(motherBoardFilterCamp.motherFrequencies));

   modalBody.appendChild(divForm);
};

const cpuFilter = () => {
   createTitleFilter('Processador');
   const modalBody = document.getElementById('modalBody');
   modalBody.innerHTML = '';

   const divForm = document.createElement('div');
   divForm.className = 'filterForm';

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

const coolerFilter = () => {
   createTitleFilter('Cooler');
   const modalBody = document.getElementById('modalBody');
   modalBody.innerHTML = '';

   const divForm = document.createElement('div');
   divForm.className = 'filterForm';

   divForm.appendChild(creatItemForm(coolerFilterCamp.compatibilityCpu));
   divForm.appendChild(creatItemForm(coolerFilterCamp.speedFan));
   divForm.appendChild(creatItemForm(coolerFilterCamp.fanAirflow));

   modalBody.appendChild(divForm);
};

const ramFilter = () => {
   createTitleFilter('Memória RAM');
   const modalBody = document.getElementById('modalBody');
   modalBody.innerHTML = '';

   const divForm = document.createElement('div');
   divForm.className = 'filterForm';

   divForm.appendChild(creatItemForm(ramFilterCamp.memoryFrequency));
   divForm.appendChild(creatItemForm(ramFilterCamp.memorySize));
   divForm.appendChild(creatItemForm(ramFilterCamp.memorySlotType));

   modalBody.appendChild(divForm);
};

const pciExpressFilter = () => {
   createTitleFilter('PCI Express');
   const modalBody = document.getElementById('modalBody');
   modalBody.innerHTML = '';

   const divForm = document.createElement('div');
   divForm.className = 'filterForm';

   divForm.appendChild(creatItemForm(pciFilterCamp.baseClock));
   divForm.appendChild(creatItemForm(pciFilterCamp.boostClock));
   divForm.appendChild(creatItemForm(pciFilterCamp.CUDACore));
   divForm.appendChild(creatItemForm(pciFilterCamp.memoryInterface));
   divForm.appendChild(creatItemForm(pciFilterCamp.memorySize));
   divForm.appendChild(creatItemForm(pciFilterCamp.memorySpeed));
   divForm.appendChild(creatItemForm(pciFilterCamp.memoryType));

   modalBody.appendChild(divForm);
};

const romFilter = () => {
   createTitleFilter('Memória ROM');
   const modalBody = document.getElementById('modalBody');
   modalBody.innerHTML = '';

   const divForm = document.createElement('div');
   divForm.className = 'filterForm';

   divForm.appendChild(creatItemForm(romCamp.memorySize));
   divForm.appendChild(creatItemForm(romCamp.reading));
   divForm.appendChild(creatItemForm(romCamp.writing));
   divForm.appendChild(creatItemForm(romCamp.rotation));

   modalBody.appendChild(divForm);
};

const m2Filter = () => {
   createTitleFilter('M2 - Memória ROM');
   const modalBody = document.getElementById('modalBody');
   modalBody.innerHTML = '';

   const divForm = document.createElement('div');
   divForm.className = 'filterForm';

   divForm.appendChild(creatItemForm(M2Camp.format));
   divForm.appendChild(creatItemForm(M2Camp.memorySize));
   divForm.appendChild(creatItemForm(M2Camp.model));
   divForm.appendChild(creatItemForm(M2Camp.reading));
   divForm.appendChild(creatItemForm(M2Camp.writing));

   modalBody.appendChild(divForm);
};

const recorderFilter = () => {
   createTitleFilter('Leitor de DVD');
   const modalBody = document.getElementById('modalBody');
   modalBody.innerHTML = '';
};

const psuFilter = () => {
   createTitleFilter('Fonte');
   const modalBody = document.getElementById('modalBody');
   modalBody.innerHTML = '';

   const divForm = document.createElement('div');
   divForm.className = 'filterForm';

   divForm.appendChild(creatItemForm(psuCamp.voltage));
   divForm.appendChild(creatItemForm(psuCamp.wattage));

   modalBody.appendChild(divForm);
};
