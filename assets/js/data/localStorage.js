/* exported getBuildingPC, setBuildingPC, deleteBuildingPC */
const piecesMulti = ['ram', 'rom'];
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
   }
   localStorage.setItem('buildingPC', JSON.stringify(myPC));
};

const generateBody = () => {
   return {
      motherBoard: null,
      cpu: null,
      cooler: null,
      ram: null,
      rom: null,
      m2: null,
      pciExpress: null,
      powerSupply: null,
      energy: 0,
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
   }

   localStorage.setItem('buildingPC', JSON.stringify(myPC));
};

const deleteArray = (piece, myPC) => {
   const answer = myPC[piece.type].filter((element) => {
      piece.div = element.div;
      return JSON.stringify(element) !== JSON.stringify(piece);
   });
   if (answer.length === 0) return null;
   else return answer;
};
