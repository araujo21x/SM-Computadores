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
   case 'pciExpress':
      answer = verifyPciExpress(piece);
      break;
   case 'nvme':
      answer = verifyNvme(piece);
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

const verifyMotherBoard = (piece) =>{

};

const verifyCpu = (piece) =>{

};

const verifyCooler = (piece) =>{

};

const verifyPciExpress = (piece) =>{

};

const verifyNvme = (piece) =>{

};

const verifyRom = (piece) =>{

};

const verifyRecorder = (piece) =>{

};

const verifyPowerSupply = (piece) =>{

};

