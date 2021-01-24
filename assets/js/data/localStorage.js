/* exported getBuildingPC, setBuildingPC, deleteBuildingPC */

const getBuildingPC = () => {
   return JSON.parse(localStorage.getItem('buildingPC'));
};

const setBuildingPC = (piece, test) => {
   let myPC = getBuildingPC();
   if (!myPC) myPC = generateBody();
   // apagar essa verificação de test é so por causa da onLoadMain
   if (test) myPC = piece;
   else myPC[piece.type] = piece;
   localStorage.setItem('buildingPC', JSON.stringify(myPC));
};

const generateBody = () => {
   return {
      motherBoard: {},
      cpu: {},
      cooler: {},
      ram: {},
      rom: {},
      PCIe: {},
      powerSupply: {},
      energy: 0,
   };
};

const deleteBuildingPC = (deletePiece, type) => {
   let myPC;
   myPC = getBuildingPC();
   if (JSON.stringify(myPC[type]) === JSON.stringify(deletePiece)) {
      myPC[type] = {};
   }
   localStorage.setItem('buildingPC', JSON.stringify(myPC));
};
