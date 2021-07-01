export default function(part) {
   switch (part.type) {
   case 'motherBoard':
      motherBoardInfo(part);
      break;
   case 'cpu':
      cpuInfo(part);
      break;
   case 'cooler':
      coolerInfo(part);
      break;
   case 'ram':
      ramInfo(part);
      break;
   case 'pciExpress':
      pciExpressInfo(part);
      break;
   case 'rom':
      romInfo(part);
      break;
   case 'm2':
      m2Info(part);
      break;
   case 'recorder':
      recorderInfo(part);
      break;
   case 'powerSupply':
      powerSupplyInfo(part);
      break;
   }
};

function motherBoardInfo(part) {
   const modalBody = document.getElementById('modalBody');
   modalBody.innerHTML = '';
   const ul = document.createElement('ul');
   ul.className = 'moreInfoUl';

   createTitle(part.name);
   createImg(part.image, '17', '14');

   ul.appendChild(createLi('Chipset', part.chipset));
   ul.appendChild(createLi('Socket', part.socket));
   if (part.hasSocketM2) ul.appendChild(createLi('Suporte M2', 'Possui'));
   else ul.appendChild(createLi('Suporte M2', 'Não Possui'));
   ul.appendChild(createLi('Limite maximo de Ram',
      `${part.memorySizeSupport} GB`));
   ul.appendChild(createLi('Quantidade de slots de memória',
      part.memorySlotAmount));
   ul.appendChild(createLi('Tipo de slot de memória', part.memorySlotType));
   ul.appendChild(createLiArray('Frequências de memória suportadas',
      part.memorySlotFrequency, 'frequency'));

   modalBody.appendChild(ul);
   createCloseButton();
};

function cpuInfo(part) {
   const modalBody = document.getElementById('modalBody');
   modalBody.innerHTML = '';
   const ul = document.createElement('ul');
   ul.className = 'moreInfoUl';

   createTitle(part.name);
   createImg(part.image, '9', '9');

   ul.appendChild(createLi('Chipset', part.chipset));
   ul.appendChild(createLi('Socket', part.socket));
   ul.appendChild(createLi('Limite máximo de Ram',
      `${part.memorySizeSupport} GB`));
   ul.appendChild(createLi('Limite de slots de memória',
      part.memorySupportAmountSlot));
   ul.appendChild(createLiArray('Frequência de memória suportada',
      part.memorySupportFrequency, 'frequency'));
   ul.appendChild(createLi('Frequência mínima de clock',
      `${part.baseClockSpeed} GHz`));
   ul.appendChild(createLi('Frequência máxima de clock',
      `${part.maximumBoostSpeed} GHz`));
   ul.appendChild(createLi('Cache', `${part.cache} MB`));
   ul.appendChild(createLi('Core', part.core));
   ul.appendChild(createLi('Threads', part.threads));
   ul.appendChild(createLi('Processador gráfico', part.graphicsProcessor));

   modalBody.appendChild(ul);
   createCloseButton();
};

function coolerInfo(part) {
   const modalBody = document.getElementById('modalBody');
   modalBody.innerHTML = '';
   const ul = document.createElement('ul');
   ul.className = 'moreInfoUl';

   createTitle(part.name);
   createImg(part.image, '10', '10');

   ul.appendChild(createLiArray('Sockets Suportados', part.compatibilityCpu));
   ul.appendChild(createLi('Velocidade do Fan', `${part.speedFan} RPM`));
   ul.appendChild(createLi('Máximo fluxo de ar do fan',
      `${part.fanAirflow} CFM`));

   modalBody.appendChild(ul);
   createCloseButton();
};

function ramInfo(part) {
   const modalBody = document.getElementById('modalBody');
   modalBody.innerHTML = '';
   const ul = document.createElement('ul');
   ul.className = 'moreInfoUl';

   createTitle(part.name);
   createImg(part.image, '20', '6');

   ul.appendChild(createLi('Frequência da memória',
      `${part.memoryFrequency} MHz`));
   ul.appendChild(createLi('Tamanho de memória', `${part.memorySize} GB`));
   ul.appendChild(createLi('Tipo de slot', `${part.memorySlotType}`));

   modalBody.appendChild(ul);
   createCloseButton();
};

