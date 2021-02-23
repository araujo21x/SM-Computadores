/* exported getBuildingPC, setBuildingPC, deleteBuildingPC, getDropZone,
setDropZone, setModelDropZone */
const piecesMulti = ['ram', 'rom'];
const sizeSum = ['ram', 'rom', 'm2'];

const getBuildingPC = () => {
   return JSON.parse(localStorage.getItem('buildingPC'));
};

const setBuildingPC = (piece, idDiv) => {
   let myPC = getBuildingPC();

   if (!myPC) myPC = generateBody();
   if (piece) {
      if (piecesMulti.includes(piece.type)) {
         myPC = multipleSlots(piece, idDiv, myPC);
      } else {
         myPC[piece.type] = piece;
      }

      myPC.currentTDP = myPC.currentTDP + piece.TDP;
      if (sizeSum.includes(piece.type)) myPC = addSize(piece, myPC);
   }
   localStorage.setItem('buildingPC', JSON.stringify(myPC));
};

const generateBody = () => {
   return {
      motherBoard: null,
      cpu: null,
      cooler: null,
      ram: [],
      rom: [],
      m2: null,
      pciExpress: null,
      powerSupply: null,
      currentTDP: 0,
      ramMemory: 0,
      romMemory: 0,
   };
};

const multipleSlots = (piece, idDiv, myPC) => {
   if (!myPC[piece.type]) myPC[piece.type] = [];

   myPC[piece.type].push({...piece, div: idDiv});
   return myPC;
};

const deleteBuildingPC = (deletePiece) => {
   // eslint-disable-next-line prefer-const
   let myPC = getBuildingPC();
   if (piecesMulti.includes(deletePiece.type)) {
      myPC[deletePiece.type] = deleteArray(deletePiece, myPC);
   } else {
      console.log(deletePiece.type);
      myPC[deletePiece.type] = null;
      if (deletePiece.type === 'm2') {
         myPC.romMemory = myPC.romMemory - deletePiece.memorySize;
      }
   }

   myPC.currentTDP = myPC.currentTDP - deletePiece.TDP;

   localStorage.setItem('buildingPC', JSON.stringify(myPC));
};

const deleteArray = (piece, myPC) => {
   const answer = myPC[piece.type].filter((element) => {
      piece.div = element.div;

      if (JSON.stringify(element) === JSON.stringify(piece)) {
         if (piece.type === 'ram') {
            myPC.ramMemory = myPC.ramMemory - piece.memorySize;
         } else {
            myPC.romMemory = myPC.romMemory - piece.memorySize;
         }
      }

      return JSON.stringify(element) !== JSON.stringify(piece);
   });
   if (answer.length === 0) return [];
   else return answer;
};

const addSize = (piece, myPC) => {
   if (piece.type === 'ram') {
      myPC.ramMemory = myPC.ramMemory + piece.memorySize;
   } else {
      myPC.romMemory = myPC.romMemory + piece.memorySize;
   }

   return myPC;
};

const setDropZone = () => {
   const dropZone = {
      mode: 'motherboard',

      motherBoard: {
         cpu: {gridColumn: '88 / 113', gridRow: '40 / 75'},
         ram: [
            {div: 'ram_1', gridColumn: '133/137', gridRow: '17/99'},
            {div: 'ram_2', gridColumn: '138 / 142', gridRow: '17 / 99'},
         ],
         ramDocked: [
            {div: 'ram_1', gridColumn: '134 / 136', gridRow: '15 / 100'},
            {div: 'ram_2', gridColumn: '139 / 141', gridRow: '15 / 100'},
         ],
         m2: {gridColumn: '69 / 110', gridRow: '132 / 151'},
         pciExpress1: {gridColumn: '65 / 106', gridRow: '184 / 191'},
         pciExpress1Docked: {gridColumn: '41 / 150', gridRow: '178 / 194'},
         cooler: {gridColumn: '81 / 120', gridRow: '28 / 86'},
      },

      pc: {
         cpu: {gridColumn: '71 / 108', gridRow: '41 / 75'},
         ram: [
            {div: 'ram_1', gridColumn: '140 / 145', gridRow: '18 / 100'},
            {div: 'ram_2', gridColumn: '147 / 152', gridRow: '19 / 98'},
         ],
         ramDocked: [
            {div: 'ram_1', gridColumn: '141 / 144', gridRow: '18 / 100'},
            {div: 'ram_2', gridColumn: '148 / 151', gridRow: '18 / 100'},
         ],
         m2: {gridColumn: '44/ 103', gridRow: '132 / 149'},
         pciExpress1: {gridColumn: '37 / 99', gridRow: '181 / 188'},
         pciExpress1Docked: {gridColumn: '1 / 165', gridRow: '177 / 190'},
         cooler: {gridColumn: '61 / 119', gridRow: '29 / 86'},
      },
   };
   localStorage.setItem('dropZone', JSON.stringify(dropZone));
};

const getDropZone = () => {
   return JSON.parse(localStorage.getItem('dropZone'));
};

const setModelDropZone = (value) => {
   const dropZone = getDropZone();
   dropZone.mode = value;
   localStorage.setItem('dropZone', JSON.stringify(dropZone));
};
