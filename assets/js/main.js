/* eslint-disable max-len */
import {setBuildingPC, setEvaluativeMode} from './data/localStorage.js';
import {disableTab} from './tab.js';
import {motherboardMode} from './visualHardware.js';
import {loading} from './helper/utils.js';
import {closeModal} from './modal.js';
import {closeAlert} from './alert.js';

import menuItens from './components/menuItens.js';
import menuData from './data/menuData.js';
import divDropZone, {dropZonePCDetails} from './components/divDropZone.js';
import buttonSideMenu from './components/buttonSideMenu.js';
import continueBuilding from './helper/continueBuilding.js';
import {
   psuPlugged,
   recordPlugged,
   rom1Plugged,
   rom2Plugged,
   coolerPlugged,
} from './helper/cablingHelper.js';

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
   buttonSideMenu('buttonFinish', 'confirm', 'fa-file-pdf', 'Gerar PDF', sectionButton);
   buttonSideMenu('buttonReset', 'confirmDanger', 'fa-power-off', 'Resetar', sectionButton);
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

   // test cable
   divDropZone('plugPSU', 'plugPSU', divMother, false);

   divDropZone('plugSata01', 'plugSata01', divMother, false);
   divDropZone('plugSata02', 'plugSata02', divMother, false);
   divDropZone('plugSata03', 'plugSata03', divMother, false);
   divDropZone('plugSata04', 'plugSata04', divMother, false);

   divDropZone('plugCooler', 'plugCooler', divMother, false);

   partZone[0].appendChild(divMother);

   divDropZone('powerSupply', 'powerSupplySlot', partZone[0], false);
   divDropZone('recorder', 'recorder', partZone[0], false);
   divDropZone('rom_1', 'rom1', partZone[0], false);
   divDropZone('rom_2', 'rom2', partZone[0], false);

   dropZonePCDetails('recorderSlot', 'recorderSlot', partZone[0]);
   dropZonePCDetails('rom_1_Slot', 'rom1Slot', partZone[0]);
   dropZonePCDetails('rom_2_Slot', 'rom2Slot', partZone[0]);
   dropZonePCDetails('plugRecord', 'plugRecord', partZone[0]);
   dropZonePCDetails('plugRom1', 'plugRom1', partZone[0]);
   dropZonePCDetails('plugRom2', 'plugRom2', partZone[0]);

   // test cable thread
   generateThread(partZone[0]);

   const plugPSU = document.getElementById('plugPSU');
   const plugRecord = document.getElementById('plugRecord');
   const plugRom1 = document.getElementById('plugRom1');
   const plugRom2 = document.getElementById('plugRom2');
   const plugCooler = document.getElementById('plugCooler');

   plugCooler.addEventListener('click', () =>{
      coolerPlugged('inline');
   });

   plugPSU.addEventListener('click', () =>{
      psuPlugged('inline');
   });

   plugRecord.addEventListener('click', () =>{
      recordPlugged();
   });

   plugRom1.addEventListener('click', () =>{
      rom1Plugged();
   });

   plugRom2.addEventListener('click', () =>{
      rom2Plugged();
   });

   divDropZone('motherBoard', 'dropMother', partZone[0], true);
}

