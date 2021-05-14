/* eslint-disable max-len */
function ilMotherBoard(part) {
   const ul = document.createElement('ul');
   const liSocket = document.createElement('li');
   const liChipset = document.createElement('li');
   const liMemorySlotType = document.createElement('li');

   liSocket.innerHTML = `<strong>Socket:</strong> ${part.socket}`;
   liChipset.innerHTML = `<strong>Chipset:</strong> ${part.chipset}`;
   liMemorySlotType.innerHTML = `<strong>Memória:</strong> ${part.memorySlotType}`;

   ul.appendChild(liSocket);
   ul.appendChild(liChipset);
   ul.appendChild(liMemorySlotType);

   return ul;
}

function ilCpu(part) {
   const ul = document.createElement('ul');
   const liSocket = document.createElement('li');
   const liChipset = document.createElement('li');
   const liCore = document.createElement('li');

   liSocket.innerHTML = `<strong>Socket:</strong> ${part.socket}`;
   liChipset.innerHTML = `<strong>Chipset:</strong> ${part.chipset}`;
   liCore.innerHTML = `<strong>Núcleos:</strong> ${part.core}`;

   ul.appendChild(liSocket);
   ul.appendChild(liChipset);
   ul.appendChild(liCore);

   return ul;
}

function ilCooler(part) {
   const ul = document.createElement('ul');
   const liSpeedFan = document.createElement('li');
   const liFanAirflow = document.createElement('li');
   const liCompatibilityCpu = document.createElement('li');

   liSpeedFan.innerHTML = `<strong>Velocidade fan:</strong> ${part.speedFan} RPM`;
   liFanAirflow.innerHTML = `<strong>Fluxo de ar:</strong> ${part.fanAirflow} CFM`;
   if (part.compatibilityCpu.length > 1 ) liCompatibilityCpu.innerHTML = `<strong>Núcleos:</strong> ${part.compatibilityCpu[0]} ou ${part.compatibilityCpu[1]}`;
   else liCompatibilityCpu.innerHTML = `<strong>Núcleos:</strong> ${part.compatibilityCpu[0]}`;
   ul.appendChild(liSpeedFan);
   ul.appendChild(liFanAirflow);
   ul.appendChild(liCompatibilityCpu);

   return ul;
}

function ilRam(part) {
   const ul = document.createElement('ul');
   const liMemorySlotType = document.createElement('li');
   const liMemoryFrequency = document.createElement('li');
   const liMemorySize = document.createElement('li');

   liMemorySlotType.innerHTML = `<strong>Memória: </strong> ${part.memorySlotType}`;
   liMemoryFrequency.innerHTML = `<strong>Frequência: </strong> ${part.memoryFrequency} Mhz`;
   liMemorySize.innerHTML = `<strong>Tamanho: </strong> ${part.memorySize} GB`;

   ul.appendChild(liMemorySlotType);
   ul.appendChild(liMemoryFrequency);
   ul.appendChild(liMemorySize);

   return ul;
}

function ilPCIe(part) {
   const ul = document.createElement('ul');
   const liMemoryType = document.createElement('li');
   const liMemoryInterface = document.createElement('li');
   const liRecommendedPSU = document.createElement('li');

   liMemoryType.innerHTML = `<strong>Memória: </strong> ${part.memoryType}`;
   liMemoryInterface.innerHTML = `<strong>Interface: </strong> ${part.memoryInterface}`;
   liRecommendedPSU.innerHTML = `<strong>PSU recomendado: </strong> ${part.recommendedPSU} W`;

   ul.appendChild(liMemoryType);
   ul.appendChild(liMemoryInterface);
   ul.appendChild(liRecommendedPSU);

   return ul;
}

function ilRom(part) {
   const ul = document.createElement('ul');
   const liMemorySize = document.createElement('li');
   const liReading = document.createElement('li');
   const liWriting = document.createElement('li');
   if (part.memorySize >= 1) {
      liMemorySize.innerHTML = `<strong>Tamanho: </strong> ${part.memorySize} GB`;
   } else {
      liMemorySize.innerHTML = `<strong>Tamanho: </strong> ${part.memorySize * 1000} MB`;
   }
   liReading.innerHTML = `<strong>Leitura: </strong> ${part.reading}`;
   liWriting.innerHTML = `<strong>Escrita: </strong> ${part.writing}`;

   ul.appendChild(liMemorySize);
   ul.appendChild(liReading);
   ul.appendChild(liWriting);

   return ul;
}

function ilM2(part) {
   const ul = document.createElement('ul');
   const liMemorySize = document.createElement('li');
   const liReading = document.createElement('li');
   const liWriting = document.createElement('li');

   if (part.memorySize >= 1) {
      liMemorySize.innerHTML = `<strong>Tamanho: </strong> ${part.memorySize} GB`;
   } else {
      liMemorySize.innerHTML = `<strong>Tamanho: </strong> ${part.memorySize * 1000} MB`;
   }
   liReading.innerHTML = `<strong>Leitura: </strong> ${part.reading}`;
   liWriting.innerHTML = `<strong>Escrita: </strong> ${part.writing}`;

   ul.appendChild(liMemorySize);
   ul.appendChild(liReading);
   ul.appendChild(liWriting);

   return ul;
}

function ilRecorder() {
   const ul = document.createElement('ul');
   const li = document.createElement('li');
   li.innerHTML = `<strong>Entrada:</strong> SATA III`;
   ul.appendChild(li);

   return ul;
}

function ilPowerSupply(part) {
   const ul = document.createElement('ul');
   const liWattage = document.createElement('li');
   const liVoltage = document.createElement('li');

   liWattage.innerHTML = `<strong>Potência: </strong> ${part.wattage} W`;
   liVoltage.innerHTML = `<strong>Interface: </strong> ${part.voltage}`;

   ul.appendChild(liWattage);
   ul.appendChild(liVoltage);

   return ul;
}

export default function(part) {
   let partBoxInfo;

   switch (part.type) {
   case 'motherBoard':
      partBoxInfo = ilMotherBoard(part);
      break;
   case 'cpu':
      partBoxInfo = ilCpu(part);
      break;
   case 'cooler':
      partBoxInfo = ilCooler(part);
      break;
   case 'ram':
      partBoxInfo = ilRam(part);
      break;
   case 'pciExpress':
      partBoxInfo = ilPCIe(part);
      break;
   case 'rom':
      partBoxInfo = ilRom(part);
      break;
   case 'm2':
      partBoxInfo = ilM2(part);
      break;
   case 'recorder':
      partBoxInfo = ilRecorder();
      break;
   case 'powerSupply':
      partBoxInfo = ilPowerSupply(part);
      break;
   }

   return partBoxInfo;
}
