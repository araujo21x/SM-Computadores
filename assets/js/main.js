/* eslint-disable max-len */
import {setBuildingPC} from './data/localStorage.js';
import {disableTab} from './tab.js';
import {motherboardMode} from './visualHardware.js';
import {reset, generatePDF} from './helper/utils.js';
import {closeModal} from './modal.js';

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
   const body = document.getElementsByTagName('BODY')[0];

   const divModalContainer = document.createElement('div');
   divModalContainer.id = 'modal';
   divModalContainer.className = 'modalContainer';
   divModalContainer.addEventListener('click', function() {
      closeModal(event);
   });

   const divModal = document.createElement('div');
   divModal.className = 'modal';

   const buttonClose = document.createElement('button');
   buttonClose.className = 'close';
   buttonClose.innerText = 'X';
   divModal.appendChild(buttonClose);

   const h3Title = document.createElement('h3');
   h3Title.id = 'modalTitle';
   h3Title.className = 'modalTitle';
   divModal.appendChild(h3Title);

   const divModalBody = document.createElement('div');
   divModalBody.id = 'modalBody';
   divModalBody.className = 'modalBody';
   divModal.appendChild(divModalBody);

   const divModalButton = document.createElement('div');
   divModalButton.id = 'modalButton';
   divModalButton.className = 'modalButton';
   divModal.appendChild(divModalButton);

   divModalContainer.appendChild(divModal);

   body.appendChild(divModalContainer);
}

(function init() {
   generateSideMenu();
   generateDropZone();
   generateButtonsSideMenu();
   generateModal();
   setBuildingPC();

   const titleTabs = Array.from(document.getElementsByClassName('titleTab'));
   disableTab(titleTabs);

   motherboardMode();
   continueBuilding();
})();
