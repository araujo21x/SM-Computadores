/* eslint-disable max-len */
/* exported buildDivUl */
const buildDivUl = (piece) => {
   let divUl;

   switch (piece.type) {
   case 'motherBoard':
      divUl = ilMotherBoard(piece);
      break;
   case 'cpu':
      divUl = ilCpu(piece);
      break;
   case 'cooler':
      divUl = ilCooler(piece);
      break;
   case 'ram':
      divUl = ilRam(piece);
      break;
   case 'pciExpress':
      divUl = ilPCIe(piece);
      break;
   case 'rom':
      divUl = ilRom(piece);
      break;
   case 'm2':
      divUl = ilM2(piece);
      break;
   case 'recorder':
      divUl = ilRecorder();
      break;
   case 'powerSupply':
      divUl = ilPowerSupply(piece);
      break;
   }

   return divUl;
};

const ilMotherBoard = (piece) =>{
   const ul = document.createElement('ul');
   const liSocket = document.createElement('li');
   const liChipset = document.createElement('li');
   const liMemorySlotType = document.createElement('li');

   liSocket.innerHTML = `<strong>Socket:</strong> ${piece.socket}`;
   liChipset.innerHTML = `<strong>Chipset:</strong> ${piece.chipset}`;
   liMemorySlotType.innerHTML = `<strong>Memória:</strong> ${piece.memorySlotType}`;

   ul.appendChild(liSocket);
   ul.appendChild(liChipset);
   ul.appendChild(liMemorySlotType);

   return ul;
};

const ilCpu = (piece) =>{
   const ul = document.createElement('ul');
   const liSocket = document.createElement('li');
   const liChipset = document.createElement('li');
   const licore = document.createElement('li');

   liSocket.innerHTML = `<strong>Socket:</strong> ${piece.socket}`;
   liChipset.innerHTML = `<strong>Chipset:</strong> ${piece.chipset}`;
   licore.innerHTML = `<strong>Núcleos:</strong> ${piece.core}`;

   ul.appendChild(liSocket);
   ul.appendChild(liChipset);
   ul.appendChild(licore);

   return ul;
};

const ilCooler = (piece)=>{
   const ul = document.createElement('ul');
   const lispeedFan = document.createElement('li');
   const lifanAirflow = document.createElement('li');
   const liCompatibilityCpu = document.createElement('li');

   lispeedFan.innerHTML = `<strong>Velocidade fan:</strong> ${piece.speedFan} RPM`;
   lifanAirflow.innerHTML = `<strong>Fluxo de ar:</strong> ${piece.fanAirflow} CFM`;
   if (piece.compatibilityCpu.length > 1 ) liCompatibilityCpu.innerHTML = `<strong>Núcleos:</strong> ${piece.compatibilityCpu[0]} ou ${piece.compatibilityCpu[1]}`;
   else liCompatibilityCpu.innerHTML = `<strong>Núcleos:</strong> ${piece.compatibilityCpu[0]}`;
   ul.appendChild(lispeedFan);
   ul.appendChild(lifanAirflow);
   ul.appendChild(liCompatibilityCpu);

   return ul;
};

const ilRam = (piece)=>{
   const ul = document.createElement('ul');
   const liMemorySlotType = document.createElement('li');
   const liMemoryFrequency = document.createElement('li');
   const liMemorySize = document.createElement('li');

   liMemorySlotType.innerHTML = `<strong>Memória: </strong> ${piece.memorySlotType}`;
   liMemoryFrequency.innerHTML = `<strong>Frequência: </strong> ${piece.memoryFrequency} Mhz`;
   liMemorySize.innerHTML = `<strong>Tamanho: </strong> ${piece.memorySize} GB`;

   ul.appendChild(liMemorySlotType);
   ul.appendChild(liMemoryFrequency);
   ul.appendChild(liMemorySize);

   return ul;
};

const ilPCIe = (piece)=>{
   const ul = document.createElement('ul');
   const liMemoryType = document.createElement('li');
   const liMemoryInterface = document.createElement('li');
   const liRecommendedPSU = document.createElement('li');

   liMemoryType.innerHTML = `<strong>Memória: </strong> ${piece.memoryType}`;
   liMemoryInterface.innerHTML = `<strong>Interface: </strong> ${piece.memoryInterface}`;
   liRecommendedPSU.innerHTML = `<strong>PSU recomendado: </strong> ${piece.recommendedPSU} W`;

   ul.appendChild(liMemoryType);
   ul.appendChild(liMemoryInterface);
   ul.appendChild(liRecommendedPSU);

   return ul;
};

const ilRom = (piece)=>{
   const ul = document.createElement('ul');
   const liMemorySize = document.createElement('li');
   const liReading = document.createElement('li');
   const liWriting = document.createElement('li');
   if (piece.memorySize >= 1) {
      liMemorySize.innerHTML = `<strong>Tamanho: </strong> ${piece.memorySize} GB`;
   } else {
      liMemorySize.innerHTML = `<strong>Tamanho: </strong> ${piece.memorySize * 1000} MB`;
   }
   liReading.innerHTML = `<strong>Leitura: </strong> ${piece.reading}`;
   liWriting.innerHTML = `<strong>Escrita: </strong> ${piece.writing}`;

   ul.appendChild(liMemorySize);
   ul.appendChild(liReading);
   ul.appendChild(liWriting);

   return ul;
};

const ilM2 = (piece)=>{
   const ul = document.createElement('ul');
   const liMemorySize = document.createElement('li');
   const liReading = document.createElement('li');
   const liWriting = document.createElement('li');

   if (piece.memorySize >= 1) {
      liMemorySize.innerHTML = `<strong>Tamanho: </strong> ${piece.memorySize} GB`;
   } else {
      liMemorySize.innerHTML = `<strong>Tamanho: </strong> ${piece.memorySize * 1000} MB`;
   }
   liReading.innerHTML = `<strong>Leitura: </strong> ${piece.reading}`;
   liWriting.innerHTML = `<strong>Escrita: </strong> ${piece.writing}`;

   ul.appendChild(liMemorySize);
   ul.appendChild(liReading);
   ul.appendChild(liWriting);

   return ul;
};

const ilRecorder = ()=>{
   const ul = document.createElement('ul');
   const li = document.createElement('li');
   li.innerHTML = `<strong>Entrada:</strong> SATA III`;
   ul.appendChild(li);

   return ul;
};

const ilPowerSupply = (piece)=>{
   const ul = document.createElement('ul');
   const liWattage = document.createElement('li');
   const liVoltage = document.createElement('li');

   liWattage.innerHTML = `<strong>Potência: </strong> ${piece.wattage} W`;
   liVoltage.innerHTML = `<strong>Interface: </strong> ${piece.voltage}`;

   ul.appendChild(liWattage);
   ul.appendChild(liVoltage);

   return ul;
};
