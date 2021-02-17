/* exported pcMode, motherboardMode, motherTrade, coolerZone */

const pcMode = () => {
   const mother = document.getElementById('mother');
   mother.className = 'motherPcMode';
   motherTradeVisual('left', 'inline');
   mother.style.backgroundSize = '90% 97%';

   const cpu = document.getElementById('cpu');
   cpu.className = 'cpuPcMode';

   const cooler = document.getElementById('cooler');
   cooler.className = 'coolerPcMode';
   const {pciExpress, ram} = getBuildingPC();
   const ram1 = document.getElementById('ram_1');
   ram1.className = 'ram1PcMode';

   const ram2 = document.getElementById('ram_2');
   ram2.className = 'ram2PcMode';

   if (!ram.length > 0) {
      ram.forEach((element) => {
         ramSpecificity(element.div, element.dropImage);
      });
   }

   const pciExpress1 = document.getElementById('pciExpress_1');
   pciExpress1.className = 'pciExpress1PcMode';
   if (pciExpress) {
      pciExpressSpecificity('drag_pciExpress_1', pciExpress.dropImage);
   }

   const m2 = document.getElementById('m2');
   m2.className = 'm2PcMode';
};

const motherboardMode = () => {
   const {motherBoard} = getBuildingPC();
   if (motherBoard) {
      const mother = document.getElementById('mother');
      mother.className = 'mother';
      motherTradeVisual('center', 'none');
      mother.style.backgroundSize = '60% 100%';

      const cpu = document.getElementById('cpu');
      cpu.className = 'cpu';

      const cooler = document.getElementById('cooler');
      cooler.className = 'cooler';

      const {pciExpress, ram} = getBuildingPC();
      const ram1 = document.getElementById('ram_1');
      ram1.className = 'ram1';

      const ram2 = document.getElementById('ram_2');
      ram2.className = 'ram2';

      if (ram.length > 0) {
         ram.forEach((element) => {
            ramSpecificity(element.div, element.dropImage);
         });
      }

      const pciExpress1 = document.getElementById('pciExpress_1');
      pciExpress1.className = 'pciExpress1';
      if (pciExpress) {
         pciExpressSpecificity('drag_pciExpress_1', pciExpress.dropImage);
      }

      const m2 = document.getElementById('m2');
      m2.className = 'm2';
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
