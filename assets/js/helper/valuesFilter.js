/* exported motherBoardFilterCamp, cpuFilterCamp, coolerFilterCamp,
ramFilterCamp, pciFilterCamp, romCamp, M2Camp, psuCamp  */
const motherBoardFilterCamp = {
   order: {
      name: 'order',
      question: 'Ordenar por',
      answer: [
         {value: 'name', text: 'Nome'},
         {value: 'chipset', text: 'Chipset'},
         {value: 'socket', text: 'Socket'},
         {value: 'memorySizeSupport', text: 'Limite maximo de Ram'},
         {value: 'memorySlotAmount', text: 'Limite de slots de memória'},
         {value: 'memorySlotType', text: 'Tipo de slot de memória'},
         {value: 'motherFrequencies', text: 'Frequências de memória'},
      ],
   },

   sortType: {
      name: 'sortType',
      question: 'Ordenar de maneira',
      answer: [
         {value: 'ASC', text: 'Crescente'},
         {value: 'DESC', text: 'Decrecente'},
      ],
   },

   showPieces: {
      name: 'showPieces',
      question: 'Mostrar Peças',
      answer: [
         {value: 'all', text: 'Todas'},
         {value: 'pluggable', text: 'Encaixáveis'},
         {value: 'notPluggable', text: 'Não Encaixáveis'},
      ],
   },

   chipset: {
      name: 'chipset',
      question: 'Selecione um chipset',
      answer: [
         {value: 'H410 Express', text: 'H410 Express'},
         {value: 'Z87 Express', text: 'Z87 Express'},
      ],
   },

   socket: {
      name: 'socket',
      question: 'Selecione um socket',
      answer: [
         {value: 'LGA1200', text: 'LGA1200'},
         {value: 'LGA1150', text: 'LGA1150'},
      ],
   },

   suportM2: {
      name: 'suportM2',
      question: 'suporte a entrada M2',
      answer: [
         {value: true, text: 'Possui'},
         {value: false, text: 'Não possui'},
      ],
   },

   memorySizeSupport: {
      name: 'memorySizeSupport',
      question: 'Limite maximo de Ram',
      answer: [
         {value: 32, text: '32 GB'},
         {value: 64, text: '64 GB'},
      ],
   },

   memorySlotAmount: {
      name: 'memorySlotAmount',
      question: 'Limite de slots de memória',
      answer: [
         {value: 1, text: '1'},
         {value: 2, text: '2'},
         {value: 3, text: '3'},
         {value: 4, text: '4'},
      ],
   },
   memorySlotType: {
      name: 'memorySlotType',
      question: 'Tipo de slot de memória',
      answer: [
         {value: 'DDR3', text: 'DDR3'},
         {value: 'DDR4', text: 'DDR4'},
      ],
   },
   motherFrequencies: {
      name: 'motherFrequencies',
      question: 'Frequências de memória suportadas',
      answer: [
         {value: 1600, text: '1600 MHz'},
         {value: 2133, text: '2133 MHz'},
         {value: 2333, text: '2333 MHz'},
         {value: 2400, text: '2400 MHz'},
         {value: 2666, text: '2666 MHz'},
         {value: 2933, text: '2933 MHz'},
         {value: 3000, text: '3000 MHz'},
      ],
   },
};

