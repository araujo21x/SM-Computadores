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

const setDropZone = async (id) => {
   const grids = await getGrids(id);
   const dropZone = {
      mode: 'motherboard',
      ...grids,
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
