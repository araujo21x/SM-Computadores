/* eslint-disable max-len */
import {setBuildingPC} from './data/localStorage.js';
import {disableTab} from './tab.js';
import {motherboardMode} from './visualHardware.js';
import {reset, generatePDF} from './helper/utils.js';

import menuItens from './components/menuItens.js';
import menuData from './data/menuData.js';
import divDropZone, {dropZonePCDetails} from './components/divDropZone.js';
import buttonSideMenu from './components/buttonSideMenu.js';
import continueBuilding from './helper/continueBuilding.js';

function generateSideMenu() {
   menuItens(menuData.motherBoard.part, menuData.motherBoard.title, menuData.motherBoard.img);
   menuItens(menuData.cpu.part, menuData.cpu.title, menuData.cpu.img);
   menuItens(menuData.cooler.part, menuData.cooler.title, menuData.cooler.img);
   menuItens(menuData.ram.part, menuData.ram.title, menuData.ram.img);
   menuItens(menuData.pciExpress.part, menuData.pciExpress.title, menuData.pciExpress.img);
   menuItens(menuData.m2.part, menuData.m2.title, menuData.m2.img);
   menuItens(menuData.rom.part, menuData.rom.title, menuData.rom.img);
   menuItens(menuData.recorder.part, menuData.recorder.title, menuData.recorder.img);
   menuItens(menuData.psu.part, menuData.psu.title, menuData.psu.img);
}

function generateButtonsSideMenu() {
   const sectionButton = document.getElementById('optionsLateralMenu');
   buttonSideMenu('buttonFinish', generatePDF, 'fa-file-pdf', 'Gerar PDF', sectionButton);
   buttonSideMenu('buttonReset', reset, 'fa-power-off', 'Resetar', sectionButton);
}

function generateDropZone() {
   const partZone = document.getElementsByClassName('hardware');

   const divMother = document.createElement('div');
   divMother.id = 'mother';
   divMother.className = 'mother';
   divDropZone('cpu', null, divMother, false);
   divDropZone('cooler', null, divMother, false);
   divDropZone('ram_1', null, divMother, false);
   divDropZone('ram_2', null, divMother, false);
   divDropZone('ram_3', null, divMother, false);
   divDropZone('ram_4', null, divMother, false);
   divDropZone('pciExpress_1', null, divMother, false);
   divDropZone('m2', null, divMother, false);
   partZone[0].appendChild(divMother);

   divDropZone('powerSupply', 'powerSupplySlot', partZone[0], false);
   divDropZone('recorder', 'recorder', partZone[0], false);
   divDropZone('rom_1', 'rom1', partZone[0], false);
   divDropZone('rom_2', 'rom2', partZone[0], false);
   dropZonePCDetails('recorderSlot', 'recorderSlot', partZone[0]);
   dropZonePCDetails('rom_1_Slot', 'rom1Slot', partZone[0]);
   dropZonePCDetails('rom_2_Slot', 'rom2Slot', partZone[0]);

   divDropZone('motherBoard', 'dropMother', partZone[0], true);
}

function generateModal() {

}

(function init() {
   generateSideMenu();
   generateDropZone();
   generateButtonsSideMenu();
   setBuildingPC();

   const titleTabs = Array.from(document.getElementsByClassName('titleTab'));
   disableTab(titleTabs);

   motherboardMode();
   continueBuilding();
})();
