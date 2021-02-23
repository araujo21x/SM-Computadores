/* exported pcMode, motherboardMode, motherTrade, coolerZone */

const pcMode = () => {
   const mother = document.getElementById('mother');
   mother.className = 'motherPcMode';
   motherTradeVisual('left', 'inline');
   mother.style.backgroundSize = '90% 97%';

   setModelDropZone('pc');
   gridConfig('pc');
};

const motherboardMode = () => {
   const {motherBoard} = getBuildingPC();
   if (motherBoard) {
      const mother = document.getElementById('mother');
      mother.className = 'mother';
      motherTradeVisual('center', 'none');
      mother.style.backgroundSize = '60% 100%';

      setModelDropZone('motherboard');
      gridConfig('motherboard');
   }
};

const motherTradeVisual = (direction, displayRemaining) => {
   const {motherBoard} = getBuildingPC();

   if (!motherBoard) {
      tradeDisplay('flex', 'none', 'none');
   } else {
      // eslint-disable-next-line max-len
      mother.style.background = `url(${motherBoard.image}) ${direction} / cover no-repeat`;
      tradeDisplay('none', displayRemaining, 'grid');
   }
};

const tradeDisplay = (displayDropMother, displayRemaining, displayMother) => {
   const dropMother = document.getElementById('motherBoard');
   dropMother.style.display = displayDropMother;

   const powerSupplySlot = document.getElementById('powerSupply');
   powerSupplySlot.style.display = displayRemaining;

   const recorder = document.getElementById('recorder');
   recorder.style.display = displayRemaining;

   const rom1 = document.getElementById('rom_1');
   rom1.style.display = displayRemaining;

   const rom2 = document.getElementById('rom_2');
   rom2.style.display = displayRemaining;

   const recorderSlot = document.getElementById('recorderSlot');
   recorderSlot.style.display = displayRemaining;

   const rom1Slot = document.getElementById('rom_1_Slot');
   rom1Slot.style.display = displayRemaining;

   const rom2Slot = document.getElementById('rom_2_Slot');
   rom2Slot.style.display = displayRemaining;

   const mother = document.getElementById('mother');
   mother.style.display = displayMother;
};

const coolerZone = (titleTab) => {
   const {cpu, cooler} = getBuildingPC();
   const coolerSection = document.getElementById('cooler');

   if (cooler && cpu) coolerSection.style.display = 'inline';
   else {
      coolerSection.style.display = 'none';
      if (cpu && titleTab === 'coolerTab') {
         coolerSection.style.display = 'inline';
      }
   }
};
