import {
   setModelDropZone,
   getPCBuilding,
   getCable,
} from './data/localStorage.js';
import resizeGrid from './helper/dropZone.js';
import {
   psuCable,
   recordCable,
   rom1cable,
   rom2cable,
} from './helper/cablingHelper.js';

// mother trade visual
function changeMotherAppearance(direction, displayRemaining) {
   const {motherBoard} = getPCBuilding();

   if (!motherBoard) {
      changeDisplay('flex', 'none', 'none');
   } else {
      // verificar se precisa colocar mesmo essa mother
      const mother = document.getElementById('mother');
      // eslint-disable-next-line max-len
      mother.style.background = `url(${motherBoard.image}) ${direction} / cover no-repeat`;
      changeDisplay('none', displayRemaining, 'grid');
   }
}

function changeDisplay(displayDropMother, displayRemaining, displayMother) {
   document.getElementById('motherBoard').style.display = displayDropMother;
   document.getElementById('powerSupply').style.display = displayRemaining;
   document.getElementById('recorder').style.display = displayRemaining;
   document.getElementById('rom_1').style.display = displayRemaining;
   document.getElementById('rom_2').style.display = displayRemaining;
   document.getElementById('recorderSlot').style.display = displayRemaining;
   document.getElementById('rom_1_Slot').style.display = displayRemaining;
   document.getElementById('rom_2_Slot').style.display = displayRemaining;
   document.getElementById('mother').style.display = displayMother;
}

export function pcMode() {
   const mother = document.getElementById('mother');
   mother.className = 'motherPcMode';
   changeMotherAppearance('left', 'inline');
   mother.style.backgroundSize = '80% 100%';

   setModelDropZone('pc');
   resizeGrid('pc');
   changeDisplayPlug('add');
   changeDisplayCable('inline');
}

export function motherboardMode() {
   const {motherBoard} = getPCBuilding();
   if (motherBoard) {
      const mother = document.getElementById('mother');
      mother.className = 'mother';
      changeMotherAppearance('center', 'none');
      mother.style.backgroundSize = '60% 100%';

      setModelDropZone('motherboard');
      resizeGrid('motherboard');
      changeDisplayPlug('remove');
      changeDisplayCable('none');
   }
}

function changeDisplayPlug(classStatus) {
   document.getElementById('plugSata01').classList[classStatus]('pc');
   document.getElementById('plugSata02').classList[classStatus]('pc');
   document.getElementById('plugSata03').classList[classStatus]('pc');
   document.getElementById('plugSata04').classList[classStatus]('pc');

   document.getElementById('plugPSU').classList[classStatus]('pc');
   document.getElementById('plugCooler').classList[classStatus]('pc');
   const pcBuild = getPCBuilding();
   if (classStatus === 'add') {
      if (pcBuild.recorder) {
         document.getElementById('plugRecord').style.display = 'inline';
      }
      pcBuild.rom.forEach((element) => {
         if (element.div === 'rom_1') {
            document.getElementById('plugRom1').style.display = 'inline';
         }
         if (element.div === 'rom_2') {
            document.getElementById('plugRom2').style.display = 'inline';
         }
      });
   } else {
      document.getElementById('plugRecord').style.display = 'none';
      document.getElementById('plugRom1').style.display = 'none';
      document.getElementById('plugRom2').style.display = 'none';
   }
}

function changeDisplayCable(displayStatus) {
   const {powerSupply, recorder} = getPCBuilding();
   const cables = getCable();
   if (powerSupply && cables.powerSupply) psuCable(displayStatus);
   if (powerSupply && recorder && cables.record) recordCable(displayStatus);
   if (cables.rom1) rom1cable(displayStatus);
   if (cables.rom2) rom2cable(displayStatus);
}

export function coolerZone(titleTab) {
   const {cpu, cooler} = getPCBuilding();
   const coolerSection = document.getElementById('cooler');

   if (cooler && cpu) coolerSection.style.display = 'inline';
   else {
      coolerSection.style.display = 'none';
      if (cpu && titleTab === 'coolerTab') {
         coolerSection.style.display = 'inline';
      }
   }
}
