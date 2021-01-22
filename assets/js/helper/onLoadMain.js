/* exported mainLoaded */

const mainLoaded = () => {
   setBuildingPC(
      {
         motherBoard: {
            socket: true,
            chipset: true,
            memorySlotAmount: 2,
            memorySlotType: 'DDR4',
            memorySlotFrequency: [2666, 2400, 2133],
            hasSocketM2: false,
            socketM2: [
               {type: ['SATA', 'PCIe']},
               {type: ['PCIe']},
            ],
            socketPCIE: [
               {
                  version: '3.0',
                  type: 'x16',
               },
            ],
         },
         cpu: 0,
         ram: null,
         rom: {
            name: '',
            size: '',
            typeSocket: 'M2',
            typeM2: 'SATA',
            typeSATA: 'SSD',
         },
         placaVideo: {
            type: 'pciExpress',
            subType: 'graphicsCard',
            PCIeVersion: '3.0',
            PCIeType: 'x16',
            EnergyConsumption: 300,
         },
         cooler: null,
         powerSupply: {
            outputPower: 500,
         },
         energy: 450,
      },
   );
   const titleTabs = Array.from(document.getElementsByClassName('titleTab'));
   disableTab(titleTabs);
};
