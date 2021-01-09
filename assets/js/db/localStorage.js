/* exported getBuildingPC, setBuildingPC */

const getBuildingPC = () => {
   return JSON.parse(localStorage.getItem('buildingPC'));
};

const setBuildingPC = (newBuildingPc) => {
   localStorage.setItem('buildingPC', JSON.stringify(newBuildingPc));
};