const cpuFilterCamp = {
   order: {
      name: 'order',
      question: 'Ordenar por',
      answer: [
         {value: 'name', text: 'Nome'},
         {value: 'chipset', text: 'Chipset'},
         {value: 'socket', text: 'Socket'},
         {value: 'memorySizeSupport', text: 'Limite maximo de Ram'},
         {value: 'memorySupportAmountSlot', text: 'Limite de slots de memória'},
         {value: 'cpuFrequencies', text: 'Frequências de memória'},
         {value: 'baseClockSpeed', text: 'Frequência mínima de clock'},
         {value: 'maximumBoostSpeed', text: 'Frequência máxima de clock'},
         {value: 'cache', text: 'Cache'},
         {value: 'core', text: 'Core'},
         {value: 'threads', text: 'Threads'},
         {value: 'graphicsProcessor', text: 'Placa grafica integrada'},
      ],
   },

   sortType: {
      name: 'sortType',
      question: 'Ordenar de maneira',
      answer: [
         {value: 'ASC', text: 'Crescente'},
         {value: 'DESC', text: 'Decrecente'},
      ],
   },

   showPieces: {
      name: 'showPieces',
      question: 'Mostrar Peças',
      answer: [
         {value: 'all', text: 'Todas'},
         {value: 'pluggable', text: 'Encaixáveis'},
         {value: 'notPluggable', text: 'Não Encaixáveis'},
      ],
   },

   chipset: {
      name: 'chipset',
      question: 'Selecione um chipset',
      answer: [
         {value: 'H410 Express', text: 'H410 Express'},
         {value: 'Z87 Express', text: 'Z87 Express'},
      ],
   },
   socket: {
      name: 'socket',
      question: 'Selecione um socket',
      answer: [
         {value: 'LGA1200', text: 'LGA1200'},
         {value: 'LGA1150', text: 'LGA1150'},
      ],
   },
   memorySizeSupport: {
      name: 'memorySizeSupport',
      question: 'Limite maximo de Ram',
      answer: [
         {value: '32', text: '32 GB'},
         {value: '64', text: '64 GB'},
      ],
   },
   memorySlotAmount: {
      name: 'memorySlotAmount',
      question: 'Limite de slots de memória',
      answer: [
         {value: '1', text: '1'},
         {value: '2', text: '2'},
         {value: '3', text: '3'},
         {value: '4', text: '4'},
      ],
   },
   cpuFrequencies: {
      name: 'cpuFrequencies',
      question: 'Frequências de memória suportadas',
      answer: [
         {value: '1333', text: '1333 MHz'},
         {value: '1600', text: '1600 MHz'},
         {value: '2133', text: '2133 MHz'},
         {value: '2333', text: '2333 MHz'},
         {value: '2400', text: '2400 MHz'},
         {value: '2666', text: '2666 MHz'},
         {value: '2933', text: '2933 MHz'},
         {value: '3000', text: '3000 MHz'},
      ],
   },
   baseClockSpeed: {
      name: 'baseClockSpeed',
      question: 'Frequência mínima de clock',
      answer: [
         {value: '2.900', text: '2.900 GHz'},
         {value: '3.200', text: '3.200 GHz'},

      ],
   },
   maximumBoostSpeed: {
      name: 'maximumBoostSpeed',
      question: 'Frequência máxima de clock',
      answer: [
         {value: '3.200', text: '3.200 GHz'},
         {value: '4.300', text: '4.300 GHz'},
      ],
   },
   cache: {
      name: 'cache',
      question: 'Selecione tamanho do cache',
      answer: [
         {value: '3', text: '3 MB'},
         {value: '12', text: '12 MB'},
      ],
   },
   core: {
      name: 'core',
      question: 'Quantidade de nucleos',
      answer: [
         {value: '2', text: '2'},
         {value: '6', text: '6'},
      ],
   },
   threads: {
      name: 'threads',
      question: 'Quantidade de threads',
      answer: [
         {value: '12', text: '12'},
         {value: '4', text: '4'},
      ],
   },
   grapshicProcessor: {
      name: 'grapshicProcessor',
      question: 'Placa grafica integrada',
      answer: [
         {value: 'Intel UHD Graphics 630', text: 'Intel UHD Graphics 630'},
         {value: 'Intel HD Graphics 4400', text: 'Intel HD Graphics 4400'},
      ],
   },
};

const coolerFilterCamp = {
   order: {
      name: 'order',
      question: 'Ordenar por',
      answer: [
         {value: 'name', text: 'Nome'},
         {value: 'compatibilityCpu', text: 'Selecione um socket'},
         {value: 'speedFan', text: 'Velocidade do Fan'},
         {value: 'fanAirflow', text: 'Máximo fluxo de ar do fan'},
      ],
   },

   sortType: {
      name: 'sortType',
      question: 'Ordenar de maneira',
      answer: [
         {value: 'ASC', text: 'Crescente'},
         {value: 'DESC', text: 'Decrecente'},
      ],
   },

   showPieces: {
      name: 'showPieces',
      question: 'Mostrar Peças',
      answer: [
         {value: 'all', text: 'Todas'},
         {value: 'pluggable', text: 'Encaixáveis'},
         {value: 'notPluggable', text: 'Não Encaixáveis'},
      ],
   },

   compatibilityCpu: {
      name: 'compatibilityCpu',
      question: 'Selecione um socket',
      answer: [
         {value: 'LGA1200', text: 'LGA1200'},
         {value: 'LGA1150', text: 'LGA1150'},
         {value: 'LGA1151', text: 'LGA1151'},
      ],
   },
   speedFan: {
      name: 'speedFan',
      question: 'Velocidade do Fan',
      answer: [
         {value: '2000', text: '2000 RPM'},
         {value: '2200', text: '2200 RPM'},
      ],
   },
   fanAirflow: {
      name: 'fanAirflow',
      question: 'Máximo fluxo de ar do fan',
      answer: [
         {value: '35', text: '35 CFM'},
         {value: '42', text: '42 CFM'},
      ],
   },
};

