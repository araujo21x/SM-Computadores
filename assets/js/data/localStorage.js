/* exported getBuildingPC, setBuildingPC, deleteBuildingPC */

const getBuildingPC = () => {
   return JSON.parse(localStorage.getItem('buildingPC'));
};

const setBuildingPC = (piece, test) => {
   let myPC = getBuildingPC();
   console.log(myPC);
   if (!myPC) myPC = generateBody();
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
   let myPC;
   // eslint-disable-next-line prefer-const
   myPC = getBuildingPC();
   if (JSON.stringify(myPC[type]) === JSON.stringify(deletePiece)) {
      myPC[type] = {};
   }
   localStorage.setItem('buildingPC', JSON.stringify(myPC));
};
