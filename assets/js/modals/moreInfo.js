/* exported createModalMoreInfo */
const createModalMoreInfo = (piece) => {
   switch (piece.type) {
   case 'motherBoard':
      motherBoardInfo(piece);
      break;
   case 'cpu':
      cpuInfo(piece);
      break;
   case 'cooler':
      coolerInfo(piece);
      break;
   case 'ram':
      ramInfo(piece);
      break;
   case 'pciExpress':
      pciExpressInfo(piece);
      break;
   case 'rom':
      romInfo(piece);
      break;
   case 'm2':
      m2Info(piece);
      break;
   case 'recorder':
      recorderInfo(piece);
      break;
   case 'powerSupply':
      powerSupplyInfo(piece);
      break;
   }
};

const motherBoardInfo = (piece) => {
   const modalBody = document.getElementById('modalBody');
   modalBody.innerHTML = '';
   const ul = document.createElement('ul');
   ul.className = 'moreInfoUl';

   createTitle(piece.name);
   createImg(piece.image, '17', '12');

   ul.appendChild(createLi('Chipset', piece.chipset));
   ul.appendChild(createLi('Socket', piece.socket));
   if (piece.hasSocketM2) ul.appendChild(createLi('Suporte M2', 'Possui'));
   else ul.appendChild(createLi('Suporte M2', 'Não Possui'));
   ul.appendChild(createLi('Limite maximo de Ram',
      `${piece.memorySizeSupport} GB`));
   ul.appendChild(createLi('Quantidade de slots de memória',
      piece.memorySlotAmount));
   ul.appendChild(createLi('Tipo de slot de memória', piece.memorySlotType));
   ul.appendChild(createLiArray('Frequências de memória suportadas',
      piece.memorySlotFrequency, 'frequency'));

   modalBody.appendChild(ul);
};

const cpuInfo = (piece) => {
   const modalBody = document.getElementById('modalBody');
   modalBody.innerHTML = '';
   const ul = document.createElement('ul');
   ul.className = 'moreInfoUl';

   createTitle(piece.name);
   createImg(piece.image, '9', '9');

   ul.appendChild(createLi('Chipset', piece.chipset));
   ul.appendChild(createLi('Socket', piece.socket));
   ul.appendChild(createLi('Limite maximo de Ram',
      `${piece.memorySizeSupport} GB`));
   ul.appendChild(createLi('Limite de slots de memória',
      piece.memorySupportAmountSlot));
   ul.appendChild(createLiArray('Frequencia de memória suportada',
      piece.memorySupportFrequency, 'frequency'));
   ul.appendChild(createLi('Frequência mínima de clock',
      `${piece.baseClockSpeed} GHz`));
   ul.appendChild(createLi('Frequência máxima de clock',
      `${piece.maximumBoostSpeed} GHz`));
   ul.appendChild(createLi('Cache', `${piece.cache} MB`));
   ul.appendChild(createLi('Core', piece.core));
   ul.appendChild(createLi('Threads', piece.threads));
   ul.appendChild(createLi('Processador gráfico', piece.graphicsProcessor));

   modalBody.appendChild(ul);
};

const coolerInfo = (piece) => {
   const modalBody = document.getElementById('modalBody');
   modalBody.innerHTML = '';
   const ul = document.createElement('ul');
   ul.className = 'moreInfoUl';

   createTitle(piece.name);
   createImg(piece.image, '10', '10');

   ul.appendChild(createLiArray('Sockets Suportados', piece.compatibilityCpu));
   ul.appendChild(createLi('Velocidade do Fan', `${piece.speedFan} RPM`));
   ul.appendChild(createLi('Máximo fluxo de ar do fan',
      `${piece.fanAirflow} CFM`));

   modalBody.appendChild(ul);
};

const ramInfo = (piece) => {
   const modalBody = document.getElementById('modalBody');
   modalBody.innerHTML = '';
   const ul = document.createElement('ul');
   ul.className = 'moreInfoUl';

   createTitle(piece.name);
   createImg(piece.image, '20', '6');

   ul.appendChild(createLi('Frequencia da Memória',
      `${piece.memoryFrequency} MHz`));
   ul.appendChild(createLi('Tamanho de Memória', `${piece.memorySize} GB`));
   ul.appendChild(createLi('Tipo de slot', `${piece.memorySlotType}`));

   modalBody.appendChild(ul);
};

