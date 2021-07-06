import {setModelDropZone, getPCBuilding} from './data/localStorage.js';
import resizeGrid from './helper/dropZone.js';
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

   // test cable
   document.getElementById('plugRecord').style.display = displayRemaining;
   document.getElementById('plugRom1').style.display = displayRemaining;
   document.getElementById('plugRom2').style.display = displayRemaining;


   document.getElementById('plugRecord').style.display = displayRemaining;
}

export function pcMode() {
   const mother = document.getElementById('mother');
   mother.className = 'motherPcMode';
   changeMotherAppearance('left', 'inline');
   mother.style.backgroundSize = '80% 100%';

   setModelDropZone('pc');
   resizeGrid('pc');
   changeDisplayPlug('add');
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
   }
}

function changeDisplayPlug(classStatus) {
   document.getElementById('plugSata01').classList[classStatus]('pc');
   document.getElementById('plugSata02').classList[classStatus]('pc');
   document.getElementById('plugSata03').classList[classStatus]('pc');
   document.getElementById('plugSata04').classList[classStatus]('pc');

   document.getElementById('plugPSU').classList[classStatus]('pc');
   document.getElementById('plugCooler').classList[classStatus]('pc');
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
