/* eslint-disable max-len */
import {getPCBuilding, getCable} from '../data/localStorage.js';
import {motherboardMode} from '../visualHardware.js';
import {motherBoardSpecificity} from './partSpecificity.js';
import {creatTagImg} from '../components/partBox.js';
import {psuPlugged} from '../helper/cablingHelper.js';
import {activatePlug} from '../helper/plugHelper.js';


export default function() {
   const {
      motherBoard,
      cpu,
      cooler,
      ram,
      rom,
      m2,
      pciExpress,
      powerSupply,
      recorder,
   } = getPCBuilding();

   if (motherBoard) {
      motherBoardSpecificity(); // preciso fazer

      if (cpu) {
         checkPart(cpu, 'cpu');
         if (cooler) checkPartCooler(cooler, 'cooler');
      };
      if (powerSupply) {
         checkPart(powerSupply, 'powerSupply');
         activatePlug('plugPSU', 'inline');
      };
      if (pciExpress) checkPart(pciExpress, 'pciExpress_1');
      if (m2) checkPart(m2, 'm2');
      if (recorder) checkPart(recorder, 'recorder');
      if (ram) checkPartArray(ram);
      if (rom) checkPartArray(rom);
      continueCable();
      motherboardMode();
   }
}

function checkPart(part, id) {
   const divPart = document.getElementById(id);
   divPart.appendChild(creatTagImg(part.dropImage, part.name, part));
}

function checkPartArray(parts) {
   parts.map((item) => {
      const divPart = document.getElementById(item.div);
      divPart.appendChild(creatTagImg(item.dropImage, item.name, item));
   });
}

function checkPartCooler(cooler, id) {
   const divCooler = document.getElementById(id);
   divCooler.appendChild(creatTagImg(cooler.image, cooler.name, cooler));
   divCooler.style.display = 'inline';
}

function continueCable() {
   const {powerSupply,
      record,
      rom1,
      rom2,
      cooler,
      sata1,
      sata2,
      sata3,
      sata4,
   } = getCable();
   if (powerSupply) psuPlugged('plugPSU', 'inline');
   if (record) {
      const plugRecord = document.getElementById('plugRecord');
      plugRecord.classList.add('plugged');
   }
   if (rom1) {
      const plugRecord = document.getElementById('plugRom1');
      plugRecord.classList.add('plugged');
   }
   if (rom2) {
      const plugRecord = document.getElementById('plugRom2');
      plugRecord.classList.add('plugged');
   }
   if (cooler) {
      const coolerPlug = document.getElementById('plugCooler');
      coolerPlug.classList.add('plugged');
      coolerPlug.style.display = 'inline';
      document.getElementById('thread_mother_cooler_01').style.display = 'inline';
      document.getElementById('thread_mother_cooler_02').style.display = 'inline';
   }
   if (sata1) {
      document.getElementById('plugSata01').classList.add('plugged');
   }
   if (sata2) {
      document.getElementById('plugSata02').classList.add('plugged');
   }
   if (sata3) {
      document.getElementById('plugSata03').classList.add('plugged');
   }
   if (sata4) {
      document.getElementById('plugSata04').classList.add('plugged');
   }
}
