/* exported  checkCompatibility*/
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
   case 'recorder':
      answer = verifyRecorder(piece);
      break;
   case 'powerSupply':
      answer = verifyPowerSupply(piece);
      break;
   }
   return answer;
};

const verifyMotherBoard = (piece) => {
   return 'compatible';
};

const verifyCpu = (piece) => {
   const {motherBoard: {socket, chipset}} = getBuildingPC();
   let answer = 'compatible';

   if (socket !== piece.socket || chipset !== piece.chipset) {
      answer = 'incompatible';
   };

   return answer;
};

const verifyCooler = (piece) => {
   return 'compatible';
};

const verifyRam = (piece) => {
   const {motherBoard:
      {memorySlotAmount, memorySlotType, memorySlotFrequency},
   } = getBuildingPC();

   let answer = 'compatible';
   if (memorySlotAmount === 0 || memorySlotType !== piece.memorySlotType) {
      answer = 'incompatible';
   } else if (memorySlotFrequency.includes(piece.memoryFrequency)) {
      answer = 'malfunction';
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
   let answer;
   switch (piece.typeSocket) {
   case 'M2':
      answer = verifyRomM2(piece);
      break;
   case 'SATA':
      answer = verifyRomSATA(piece);
      break;
   }

   return answer;
};

const verifyRecorder = (piece) => {
   return 'compatible';
};

const verifyPowerSupply = (piece) => {
   const {energy} = getBuildingPC();
   let answer = 'compatible';

   if (energy > piece.outputPower) {
      answer = 'incompatible';
   }

   if (energy === piece.outputPower) {
      answer = 'malfunction';
   }

   return answer;
};

const verifyRomM2 = (piece) => {
   const {motherBoard: {hasSocketM2, socketM2}} = getBuildingPC();

   if (!hasSocketM2) {
      return 'incompatible';
   };

   const verifyTypeSockerM2 = socketM2.filter((element) => {
      return element.type.include(piece.typeM2);
   });

   if (verifyTypeSockerM2.length === 0) {
      return 'incompatible';
   }

   return 'compatible';
};

const verifyRomSATA = (piece) => {
   return 'compatible';
};