function pciExpressInfo(part) {
   const modalBody = document.getElementById('modalBody');
   modalBody.innerHTML = '';
   const ul = document.createElement('ul');
   ul.className = 'moreInfoUl';
   createTitle(part.name);
   createImg(part.image, '20', '10');

   ul.appendChild(createLi('PCI Express', part.PCIeType));
   ul.appendChild(createLi('PCI Express Versão', part.PCIeVersion));
   ul.appendChild(createLi('GPU base clock', `${part.baseClock} MHz`));
   ul.appendChild(createLi('GPU boost clock', `${part.boostClock} MHz`));
   ul.appendChild(createLi('CUDA core', part.CUDACore));

   ul.appendChild(createLi('Interface de memória', part.memoryInterface));
   ul.appendChild(createLi('Tamanho de memória', `${part.memorySize} GB`));
   ul.appendChild(createLi('Velocidade de memória', part.memorySpeed));
   ul.appendChild(createLi('Tipo de memória', part.memoryType));

   modalBody.appendChild(ul);
   createCloseButton();
};

function romInfo(part) {
   const modalBody = document.getElementById('modalBody');
   modalBody.innerHTML = '';
   const ul = document.createElement('ul');
   ul.className = 'moreInfoUl';

   createTitle(part.name);
   createImg(part.image, '15', '8');

   ul.appendChild(createLi('Tamanho da memória', `${part.memorySize} GB`));
   ul.appendChild(createLi('Velocidade de leitura', part.reading));
   ul.appendChild(createLi('Velocidade de escrita', part.writing));
   if (part.rotation) {
      ul.appendChild(createLi('Rotação', `${part.rotation} RPM`));
   }


   modalBody.appendChild(ul);
   createCloseButton();
};

function m2Info(part) {
   const modalBody = document.getElementById('modalBody');
   modalBody.innerHTML = '';
   const ul = document.createElement('ul');
   ul.className = 'moreInfoUl';

   createTitle(part.name);
   createImg(part.image, '17', '5');

   ul.appendChild(createLi('Interface', part.format));
   ul.appendChild(createLi('Tamanho de memória', `${part.memorySize} GB`));
   ul.appendChild(createLi('Formato', part.model));
   ul.appendChild(createLi('Velocidade de leitura', part.reading));
   ul.appendChild(createLi('Velocidade de escrita', part.writing));

   modalBody.appendChild(ul);
   createCloseButton();
};

function recorderInfo(part) {
   const modalBody = document.getElementById('modalBody');
   modalBody.innerHTML = '';
   const ul = document.createElement('ul');
   ul.className = 'moreInfoUl';
   createTitle(part.name);
   createImg(part.image, '15', '10');

   modalBody.appendChild(ul);
   createCloseButton();
};

function powerSupplyInfo(part) {
   const modalBody = document.getElementById('modalBody');
   modalBody.innerHTML = '';
   const ul = document.createElement('ul');
   ul.className = 'moreInfoUl';

   createTitle(part.name);
   createImg(part.image, '15', '10');

   ul.appendChild(createLi('Voltagem', part.voltage));
   ul.appendChild(createLi('Capacidade de saída', `${part.wattage} W`));

   modalBody.appendChild(ul);
   createCloseButton();
};

function createLi(subTitle, info) {
   const p = document.createElement('p');
   const li = document.createElement('li');

   p.innerText = subTitle;
   li.appendChild(p);
   li.innerHTML = `${li.innerHTML} = ${info}`;
   return li;
};

function createLiArray(subTitle, info, type) {
   const p = document.createElement('p');
   const li = document.createElement('li');

   p.innerText = subTitle;
   li.appendChild(p);
   if (type === 'frequency') {
      info.forEach((element, index) => {
         if (index === 0) li.innerHTML = `${li.innerHTML} = ${element} MHz`;
         else li.innerHTML = `${li.innerHTML} -- ${element} MHz`;
      });
   } else {
      info.forEach((element, index) => {
         if (index === 0) li.innerHTML = `${li.innerHTML} = ${element}`;
         else li.innerHTML = `${li.innerHTML} -- ${element}`;
      });
   }


   return li;
};

function createTitle(title) {
   const modalTitle = document.getElementById('modalTitle');
   modalTitle.innerText = title;
};

function createImg(image, width, height) {
   const img = document.createElement('img');
   img.src = image;
   img.style.marginRight = 'auto';
   img.style.marginLeft = 'auto';
   img.style.display = 'block';
   img.style.width = `auto`;
   img.style.height = `${height}em`;

   const modalBody = document.getElementById('modalBody');
   modalBody.appendChild(img);
};

function createCloseButton() {
   const modalButton = document.getElementById('modalButton');
   modalButton.innerHTML = '';
   const buttonClose = document.createElement('button');
   buttonClose.className = 'cancelButton';
   buttonClose.innerText = 'Fechar';
   modalButton.appendChild(buttonClose);
};
