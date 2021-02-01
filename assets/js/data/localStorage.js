/* exported getBuildingPC, setBuildingPC, deleteBuildingPC */

const getBuildingPC = () => {
   return JSON.parse(localStorage.getItem('buildingPC'));
};

const setBuildingPC = (piece) => {
   let myPC = getBuildingPC();
   if (!myPC) myPC = generateBody();
   if (piece) {
      myPC[piece.type] = piece;
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
      PCIe: null,
      powerSupply: null,
      energy: 0,
   };
};

const deleteBuildingPC = (deletePiece, type) => {
   // eslint-disable-next-line prefer-const
   let myPC = getBuildingPC();
   console.log(`deletePiece: ${deletePiece}`);
   console.log(`type: ${type}`);
   if (JSON.stringify(myPC[type]) === JSON.stringify(deletePiece)) {
      myPC[type] = null;
   }
   localStorage.setItem('buildingPC', JSON.stringify(myPC));
};
