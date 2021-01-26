/* exported getPieces*/
const pieces = [
   {
      id: 1,
      name: 'motherBoard Simple',
      type: 'motherBoard',
      image: 'assets/img/motherBoard/mother1.png',
      dropImage: 'assets/img/motherBoard/mother1.png',
      socket: 'pesquisar socket',
      chipset: 'pesquisar chipset',
      memorySlotAmount: 2,
      memorySlotType: 'DDR3',
      memorySlotFrequency: 1600,
      socketPCIE: [
         {
            type: 'x16',
            version: 3,
         },
         {
            type: 'x16 ',
            version: 3,
         },
         {
            type: 'x1 ',
            version: 3,
         },
      ],
      hasSocketM2: false,
      socketM2: null,
   },

   {
      id: 2,
      name: 'motherBoard Premium',
      type: 'motherBoard',
      image: 'assets/img/motherBoard/mother2.png',
      dropImage: 'assets/img/motherBoard/mother2.png',
      socket: 'LGA1200',
      chipset: 'pesquisar chipset',
      memorySlotAmount: 2,
      memorySlotType: 'DDR4',
      memorySlotFrequency: 2400,
      socketPCIE: [
         {
            type: 'x16',
            version: 3,
         },
         {
            type: 'x16 ',
            version: 3,
         },
         {
            type: 'x1 ',
            version: 3,
         },
      ],
      hasSocketM2: true,
      socketM2: [{type: 'NVMe'}],
   },

   {
      id: 1,
      name: 'Cpu Premium',
      type: 'cpu',
      image: 'assets/img/cpu/cpu1.png',
      dropImage: 'assets/img/cpu/cpu1.png',
      socket: 'LGA1200',
      chipset: 'pesquisar chipset',
      threads: 16,
      cores: 8,
      baseClockSpeed: 3.80,
      maximumBoostSpeed: 5.10,
      cache: 16,
      // verificar suporte memoria
   },

   {
      id: 2,
      name: 'Cpu Simple',
      type: 'cpu',
      image: 'assets/img/cpu/cpu1.png',
      dropImage: 'assets/img/cpu/cpu1.png',
      socket: 'LGA1200',
      chipset: 'pesquisar chipset',
      threads: 16,
      cores: 8,
      baseClockSpeed: 3.80,
      maximumBoostSpeed: 5.10,
      cache: 16,
   },
];

const getPieces = (type) => {
   return pieces.filter((element) => element.type === type);
};