function generateThread(partZone) {
   dropZonePCDetails('thread_psu_mother_01', 'thread_psu_mother_01_01', partZone);
   dropZonePCDetails('thread_psu_mother_02', 'thread_psu_mother_01_02', partZone);
   dropZonePCDetails('thread_psu_mother_03', 'thread_psu_mother_01_03', partZone);
   dropZonePCDetails('thread_psu_mother_04', 'thread_psu_mother_02_01', partZone);
   dropZonePCDetails('thread_psu_mother_05', 'thread_psu_mother_02_02', partZone);
   dropZonePCDetails('thread_psu_mother_06', 'thread_psu_mother_02_03', partZone);
   dropZonePCDetails('thread_psu_mother_07', 'thread_psu_mother_03_01', partZone);
   dropZonePCDetails('thread_psu_mother_08', 'thread_psu_mother_03_02', partZone);
   dropZonePCDetails('thread_psu_mother_09', 'thread_psu_mother_03_03', partZone);
   dropZonePCDetails('thread_psu_mother_10', 'thread_psu_mother_04_01', partZone);
   dropZonePCDetails('thread_psu_mother_11', 'thread_psu_mother_04_02', partZone);
   dropZonePCDetails('thread_psu_mother_12', 'thread_psu_mother_04_03', partZone);
   dropZonePCDetails('thread_psu_mother_13', 'thread_psu_mother_05_01', partZone);
   dropZonePCDetails('thread_psu_mother_14', 'thread_psu_mother_05_02', partZone);
   dropZonePCDetails('thread_psu_mother_15', 'thread_psu_mother_05_03', partZone);
   dropZonePCDetails('thread_psu_mother_16', 'thread_psu_mother_06_01', partZone);
   dropZonePCDetails('thread_psu_mother_17', 'thread_psu_mother_06_02', partZone);
   dropZonePCDetails('thread_psu_mother_18', 'thread_psu_mother_06_03', partZone);
   dropZonePCDetails('thread_psu_mother_19', 'thread_psu_mother_07_01', partZone);
   dropZonePCDetails('thread_psu_mother_20', 'thread_psu_mother_07_02', partZone);
   dropZonePCDetails('thread_psu_mother_21', 'thread_psu_mother_07_03', partZone);
   dropZonePCDetails('thread_psu_mother_22', 'thread_psu_mother_08_01', partZone);
   dropZonePCDetails('thread_psu_mother_23', 'thread_psu_mother_08_02', partZone);
   dropZonePCDetails('thread_psu_mother_24', 'thread_psu_mother_08_03', partZone);
   dropZonePCDetails('thread_psu_mother_25', 'thread_psu_mother_09_01', partZone);
   dropZonePCDetails('thread_psu_mother_26', 'thread_psu_mother_09_02', partZone);
   dropZonePCDetails('thread_psu_mother_27', 'thread_psu_mother_09_03', partZone);
   dropZonePCDetails('thread_psu_mother_28', 'thread_psu_mother_10_01', partZone);
   dropZonePCDetails('thread_psu_mother_29', 'thread_psu_mother_10_02', partZone);
   dropZonePCDetails('thread_psu_mother_30', 'thread_psu_mother_10_03', partZone);


   dropZonePCDetails('thread_psu_sata_01', 'thread_psu_sata_03_01', partZone);
   dropZonePCDetails('thread_psu_sata_02', 'thread_psu_sata_03_02', partZone);
   dropZonePCDetails('thread_psu_sata_03', 'thread_psu_sata_03_03', partZone);
   dropZonePCDetails('thread_psu_sata_04', 'thread_psu_sata_04_01', partZone);
   dropZonePCDetails('thread_psu_sata_05', 'thread_psu_sata_04_02', partZone);
   dropZonePCDetails('thread_psu_sata_06', 'thread_psu_sata_04_03', partZone);
   dropZonePCDetails('thread_psu_sata_07', 'thread_psu_sata_05_01', partZone);

   dropZonePCDetails('thread_mother_sata_01_01_01', 'thread_mother_sata_01_01_01', partZone);
   dropZonePCDetails('thread_mother_sata_01_01_02', 'thread_mother_sata_01_01_02', partZone);
   dropZonePCDetails('thread_mother_sata_01_01_03', 'thread_mother_sata_01_01_03', partZone);
   dropZonePCDetails('thread_mother_sata_01_01_04', 'thread_mother_sata_01_01_04', partZone);

   dropZonePCDetails('thread_mother_sata_01_02_01', 'thread_mother_sata_01_02_01', partZone);
   dropZonePCDetails('thread_mother_sata_01_02_02', 'thread_mother_sata_01_02_02', partZone);
   dropZonePCDetails('thread_mother_sata_01_02_03', 'thread_mother_sata_01_02_03', partZone);
   dropZonePCDetails('thread_mother_sata_01_02_04', 'thread_mother_sata_01_02_04', partZone);

   dropZonePCDetails('thread_mother_sata_01_03_01', 'thread_mother_sata_01_03_01', partZone);
   dropZonePCDetails('thread_mother_sata_01_03_02', 'thread_mother_sata_01_03_02', partZone);
   dropZonePCDetails('thread_mother_sata_01_03_03', 'thread_mother_sata_01_03_03', partZone);
   dropZonePCDetails('thread_mother_sata_01_03_04', 'thread_mother_sata_01_03_04', partZone);

   dropZonePCDetails('thread_mother_sata_01_04_01', 'thread_mother_sata_01_04_01', partZone);
   dropZonePCDetails('thread_mother_sata_01_04_02', 'thread_mother_sata_01_04_02', partZone);
   dropZonePCDetails('thread_mother_sata_01_04_03', 'thread_mother_sata_01_04_03', partZone);
   dropZonePCDetails('thread_mother_sata_01_04_04', 'thread_mother_sata_01_04_04', partZone);

   dropZonePCDetails('thread_mother_cooler_01', 'thread_mother_cooler_01', partZone);
   dropZonePCDetails('thread_mother_cooler_02', 'thread_mother_cooler_02', partZone);
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

function generateAlertBase() {
   const body = document.getElementsByTagName('BODY')[0];

   const divAlertContainer = document.createElement('div');
   divAlertContainer.id = 'alert';
   divAlertContainer.className = 'alertContainer';
   divAlertContainer.addEventListener('click', function() {
      closeAlert(event);
   });

   const divAlert = document.createElement('div');
   divAlert.className = 'alert';

   const divAlertTitle = document.createElement('div');
   divAlertTitle.id = 'alertTitle';
   divAlertTitle.className = 'alertTitle';
   divAlert.appendChild(divAlertTitle);

   const divAlertBody = document.createElement('div');
   divAlertBody.id = 'alertBody';
   divAlertBody.className = 'alertBody';
   divAlert.appendChild(divAlertBody);

   const divAlertButton = document.createElement('div');
   divAlertButton.id = 'alertButton';
   divAlertButton.className = 'alertButton';
   divAlert.appendChild(divAlertButton);

   divAlertContainer.appendChild(divAlert);
   body.appendChild(divAlertContainer);
}


(function init() {
   loading(true);
   setEvaluativeMode(false);
   generateSideMenu();
   generateDropZone();
   generateButtonsSideMenu();
   generateModal();
   generateAlertBase();
   setBuildingPC();

   const titleTabs = Array.from(document.getElementsByClassName('titleTab'));
   disableTab(titleTabs);

   motherboardMode();
   continueBuilding();
   loading(false);
})();