const pciExpressInfo = (piece) => {
   const modalBody = document.getElementById('modalBody');
   modalBody.innerHTML = '';
   const ul = document.createElement('ul');
   ul.className = 'moreInfoUl';
   console.log(piece);
   createTitle(piece.name);
   createImg(piece.image, '20', '10');

   ul.appendChild(createLi('PCI Express', piece.PCIeType));
   ul.appendChild(createLi('PCI Express Versão', piece.PCIeVersion));
   ul.appendChild(createLi('GPU base clock', `${piece.baseClock} MHz`));
   ul.appendChild(createLi('GPU boost clock', `${piece.boostClock} MHz`));
   ul.appendChild(createLi('CUDA core', piece.CUDACore));

   ul.appendChild(createLi('Interface de memória', piece.memoryInterface));
   ul.appendChild(createLi('Tamanho de memória', `${piece.memorySize} GB`));
   ul.appendChild(createLi('Velocidade de memória', piece.memorySpeed));
   ul.appendChild(createLi('Tipo de memória', piece.memoryType));

   modalBody.appendChild(ul);
};

const romInfo = (piece) => {
   const modalBody = document.getElementById('modalBody');
   modalBody.innerHTML = '';
   const ul = document.createElement('ul');
   ul.className = 'moreInfoUl';

   createTitle(piece.name);
   createImg(piece.image, '15', '8');

   ul.appendChild(createLi('Tamanho da memória', `${piece.memorySize} GB`));
   ul.appendChild(createLi('Velocidade de leitura', piece.reading));
   ul.appendChild(createLi('Velocidade de escrita', piece.writing));
   if (piece.rotation) {
      ul.appendChild(createLi('Rotação', `${piece.rotation} RPM`));
   }


   modalBody.appendChild(ul);
};

const m2Info = (piece) => {
   const modalBody = document.getElementById('modalBody');
   modalBody.innerHTML = '';
   const ul = document.createElement('ul');
   ul.className = 'moreInfoUl';

   createTitle(piece.name);
   createImg(piece.image, '17', '5');

   ul.appendChild(createLi('Interface', piece.format));
   ul.appendChild(createLi('Tamanho de memória', `${piece.memorySize} GB`));
   ul.appendChild(createLi('Formato', piece.model));
   ul.appendChild(createLi('Velocidade de leitura', piece.reading));
   ul.appendChild(createLi('Velocidade de escrita ', piece.writing));

   modalBody.appendChild(ul);
};

const recorderInfo = (piece) => {
   const modalBody = document.getElementById('modalBody');
   modalBody.innerHTML = '';
   const ul = document.createElement('ul');
   ul.className = 'moreInfoUl';
   console.log(piece);
   createTitle(piece.name);
   createImg(piece.image, '15', '10');

   modalBody.appendChild(ul);
};

const powerSupplyInfo = (piece) => {
   const modalBody = document.getElementById('modalBody');
   modalBody.innerHTML = '';
   const ul = document.createElement('ul');
   ul.className = 'moreInfoUl';

   createTitle(piece.name);
   createImg(piece.image, '15', '10');

   ul.appendChild(createLi('Voltagem', piece.voltage));
   ul.appendChild(createLi('Capacidade de saída', `${piece.wattage} W`));

   modalBody.appendChild(ul);
};

const createLi = (subTitle, info) => {
   const p = document.createElement('p');
   const li = document.createElement('li');

   p.innerText = subTitle;
   li.appendChild(p);
   li.innerHTML = `${li.innerHTML} = ${info}`;
   return li;
};

const createLiArray = (subTitle, info, type) => {
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

const createTitle = (title) => {
   const modalTitle = document.getElementById('modalTitle');
   modalTitle.innerText = title;
};

const createImg = (image, width, height) => {
   const img = document.createElement('img');
   img.src = image;
   console.log(image);
   img.style.marginRight = 'auto';
   img.style.marginLeft = 'auto';
   img.style.display = 'block';
   img.style.width = `${width}em`;
   img.style.height = `${height}em`;

   const modalBody = document.getElementById('modalBody');
   modalBody.appendChild(img);
};