const ramFilterCamp = {
   order: {
      name: 'order',
      question: 'Ordenar por',
      answer: [
         {value: 'name', text: 'Nome'},
         {value: 'memoryFrequency', text: 'Frequência da Memória'},
         {value: 'memorySize', text: 'Tamanho de memória'},
         {value: 'memorySlotType', text: 'Tipo de slot'},
      ],
   },

   sortType: {
      name: 'sortType',
      question: 'Ordenar de maneira',
      answer: [
         {value: 'ASC', text: 'Crescente'},
         {value: 'DESC', text: 'Decrecente'},
      ],
   },

   showPieces: {
      name: 'showPieces',
      question: 'Mostrar Peças',
      answer: [
         {value: 'all', text: 'Todas'},
         {value: 'pluggable', text: 'Encaixáveis'},
         {value: 'notPluggable', text: 'Não Encaixáveis'},
      ],
   },

   memoryFrequency: {
      name: 'memoryFrequency',
      question: 'Frequência da Memória',
      answer: [
         {value: '1600', text: '1600 MHz'},
         {value: '1866', text: '1866 MHz'},
         {value: '2400', text: '2400 MHz'},
         {value: '3000', text: '3000 MHz'},
      ],
   },
   memorySize: {
      name: 'memorySize',
      question: 'Tamanho de memória',
      answer: [
         {value: '8', text: '8 GB'},
      ],
   },
   memorySlotType: {
      name: 'memorySlotType',
      question: 'Tipo de slot',
      answer: [
         {value: 'DDR3', text: 'DDR3'},
         {value: 'DDR4', text: 'DDR4'},
      ],
   },
};

const pciFilterCamp = {
   order: {
      name: 'order',
      question: 'Ordenar por',
      answer: [
         {value: 'name', text: 'Nome'},
         {value: 'baseClock', text: 'Base clock'},
         {value: 'boostClock', text: 'Boost clock'},
         {value: 'CUDACore', text: 'CUDACore'},
         {value: 'memoryInterface', text: 'Interface de memória'},
         {value: 'memorySize', text: 'Tamanho de memória'},
         {value: 'memorySpeed', text: 'Velocidade de memória'},
         {value: 'memoryType', text: 'Tipo de memória'},
      ],
   },

   sortType: {
      name: 'sortType',
      question: 'Ordenar de maneira',
      answer: [
         {value: 'ASC', text: 'Crescente'},
         {value: 'DESC', text: 'Decrecente'},
      ],
   },

   showPieces: {
      name: 'showPieces',
      question: 'Mostrar Peças',
      answer: [
         {value: 'all', text: 'Todas'},
         {value: 'pluggable', text: 'Encaixáveis'},
         {value: 'notPluggable', text: 'Não Encaixáveis'},
      ],
   },

   baseClock: {
      name: 'baseClock',
      question: 'GPU base clock',
      answer: [
         {value: '1410', text: '1410 MHz'},
      ],
   },
   boostClock: {
      name: 'boostClock',
      question: 'GPU boost clock',
      answer: [
         {value: '1755', text: '1755 MHz'},
      ],
   },
   CUDACore: {
      name: 'CUDACore',
      question: 'CUDA core',
      answer: [
         {value: '896', text: '896'},
      ],
   },
   memoryInterface: {
      name: 'memoryInterface',
      question: 'Interface de memória',
      answer: [
         {value: '128 bits', text: '128 bits'},
      ],
   },
   memorySize: {
      name: 'memorySize',
      question: 'Tamanho de memória',
      answer: [
         {value: '4', text: '4 GB'},
      ],
   },
   memorySpeed: {
      name: 'memorySpeed',
      question: 'Velocidade de memória',
      answer: [
         {value: '12 Gbps', text: '12 Gbps'},
      ],
   },
   memoryType: {
      name: 'memoryType',
      question: 'Tipo de memória',
      answer: [
         {value: 'GDDR6', text: 'GDDR6'},
      ],
   },
};

