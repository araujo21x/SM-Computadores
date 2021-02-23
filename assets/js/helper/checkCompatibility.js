/* exported  checkCompatibility, verifyTDP*/

const checkCompatibility = (piece) => {
   let answer;
   switch (piece.type) {
   case 'motherBoard':
      answer = verifyMotherBoard(piece);
      break;
   case 'cpu':
      answer = verifyCpu(piece);
      break;
   case 'cooler':
      answer = verifyCooler(piece);
      break;
   case 'ram':
      answer = verifyRam(piece);
      break;
   case 'pciExpress':
      answer = verifyPciExpress(piece);
      break;
   case 'rom':
      answer = verifyRom(piece);
      break;
   case 'm2':
      answer = verifyM2(piece);
      break;
   case 'recorder':
      answer = verifyRecorder(piece);
      break;
   case 'powerSupply':
      answer = verifyPowerSupply(piece);
      break;
   }

   if (answer === 'compatible' || answer === 'malfunction') {
      answer = verifyTDP(piece, answer);
   }
   return answer;
};

const verifyMotherBoard = (piece) => {
   return 'compatible';
};

const verifyCpu = (piece) => {
   const {
      motherBoard: {
         socket,
         chipset,
         memorySlotAmount,
         memorySizeSupport},
      ramMemory,
   } = getBuildingPC();

   let answer = 'compatible';

   if (socket !== piece.socket || chipset !== piece.chipset) {
      answer = 'incompatible';
   } else {
      if (memorySlotAmount !== piece.memorySupportAmountSlot) {
         answer = 'incompatible';
      } else {
         if (memorySizeSupport !== piece.memorySizeSupport) {
            answer = 'malfunction';
         }
      }
   }

   if (ramMemory > piece.memorySizeSupport) answer = 'incompatible';
   return answer;
};

const verifyCooler = (piece) => {
   return 'compatible';
};

const verifyRam = (piece) => {
   const {
      motherBoard:
      {memorySlotAmount,
         memorySlotType,
         memorySlotFrequency,
         memorySizeSupport,
      },
      cpu,
      ramMemory,
   } = getBuildingPC();

   let answer = 'compatible';
   if (memorySlotAmount === 0 || memorySlotType !== piece.memorySlotType) {
      answer = 'incompatible';
   } else if (memorySlotFrequency.includes(piece.memoryFrequency)) {
      answer = 'malfunction';
   } else {
      if ((ramMemory + piece.memorySize) > memorySizeSupport) {
         answer = 'malfunction';
      } else {
         if (cpu) {
            if ((ramMemory + piece.memorySize) > cpu.memorySizeSupport) {
               answer = 'malfunction';
            }
         }
      }
   }

   return answer;
};

const verifyPciExpress = (piece) => {
   const {motherBoard: {socketPCIE}} = getBuildingPC();
   const verifyType = socketPCIE.filter((element) => {
      return element.type === piece.PCIeType;
   });
   // aqui ela verifica se tem uma entrada PCIe do mesmo tipo ex: x16, x2
   if (verifyType.length === 0) {
      return 'incompatible';
   }

   // aqui ela verifica se tem uma versão de PCIe da mesma expelo: PCIe 2.0, 3.0
   const verifyVersion = verifyType.filter((element) => {
      return element.version === piece.PCIeVersion;
   });

   if (verifyVersion.length === 0) {
      return 'malfunction';
   } else {
      return 'compatible';
   }
};

const verifyRom = (piece) => {
   return 'compatible';
};

const verifyM2 = (piece) => {
   const {motherBoard: {hasSocketM2, socketM2}} = getBuildingPC();

   if (!hasSocketM2) {
      return 'incompatible';
   };

   const verifyTypeSockerM2 = socketM2.filter((element) => {
      return element.type.includes(piece.interface);
   });

   if (verifyTypeSockerM2.length === 0) {
      return 'incompatible';
   }

   return 'compatible';
};

const verifyRecorder = (piece) => {
   return 'compatible';
};

const verifyPowerSupply = (piece) => {
   const {currentTDP} = getBuildingPC();
   let answer = 'compatible';

   if (currentTDP > piece.wattage) answer = 'incompatible';

   const TDP = piece.wattage - currentTDP;
   if (TDP >= 0 && TDP <= 50) answer = 'malfunction';

   return answer;
};

const verifyTDP = (piece, currentStatus) => {
   const {currentTDP, powerSupply} = getBuildingPC();

   if (powerSupply) {
      if ((currentTDP + piece.TDP) > powerSupply.wattage) {
         currentStatus = 'incompatible';
      }
   }

   return currentStatus;
};
