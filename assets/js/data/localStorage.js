/* exported getBuildingPC, setBuildingPC, deleteBuildingPC */

const getBuildingPC = () => {
   return JSON.parse(localStorage.getItem('buildingPC'));
};

const setBuildingPC = (piece, idDiv) => {
   let myPC = getBuildingPC();
   if (!myPC) myPC = generateBody();
   if (piece) {
      if (piece.type === 'ram')myPC = multipleSlots(piece, idDiv, myPC);
      else myPC[piece.type] = piece;
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
      pciExpress: null,
      powerSupply: null,
      energy: 0,
   };
};

const multipleSlots = (piece, idDiv, myPC) =>{
   if (piece.type === 'ram') {
      if (!myPC.ram) myPC.ram = [];
      myPC.ram.push({...piece, div: idDiv});
   }
   return myPC;
};

const deleteBuildingPC = (deletePiece) => {
   // eslint-disable-next-line prefer-const
   let myPC = getBuildingPC();

   switch (deletePiece.type) {
   case 'ram':
      myPC[deletePiece.type] = deleteArray(deletePiece, myPC);
      break;
   default:
      myPC[deletePiece.type] = null;
   }

   localStorage.setItem('buildingPC', JSON.stringify(myPC));
};

const deleteArray = (piece, myPC) =>{
   const anws = myPC[piece.type].filter((element) =>{
      piece.div = element.div;
      return JSON.stringify(element) !== JSON.stringify(piece);
   });
   if (anws.length === 0) return null;
   else return anws;
};