const romCamp = {
   order: {
      name: 'order',
      question: 'Ordenar por',
      answer: [
         {value: 'name', text: 'Nome'},
         {value: 'memorySize', text: 'Tamanho da memória'},
         {value: 'reading', text: 'Velocidade de leitura'},
         {value: 'writing', text: 'Velocidade de escrita'},
         {value: 'rotation', text: 'Rotação(para HDD)'},
      ],
   },

   sortType: {
      name: 'sortType',
      question: 'Ordenar de maneira',
      answer: [
         {value: 'ASC', text: 'Crescente'},
         {value: 'DESC', text: 'Decrecente'},
      ],
   },

   showPieces: {
      name: 'showPieces',
      question: 'Mostrar Peças',
      answer: [
         {value: 'all', text: 'Todas'},
         {value: 'pluggable', text: 'Encaixáveis'},
         {value: 'notPluggable', text: 'Não Encaixáveis'},
      ],
   },

   memorySize: {
      name: 'memorySize',
      question: 'Tamanho da memória',
      answer: [
         {value: '0.520', text: '0.520 GB'},
         {value: '1', text: '1 GB'},
      ],
   },
   reading: {
      name: 'reading',
      question: 'Velocidade de leitura',
      answer: [
         {value: '120 MB/s', text: '120 MB/s'},
         {value: '550 MB/s', text: '550 MB/s'},
      ],
   },
   writing: {
      name: 'writing',
      question: 'Velocidade de escrita',
      answer: [
         {value: '50 MB/s', text: '50 MB/s'},
         {value: '445 MB/s', text: '445 MB/s'},
      ],
   },
   rotation: {
      name: 'rotation',
      question: 'Rotação(para HDD)',
      answer: [
         {value: '5900', text: '5900 RPM'},
      ],
   },
};

const M2Camp = {
   order: {
      name: 'order',
      question: 'Ordenar por',
      answer: [
         {value: 'name', text: 'Nome'},
         {value: 'format', text: 'Interface'},
         {value: 'memorySize', text: 'Tamanho de memória'},
         {value: 'model', text: 'Formato'},
         {value: 'reading', text: 'Velocidade de leitura'},
         {value: 'writing', text: 'Velocidade de escrita'},
      ],
   },

   sortType: {
      name: 'sortType',
      question: 'Ordenar de maneira',
      answer: [
         {value: 'ASC', text: 'Crescente'},
         {value: 'DESC', text: 'Decrecente'},
      ],
   },
   showPieces: {
      name: 'showPieces',
      question: 'Mostrar Peças',
      answer: [
         {value: 'all', text: 'Todas'},
         {value: 'pluggable', text: 'Encaixáveis'},
         {value: 'notPluggable', text: 'Não Encaixáveis'},
      ],
   },

   format: {
      name: 'format',
      question: 'Interface',
      answer: [
         {value: 'NVMe', text: 'NVMe'},
      ],
   },
   memorySize: {
      name: 'memorySize',
      question: 'Tamanho de memória',
      answer: [
         {value: '0.250', text: '0.250 GB'},
      ],
   },
   model: {
      name: 'model',
      question: 'Formato',
      answer: [
         {value: '2280', text: '2280'},
      ],
   },
   reading: {
      name: 'reading',
      question: 'Velocidade de leitura',
      answer: [
         {value: '2000 MB/s', text: '2000 MB/s'},
      ],
   },
   writing: {
      name: 'writing',
      question: 'Velocidade de escrita',
      answer: [
         {value: '1100 MB/s', text: '1100 MB/s'},
      ],
   },
};

const psuCamp = {
   order: {
      name: 'order',
      question: 'Ordenar por',
      answer: [
         {value: 'name', text: 'Nome'},
         {value: 'voltage', text: 'Voltagem'},
         {value: 'wattage', text: 'Potência'},
      ],
   },

   sortType: {
      name: 'sortType',
      question: 'Ordenar de maneira',
      answer: [
         {value: 'ASC', text: 'Crescente'},
         {value: 'DESC', text: 'Decrecente'},
      ],
   },

   showPieces: {
      name: 'showPieces',
      question: 'Mostrar Peças',
      answer: [
         {value: 'all', text: 'Todas'},
         {value: 'pluggable', text: 'Encaixáveis'},
         {value: 'notPluggable', text: 'Não Encaixáveis'},
      ],
   },

   voltage: {
      name: 'voltage',
      question: 'Voltagem',
      answer: [
         {value: 'Bivolt', text: 'Bivolt'},
      ],
   },
   wattage: {
      name: 'wattage',
      question: 'Capacidade de saída',
      answer: [
         {value: '200', text: '200 W'},
         {value: '400', text: '400 W'},
      ],
   },
};
