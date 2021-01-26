/* exported pcMode, motherboardMode, motherTrade */
const pcMode = () => {
   const mother = document.getElementById('mother');
   mother.className = 'motherPcMode';
   motherTradeVisual('left');
   mother.style.backgroundSize = '90% 97%';

   const cpu = document.getElementById('cpu');
   cpu.className = 'cpuPcMode';

   const cooler = document.getElementById('cooler');
   cooler.className = 'coolerPcMode';

   const ram1 = document.getElementById('ram1');
   ram1.className = 'ram1PcMode';

   const ram2 = document.getElementById('ram2');
   ram2.className = 'ram2PcMode';

   const pciExpress1 = document.getElementById('pciExpress1');
   pciExpress1.className = 'pciExpress1PcMode';

   const m2 = document.getElementById('m2');
   m2.className = 'm2PcMode';

   const powerSupplySlot = document.getElementsByClassName('powerSupplySlot');
   powerSupplySlot[0].style.display = 'inline';
   const lateralSlotArea = document.getElementsByClassName('lateralSlotArea');
   lateralSlotArea[0].style.display = 'inline';
};

const motherboardMode = () => {
   const mother = document.getElementById('mother');
   mother.className = 'mother';
   motherTradeVisual('center');
   mother.style.backgroundSize = '60% 100%';

   const cpu = document.getElementById('cpu');
   cpu.className = 'cpu';

   const cooler = document.getElementById('cooler');
   cooler.className = 'cooler';

   const ram1 = document.getElementById('ram1');
   ram1.className = 'ram1';

   const ram2 = document.getElementById('ram2');
   ram2.className = 'ram2';

   const pciExpress1 = document.getElementById('pciExpress1');
   pciExpress1.className = 'pciExpress1';

   const m2 = document.getElementById('m2');
   m2.className = 'm2';

   const powerSupplySlot = document.getElementsByClassName('powerSupplySlot');
   powerSupplySlot[0].style.display = 'none';
   const lateralSlotArea = document.getElementsByClassName('lateralSlotArea');
   lateralSlotArea[0].style.display = 'none';
};

const motherTradeVisual = (direction) => {
   const {motherBoard} = getBuildingPC();

   if (!motherBoard) {
      // modificar para mostrar a peça um texto
   } else {
      // eslint-disable-next-line max-len
      mother.style.background = `url(${motherBoard.image}) ${direction} / cover no-repeat`;
   }
};
