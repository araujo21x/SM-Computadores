import {setCable, getPCBuilding} from '../data/localStorage.js';

export function psuPlugged(display) {
   const plugPSU = document.getElementById('plugPSU');

   if (display === 'none') {
      setCable('powerSupply', false);
      plugPSU.classList.remove('plugged');
   } else {
      setCable('powerSupply', true);
      plugPSU.classList.add('plugged');
   }


   if (plugPSU.classList.length === 3 || display === 'none') psuCable(display);
}

export function psuCable(display) {
   for (let x = 1; x <= 30; x++) {
      const elementCable = document.
         getElementById(`thread_psu_mother_${x < 10 ? `0${x}` : x}`);
      elementCable.style.display = display;
   }
}

export function recordPlugged() {
   const {powerSupply} = getPCBuilding();
   const plugRecord = document.getElementById('plugRecord');

   if (powerSupply) {
      setCable('record', true);
      plugRecord.classList.add('plugged');
      recordCable('inline');
   }
}

export function recordPluggedDisable() {
   recordCable('none');

   const plugRecord = document.getElementById('plugRecord');
   plugRecord.classList.remove('plugged');
   setCable('record', false);

   const {recorder} = getPCBuilding();
   if (!recorder) plugRecord.style.display = 'none';
   recordCable('none');
}

export function recordCable(display) {
   const recordThread = document.getElementById('thread_psu_sata_07');
   recordThread.style.display = display;
}

export function rom1Plugged() {
   const {powerSupply} = getPCBuilding();
   const plugRom1 = document.getElementById('plugRom1');

   if (powerSupply) {
      setCable('rom1', true);
      plugRom1.classList.add('plugged');
      rom1cable('inline');
   }
}

export function rom1cable(display) {
   for (let x = 4; x <= 6; x++) {
      const elementCable = document.
         getElementById(`thread_psu_sata_0${x}`);
      elementCable.style.display = display;
   }
}

export function rom2Plugged() {
   const {powerSupply} = getPCBuilding();
   const plugRom2 = document.getElementById('plugRom2');

   if (powerSupply) {
      setCable('rom2', true);
      plugRom2.classList.add('plugged');
      rom2cable('inline');
   }
}

export function rom2cable(display) {
   for (let x = 1; x <= 3; x++) {
      const elementCable = document.
         getElementById(`thread_psu_sata_0${x}`);
      elementCable.style.display = display;
   }
}

export function romPluggedDisable(psu, part) {
   const {rom} = getPCBuilding();
   if (psu) {
      document.getElementById('plugRom1').classList.remove('plugged');
      document.getElementById('plugRom2').classList.remove('plugged');
      setCable('rom1', false);
      rom1cable('none');
      setCable('rom2', false);
      rom2cable('none');
   } else {
      const romRemove = romSlotVerify(rom, part);
      if (romRemove === 'rom_1') {
         document.getElementById('plugRom1').classList.remove('plugged');
         setCable('rom1', false);
         rom1cable('none');
         document.getElementById('plugRom1').style.display = 'none';
      }
      if (romRemove === 'rom_2') {
         document.getElementById('plugRom2').classList.remove('plugged');
         setCable('rom2', false);
         rom2cable('none');
         document.getElementById('plugRom2').style.display = 'none';
      }
   }
}

export function romSlotVerify(rom, part) {
   let answer;
   rom.forEach((element) => {
      if (element.id === part.id ) answer = element.div;
   });
   return answer;
}

export function coolerPlugged(display) {
   document.getElementById('thread_mother_cooler_01').style.display = display;
   document.getElementById('thread_mother_cooler_02').style.display = display;
   if (display === 'inline') {
      setCable('cooler', true);
      document.getElementById('plugCooler').classList.add('plugged');
   } else {
      setCable('cooler', false);
   }
}
