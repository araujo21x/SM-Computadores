import {getPCBuilding} from '../data/localStorage.js';
import {motherboardMode} from '../visualHardware.js';
import {motherBoardSpecificity} from './partSpecificity.js';
import {creatTagImg} from '../components/partBox.js';

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
      if (powerSupply) checkPart(powerSupply, 'powerSupply');
      if (pciExpress) checkPart(pciExpress, 'pciExpress_1');
      if (m2) checkPart(m2, 'm2');
      if (recorder) checkPart(recorder, 'recorder');
      if (ram) checkPartArray(ram);
      if (rom) checkPartArray(rom);
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
