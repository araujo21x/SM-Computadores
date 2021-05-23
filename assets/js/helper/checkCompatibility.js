import {getPCBuilding} from '../data/localStorage.js';

function verifyMotherBoard(part) {
   return 'compatible';
}

function verifyCpu(part) {
   const {
      motherBoard: {
         socket,
         chipset,
         memorySlotAmount,
         memorySizeSupport},
      ramMemory,
   } = getPCBuilding();

   let answer = 'compatible';

   if (socket !== part.socket || chipset !== part.chipset) {
      answer = 'incompatible';
   } else {
      if (memorySlotAmount !== part.memorySupportAmountSlot) {
         answer = 'incompatible';
      } else {
         if (memorySizeSupport !== part.memorySizeSupport) {
            answer = 'malfunction';
         }
      }
   }

   if (ramMemory > part.memorySizeSupport) answer = 'incompatible';
   return answer;
}

function verifyCooler(part) {
   let answer = 'compatible';
   const {
      cpu: {
         socket,
      },
   } = getPCBuilding();

   if (!part.compatibilityCpu.includes(socket)) {
      answer = 'incompatible';
   }
   return answer;
}

function verifyRam(part) {
   const {
      motherBoard:
      {memorySlotAmount,
         memorySlotType,
         memorySlotFrequency,
         memorySizeSupport,
      },
      cpu,
      ramMemory,
   } = getPCBuilding();

   let answer = 'compatible';
   if (memorySlotAmount === 0 || memorySlotType !== part.memorySlotType) {
      answer = 'incompatible';
   } else if (memorySlotFrequency.includes(part.memoryFrequency)) {
      answer = 'malfunction';
   } else {
      if ((ramMemory + part.memorySize) > memorySizeSupport) {
         answer = 'malfunction';
      } else {
         if (cpu) {
            if ((ramMemory + part.memorySize) > cpu.memorySizeSupport) {
               answer = 'malfunction';
            }
         }
      }
   }

   return answer;
}

function verifyPciExpress(part) {
   const {motherBoard: {socketPCIE}} = getPCBuilding();

   const verifyType = socketPCIE.filter((element) => {
      return element.type === part.PCIeType;
   });
   // aqui ela verifica se tem uma entrada PCIe do mesmo tipo ex: x16, x2
   if (verifyType.length === 0) {
      return 'incompatible';
   }

   // aqui ela verifica se tem uma versão de PCIe da mesma exemplo:
   // PCIe 2.0, 3.0
   const verifyVersion = verifyType.filter((element) => {
      return element.version === part.PCIeVersion;
   });

   if (verifyVersion.length === 0) {
      return 'malfunction';
   } else {
      return 'compatible';
   }
}

function verifyRom(part) {
   return 'compatible';
}

function verifyM2(part) {
   const {motherBoard: {hasSocketM2, socketM2}} = getPCBuilding();

   if (!hasSocketM2) {
      return 'incompatible';
   };

   const verifyTypeSockerM2 = socketM2.filter((element) => {
      return element.type.includes(part.format);
   });

   if (verifyTypeSockerM2.length === 0) {
      return 'incompatible';
   }

   return 'compatible';
}

function verifyRecorder(part) {
   return 'compatible';
}

function verifyPowerSupply(part) {
   const {currentTDP} = getPCBuilding();
   let answer = 'compatible';

   if (currentTDP > part.wattage) answer = 'incompatible';

   const TDP = part.wattage - currentTDP;
   if (TDP >= 0 && TDP <= 50) answer = 'malfunction';

   return answer;
}

export function verifyTDP(part, currentStatus) {
   const {currentTDP, powerSupply} = getPCBuilding();

   if (powerSupply) {
      if ((currentTDP + part.TDP) > powerSupply.wattage) {
         currentStatus = 'incompatible';
      }
   }

   return currentStatus;
}

export function checkCompatibility(part) {
   let answer;
   switch (part.type) {
   case 'motherBoard':
      answer = verifyMotherBoard(part);
      break;
   case 'cpu':
      answer = verifyCpu(part);
      break;
   case 'cooler':
      answer = verifyCooler(part);
      break;
   case 'ram':
      answer = verifyRam(part);
      break;
   case 'pciExpress':
      answer = verifyPciExpress(part);
      break;
   case 'rom':
      answer = verifyRom(part);
      break;
   case 'm2':
      answer = verifyM2(part);
      break;
   case 'recorder':
      answer = verifyRecorder(part);
      break;
   case 'powerSupply':
      answer = verifyPowerSupply(part);
      break;
   }

   if (answer === 'compatible' || answer === 'malfunction') {
      answer = verifyTDP(part, answer);
   }
   return answer;
}
