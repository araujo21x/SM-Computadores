/* exported  gridConfig*/
const gridConfig = (version) => {
   switch (version) {
   case 'motherboard':
      gridCpuMother();
      gridCoolerMother();
      gridPCIMother();
      gridRamMother();
      gridM2Mother();
      break;
   case 'pc':
      gridCpuPC();
      gridCoolerPC();
      gridPCIPC();
      gridRamPC();
      gridM2PC();
      break;
   }
};

const gridCpuMother = () => {
   const {motherBoard: {cpu}} = getDropZone();
   configGrid('cpu', cpu);
};

const gridCpuPC = () => {
   const {pc: {cpu}} = getDropZone();
   configGrid('cpu', cpu);
};

const gridCoolerMother = () => {
   const {motherBoard: {cooler}} = getDropZone();
   configGrid('cooler', cooler);
   const divCooler = document.getElementById('cooler');
   divCooler.style.zIndex = 2000;
};

const gridCoolerPC = () => {
   const {pc: {cooler}} = getDropZone();
   configGrid('cooler', cooler);
   const divCooler = document.getElementById('cooler');
   divCooler.style.zIndex = 2000;
};

const gridPCIMother = () => {
   const {pciExpress} = getBuildingPC();
   const {motherBoard: {pciExpress1, pciExpress1Docked}} = getDropZone();

   if (pciExpress) configGrid('pciExpress_1', pciExpress1Docked);
   else configGrid('pciExpress_1', pciExpress1);
};

const gridPCIPC = () => {
   const {pciExpress} = getBuildingPC();
   const {pc: {pciExpress1, pciExpress1Docked}} = getDropZone();

   if (pciExpress) configGrid('pciExpress_1', pciExpress1Docked);
   else configGrid('pciExpress_1', pciExpress1);
};

const gridRamMother = () => {
   const pc = getBuildingPC();
   const {motherBoard: {ram, ramDocked}} = getDropZone();

   ram.forEach((element) => {
      configGrid(element.div, element);
   });

   if (pc.ram.length > 0) {
      pc.ram.forEach((element) => {
         ramDocked.forEach((dockerGrid) => {
            if (element.div === dockerGrid.div) {
               configGrid(dockerGrid.div, dockerGrid);
            }
         });
      });
   }
};

const gridRamPC = () => {
   const pc = getBuildingPC();
   const {pc: {ram, ramDocked}} = getDropZone();

   ram.forEach((element) => {
      configGrid(element.div, element);
   });

   if (pc.ram.length > 0) {
      pc.ram.forEach((element) => {
         ramDocked.forEach((dockerGrid) => {
            if (element.div === dockerGrid.div) {
               configGrid(dockerGrid.div, dockerGrid);
            }
         });
      });
   }
};

const gridM2Mother = () =>{
   const {motherBoard: {hasSocketM2}} = getBuildingPC();
   if (hasSocketM2) {
      const {motherBoard: {m2}} = getDropZone();
      configGrid('m2', m2);
   }
};

const gridM2PC = () =>{
   const {motherBoard: {hasSocketM2}} = getBuildingPC();
   if (hasSocketM2) {
      const {pc: {m2}} = getDropZone();
      configGrid('m2', m2);
   }
};
