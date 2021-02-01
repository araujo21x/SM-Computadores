/* exported pcMode, motherboardMode, motherTrade, coolerZone */
const pcMode = () => {
   const mother = document.getElementById('mother');
   mother.className = 'motherPcMode';
   motherTradeVisual('left');
   mother.style.backgroundSize = '90% 97%';

   const cpu = document.getElementById('cpu');
   cpu.className = 'cpuPcMode';

   const cooler = document.getElementById('cooler');
   cooler.className = 'coolerPcMode';

   const ram1 = document.getElementById('ram_1');
   ram1.className = 'ram1PcMode';

   const ram2 = document.getElementById('ram_2');
   ram2.className = 'ram2PcMode';

   const pciExpress1 = document.getElementById('pciExpress_1');
   pciExpress1.className = 'pciExpress1PcMode';

   const m2 = document.getElementById('m2');
   m2.className = 'm2PcMode';

   const powerSupplySlot = document.getElementsByClassName('powerSupplySlot');
   powerSupplySlot[0].style.display = 'inline';
   const lateralSlotArea = document.getElementsByClassName('lateralSlotArea');
   lateralSlotArea[0].style.display = 'inline';
};

const motherboardMode = () => {
   const {motherBoard} = getBuildingPC();
   if (motherBoard) {
      const mother = document.getElementById('mother');
      mother.className = 'mother';
      motherTradeVisual('center');
      mother.style.backgroundSize = '60% 100%';

      const cpu = document.getElementById('cpu');
      cpu.className = 'cpu';

      const cooler = document.getElementById('cooler');
      cooler.className = 'cooler';

      const ram1 = document.getElementById('ram_1');
      ram1.className = 'ram1';

      const ram2 = document.getElementById('ram_2');
      ram2.className = 'ram2';

      const pciExpress1 = document.getElementById('pciExpress_1');
      pciExpress1.className = 'pciExpress1';

      const m2 = document.getElementById('m2');
      m2.className = 'm2';

      const powerSupplySlot = document.
         getElementsByClassName('powerSupplySlot');
      powerSupplySlot[0].style.display = 'none';

      const lateralSlotArea = document.
         getElementsByClassName('lateralSlotArea');
      lateralSlotArea[0].style.display = 'none';
   }
};

const motherTradeVisual = (direction) => {
   const {motherBoard} = getBuildingPC();

   if (!motherBoard) {
      tradeDisplay('flex', 'none');
   } else {
      // eslint-disable-next-line max-len
      mother.style.background = `url(${motherBoard.image}) ${direction} / cover no-repeat`;
      tradeDisplay('none', 'grid');
   }
};

const tradeDisplay = (displayDropMother, displayRemaining) => {
   // desativand div com a frase "arraste sua placa mãe aqui"
   const dropMother = document.getElementById('motherBoard');
   dropMother.style.display = displayDropMother;

   const powerSupplySlot = document.
      getElementsByClassName('powerSupplySlot');
   powerSupplySlot[0].style.display = displayRemaining;

   const lateralSlotArea = document.
      getElementsByClassName('lateralSlotArea');
   lateralSlotArea[0].style.display = displayRemaining;

   const mother = document.getElementById('mother');
   mother.style.display = displayRemaining;
};

const coolerZone = (titleTab) => {
   const {cpu, cooler} = getBuildingPC();
   console.log(titleTab);
   const coolerSection = document.getElementById('cooler');

   if (cooler && cpu) coolerSection.style.display = 'inline';
   else {
      coolerSection.style.display = 'none';
      if (cpu && titleTab === 'coolerTab') {
         coolerSection.style.display = 'inline';
      }
   }
};
