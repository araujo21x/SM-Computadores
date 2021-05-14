import {getDropZone, getPCBuilding} from '../data/localStorage.js';
import {configGrid} from './utils.js';

export default function(mode) {
   switch (mode) {
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
}

function gridCpuMother() {
   const {motherBoard: {cpu}} = getDropZone();
   configGrid('cpu', cpu);
}

function gridCpuPC() {
   const {pc: {cpu}} = getDropZone();
   configGrid('cpu', cpu);
}

function gridCoolerMother() {
   const {motherBoard: {cooler}} = getDropZone();
   configGrid('cooler', cooler);
   const divCooler = document.getElementById('cooler');
   divCooler.style.zIndex = 2000;
}

function gridCoolerPC() {
   const {pc: {cooler}} = getDropZone();
   configGrid('cooler', cooler);
   const divCooler = document.getElementById('cooler');
   divCooler.style.zIndex = 2000;
}

function gridPCIMother() {
   const {pciExpress} = getPCBuilding();
   const {motherBoard: {pciExpress1, pciExpress1Docked}} = getDropZone();

   if (pciExpress) configGrid('pciExpress_1', pciExpress1Docked);
   else configGrid('pciExpress_1', pciExpress1);
}

function gridPCIPC() {
   const {pciExpress} = getPCBuilding();
   const {pc: {pciExpress1, pciExpress1Docked}} = getDropZone();

   if (pciExpress) configGrid('pciExpress_1', pciExpress1Docked);
   else configGrid('pciExpress_1', pciExpress1);
}

function gridRamMother() {
   const pc = getPCBuilding();
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
}

function gridRamPC() {
   const pc = getPCBuilding();
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
}

function gridM2Mother() {
   const {motherBoard: {hasSocketM2}} = getPCBuilding();
   if (hasSocketM2) {
      const {motherBoard: {m2}} = getDropZone();
      configGrid('m2', m2);
   }
}

function gridM2PC() {
   const {motherBoard: {hasSocketM2}} = getPCBuilding();
   if (hasSocketM2) {
      const {pc: {m2}} = getDropZone();
      configGrid('m2', m2);
   }
}
