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

export function rom1PluggedDisable(psu, part) {
   const {rom} = getPCBuilding();
   const plugRom1 = document.getElementById('plugRom1');
   if (!romSlotVerify(rom, 'rom_1', part)) {
      plugRom1.classList.remove('plugged');
      setCable('rom1', false);
      rom1cable('none');
   }
   if (psu) {
      plugRom1.classList.remove('plugged');
      setCable('rom1', false);
      rom1cable('none');
   } else {
      if (romSlotVerify(rom, 'rom_1', part)) {
         plugRom1.style.display = 'none';
      }
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

export function rom2PluggedDisable(psu, part) {
   const {rom} = getPCBuilding();
   const plugRom2 = document.getElementById('plugRom2');
   if (!romSlotVerify(rom, 'rom_2', part)) {
      plugRom2.classList.remove('plugged');
      setCable('rom2', false);
      rom2cable('none');
   }
   if (psu) {
      plugRom2.classList.remove('plugged');
      setCable('rom2', false);
      rom2cable('none');
   } else {
      if (romSlotVerify(rom, 'rom_2', part)) {
         plugRom2.style.display = 'none';
      }
   }
}

export function romSlotVerify(rom, slot, part) {
   rom.forEach((element) => {
      if (element.div === slot ) return true;
   });
}
