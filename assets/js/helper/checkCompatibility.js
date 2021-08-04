/* eslint-disable max-len */
import {getPCBuilding} from '../data/localStorage.js';
import err from '../data/erroCompatibility.js';

function verifyMotherBoard(part) {
   return {situation: 'compatible', error: ''};
}

function verifyCpu(part) {
   const {
      motherBoard: {
         socket,
         memorySlotAmount,
         memorySizeSupport},
      ramMemory,
   } = getPCBuilding();

   let answer = {situation: 'compatible', error: ''};

   if (socket !== part.socket ) {
      answer = {situation: 'incompatible', error: err.cpu01};
   } else {
      if (memorySlotAmount !== part.memorySupportAmountSlot) {
         answer = {situation: 'malfunction', error: err.cpu02};
      } else {
         if (memorySizeSupport !== part.memorySizeSupport) {
            answer = {situation: 'malfunction', error: err.cpu03};
         }
      }
   }

   if (ramMemory > part.memorySizeSupport) {
      answer = {situation: 'incompatible', error: err.cpu04};
   } // confirmar se é incompatible ou malfunction
   return answer;
}

function verifyCooler(part) {
   let answer = {situation: 'compatible', error: ''};
   const {
      cpu: {
         socket,
      },
   } = getPCBuilding();

   if (!part.compatibilityCpu.includes(socket)) {
      answer = {situation: 'incompatible', error: err.cooler01};
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

   let answer = {situation: 'compatible', error: ''};

   if (memorySlotAmount === 0 || memorySlotType !== part.memorySlotType) {
      answer = {situation: 'incompatible', error: err.ram01};
   } else if (!memorySlotFrequency.includes(part.memoryFrequency)) {
      answer = {situation: 'malfunction', error: err.ram02};
   } else {
      if ((ramMemory + part.memorySize) > memorySizeSupport) {
         answer = {situation: 'malfunction', error: err.ram03};
      } else {
         if (cpu) {
            if ((ramMemory + part.memorySize) > cpu.memorySizeSupport) {
               answer = {situation: 'malfunction', error: err.ram04};
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
      return {situation: 'incompatible', error: err.pci01};
   }

   // aqui ela verifica se tem uma versão de PCIe da mesma exemplo:
   // PCIe 2.0, 3.0
   const verifyVersion = verifyType.filter((element) => {
      return element.version === part.PCIeVersion;
   });

   if (verifyVersion.length === 0) {
      return {situation: 'malfunction', error: err.pci02};
   } else {
      return {situation: 'compatible', error: ''};
   }
}

function verifyRom(part) {
   return {situation: 'compatible', error: ''};
}

function verifyM2(part) {
   const {motherBoard: {hasSocketM2, socketM2}} = getPCBuilding();

   if (!hasSocketM2) {
      return {situation: 'incompatible', error: err.m201};
   };

   const verifyTypeSocketM2 = socketM2.filter((element) => {
      return element.type.includes(part.format);
   });

   if (verifyTypeSocketM2.length === 0) {
      return {situation: 'incompatible', error: err.m202}; // verificar
   }

   return {situation: 'compatible', error: ''};
}

function verifyRecorder(part) {
   return {situation: 'compatible', error: ''};
}

function verifyPowerSupply(part) {
   const {currentTDP} = getPCBuilding();
   let answer = {situation: 'compatible', error: ''};

   if (currentTDP > part.wattage) answer = {situation: 'incompatible', error: err.psu01};

   const TDP = part.wattage - currentTDP;
   if (TDP >= 0 && TDP <= 50) answer = {situation: 'malfunction', error: err.psu02};

   return answer;
}

export function verifyTDP(part, currentStatus) {
   const {currentTDP, powerSupply} = getPCBuilding();

   if (powerSupply) {
      if ((currentTDP + part.TDP) > powerSupply.wattage) {
         currentStatus = {situation: 'incompatible', error: err.psu01};
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
