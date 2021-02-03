/* exported getPieces*/
const pieces = [
   // placa mãe
   {
      id: 1,
      name: 'motherBoard Premium',
      type: 'motherBoard',
      image: 'assets/img/motherBoard/mother1.png',
      dropImage: 'assets/img/motherBoard/mother1.png',
      socket: 'LGA1200',
      chipset: 'Intel H410 Express',
      memorySlotAmount: 2,
      memorySlotType: 'DDR4',
      memorySlotFrequency: [2933, 2666, 2400, 2133],
      socketPCIE: [
         {
            type: 'x16',
            version: 3,
         },
         {
            type: 'x16 ',
            version: 2,
         },
         {
            type: 'x1 ',
            version: 2,
         },
      ],
      hasSocketM2: true,
      socketM2: [{type: 'NVMe'}],
   },

   {
      id: 2,
      name: 'motherBoard Simple',
      type: 'motherBoard',
      image: 'assets/img/motherBoard/mother2.png',
      dropImage: 'assets/img/motherBoard/mother2.png',
      socket: 'LGA1150',
      chipset: 'Intel Z87 Express',
      memorySlotAmount: 2,
      memorySlotType: 'DDR3',
      memorySlotFrequency: [1600, 1333],
      socketPCIE: [
         {
            type: 'x16',
            version: 3,
         },
         {
            type: 'x16 ',
            version: 2,
         },
         {
            type: 'x1 ',
            version: 2,
         },
      ],
      hasSocketM2: false,
      socketM2: null,
   },

   // processador

   {
      id: 1,
      name: 'Cpu Premium',
      type: 'cpu',
      image: 'assets/img/cpu/cpu1.png',
      dropImage: 'assets/img/cpu/cpu1.png',
      socket: 'LGA1200',
      chipset: 'Intel H410 Express',
      threads: 12,
      core: 6,
      baseClockSpeed: 2.90,
      maximumBoostSpeed: 4.30,
      cache: 12,
      graphicsProcessor: ' Intel UHD Graphics 630',
      memorySupportFrequency: [2933, 2666, 2400, 2133],
      memorySupportAmountSlot: 2,
      maxMemorySizeSupport: 128,
      TDP: 65,
   },

   {
      id: 2,
      name: 'Cpu Simple',
      type: 'cpu',
      image: 'assets/img/cpu/cpu1.png',
      dropImage: 'assets/img/cpu/cpu1.png',
      socket: 'LGA1150',
      chipset: 'Intel Z87 Express',
      threads: 4,
      core: 2,
      baseClockSpeed: 3.20,
      maximumBoostSpeed: 3.20,
      cache: 3,
      graphicsProcessor: 'Intel HD Graphics 4400',
      memorySupportFrequency: [1600, 1333],
      memorySupportAmountSlot: 2,
      maxMemorySizeSupport: 32,
      TDP: 35,
   },

   // cooler

   {
      id: 1,
      name: 'Cooler Simple',
      type: 'cooler',
      speedFan: 2200,
      fanAirflow: 42,
      TDP: 65,
      compatibilityCpu: ['LGA1150', 'LGA1151', 'LGA1156', 'LGA1155'],
      image: 'assets/img/cooler/cooler.png',
      dropImage: 'assets/img/cooler/cooler.png',
   },
   {
      id: 2,
      name: 'Cooler Premium',
      type: 'cooler',
      speedFan: 2000,
      fanAirflow: 35,
      TDP: 65,
      compatibilityCpu: ['LGA1200'],
      image: 'assets/img/cooler/cooler.png',
      dropImage: 'assets/img/cooler/cooler.png',
   },

   // ram

   {
      id: 1,
      name: 'Memória DDR4',
      type: 'ram',
      memorySlotType: 'DDR4',
      memoryFrequency: 2400,
      memorySize: 8,
      image: 'assets/img/ram/ram1.png',
      dropImage: 'assets/img/ram/ram1drop.png',
   },
   {
      id: 2,
      name: 'Memória DDR4',
      type: 'ram',
      memorySlotType: 'DDR4',
      memoryFrequency: 3000,
      memorySize: 8,
      image: 'assets/img/ram/ram1.png',
      dropImage: 'assets/img/ram/ram1drop.png',
   },
   {
      id: 3,
      name: 'Memória DDR3',
      type: 'ram',
      memorySlotType: 'DDR3',
      memoryFrequency: 1600,
      memorySize: 8,
      image: 'assets/img/ram/ram2.png',
      dropImage: 'assets/img/ram/ram2drop.png',
   },
   {
      id: 4,
      name: 'Memória DDR3',
      type: 'ram',
      memorySlotType: 'DDR3',
      memoryFrequency: 1866,
      memorySize: 8,
      image: 'assets/img/ram/ram2.png',
      dropImage: 'assets/img/ram/ram2drop.png',
   },

   // rom

   {
      id: 1,
      name: 'HD',
      type: 'rom',
      typeSocket: 'SATA',
      memorySize: 1,
      Rotation: 5900,
      Reading: null,
      writing: null,
      image: 'assets/img/rom/hdd.png',
      dropImage: 'assets/img/rom/hddLateral.png',
   },
   {
      id: 2,
      name: 'SSD SATA',
      type: 'rom',
      typeSocket: 'SATA',
      memorySize: 0.520,
      Reading: '550 MB/s',
      writing: '445 MB/s',
      Rotation: null,
      image: 'assets/img/rom/ssd.png',
      dropImage: 'assets/img/rom/ssdLateral.png',
   },
   {
      id: 3,
      name: 'M.2 NVMe',
      type: 'rom',
      typeSocket: 'M2',
      typeM2: 'NVMe', // interface
      model: 2280, // tamanho
      memorySize: 0.250,
      Reading: '2000 MB/s',
      writing: '1100 MB/s',
      Rotation: null,
      image: 'assets/img/rom/M2.png',
      dropImage: 'assets/img/rom/M2Encaixe.png',
   },

   // PCIe

   {
      id: 1,
      name: 'Placa de Vídeo',
      type: 'pciExpress',
      PCIeType: 'x16',
      PCIeVersion: 3,
      boostClock: 1755,
      baseClock: 1410,
      memoryType: 'GDDR6',
      memorySize: 4,
      CUDACore: 896,
      memorySpeed: '12 Gbps',
      memoryInterface: '128 bits',
      energyConsumption: 300,
      image: 'assets/img/pciExpress/grapichCard.png',
      dropImage: 'assets/img/pciExpress/grapichCardDrop.png',
   },

   // powerSupply

   {
      id: 1,
      name: 'Fonte 550W',
      type: 'powerSupply',
      capacity: 550,
      voltage: 'bivolt',
      image: 'assets/img/powerSupply/powerSupply.png',
      dropImage: 'assets/img/powerSupply/powerSupplyLateral.png',
   },
   {
      id: 2,
      name: 'Fonte 350W',
      type: 'powerSupply',
      capacity: 350,
      voltage: 'bivolt',
      image: 'assets/img/powerSupply/powerSupply.png',
      dropImage: 'assets/img/powerSupply/powerSupplyLateral.png',
   },
];

const getPieces = (type) => {
   const buildingPC = getBuildingPC();
   return pieces.filter((element) => {
      let piece = element.type === type ? element : null;

      if (piece) {
         if (JSON.stringify(piece) === JSON.stringify(buildingPC[type])) {
            piece = null;
         }

         if (type === 'ram' && buildingPC[type]) {
            buildingPC[type].map((buildinPiece) =>{
               delete buildinPiece.div;
               if (JSON.stringify(piece) === JSON.stringify(buildinPiece)) {
                  piece = null;
               }
            });
         }
      }

      return piece;
   });
};


