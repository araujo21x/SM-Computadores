/* eslint-disable max-len */
export const motherBoardWich = {
   img: 'https://res.cloudinary.com/drbclvi9z/image/upload/v1625162662/DragAndDrop/motherBoard/PMAE_CINZA_4_RAM-02-01_d7gspm.png',
   whatIs: 'Um dos componentes mais importante, a placa mãe é como uma central para o computador, ela faz a comunicação entre todas as peças além de passar a energia necessária para as peças.',
   verifications: [
      'Tipo de Socket e Chipset suportados pela placa mãe, pois interferem na compatibilidade com o processador;',
      'Frequências da memória suportadas pela placa mãe, pois interferem na compatibilidade com a memória RAM;',
      'Tipos de padrões de memória RAM suportadas pela placa mãe, pois interferem na compatibilidade com a memória RAM;',
      'Limite do tamanho de memória RAM suportada, bom observa pois não adianta ter 64GB de memória ram e a placa suportar apenas 32GB.',
   ],
};

export const cpuWich = {
   img: 'https://res.cloudinary.com/drbclvi9z/image/upload/v1614129003/DragAndDrop/cpu/cpu1_qetftx.png',
   whatIs: 'O processador ou CPU(central processing unit ou em portugues unidade central de processamento) é o cérebro do computador, sendo o componente responsável por efetuar os cálculos necessários para você realizar suas tarefas. Interage e faz as conexões necessárias entre todos os programas instalados. Neste processo, ele também interpreta as informações enviadas pelos programas, realiza diversas operações, inclusive gerando a interface que nós interagimos quando usamos um computador.',
   verifications: [
      'Tipo de Socket e Chipset do processador, pois interferem na compatibilidade com a placa mãe;',
      'Frequência da memória, pois interferem na compatibilidade com a memória RAM;',
      'Tipo de padrão da memória, pois interferem na compatibilidade com a memória RAM;',
      'Limite do tamanho de memória RAM suportada, bom observa pois não adianta ter 64GB de memória ram e o processador suportar apenas 32GB.',
   ],
};

export const ramWich = {
   img: 'https://res.cloudinary.com/drbclvi9z/image/upload/v1614129023/DragAndDrop/ram/ram1_leolkv.png',
   whatIs: 'A memória RAM (random access memory ou portugues memória de acesso aleatório) trabalha junto com o processador na execução de programas, ela guarda temporariamente toda a informação que o computador precisa para aquele momento ou para um futuro próximo. A memória RAM é mais rápida que a memória ROM, mas tem uma capacidade inferior de armazenamento, além de ser volátil ao desligar o computador as informações são perdidas.',
   verifications: [
      'Frequência da memória, pois interferem na compatibilidade com a placa mãe;',
      'Tipo de padrão da memória, pois interferem na compatibilidade com a placa mãe;',
      'Tamanho da memória RAM, bom observa pois não adianta ter 64GB de memória RAM e a placa suportar apenas 32GB. ',
   ],
};

export const romWich = {
   img: 'https://res.cloudinary.com/drbclvi9z/image/upload/v1614129026/DragAndDrop/rom/hd_mktl0j.png',
   whatIs: 'A Memória ROM serve para o armazenamento de dados, a principal peça para se utilizar como memória ROM é o HDD(Hard Disk Drive) popularmente chamado de HD, nos últimos anos o SSD também ganhou espaço por ser uma tecnologia mais nova e rápida que o HD, geralmente  HD e SSD seguem o padrão Sata 3.',
   verifications: [
      'O tipo de entrada e se o computador tem suporte a essa entrada (atualmente essa entrada é o padrão sata 3) ',
   ],
};

export const pcieWich = {
   img: 'https://res.cloudinary.com/drbclvi9z/image/upload/v1614129013/DragAndDrop/pciExpress/grapichCard_kegkgf.png',
   whatIs: 'PCI-Express (ou PCIe) é o nome dado ao barramento encontrado em placas-mãe, usado como entrada para placas de expansão gráfica, de som e rede.',
   verifications: [
      'Observar o tamanho desses barramentos(slots) que a placa mãe possui que podem ser x1, x4, x8 ou x16, ver se sua placa mãe tem suporte ao tamanho do barramento(slot) que a peça do tipo PCIe vai usar;',
      'A versão do barramento(slot), além do tamanho do barramento, é importante ver se a versão é compatível para a peça que vai ser instalada.',
   ],
};

export const m2Wich = {
   img: 'https://res.cloudinary.com/drbclvi9z/image/upload/v1614129026/DragAndDrop/rom/M2_jiaxtx.png',
   whatIs: 'M.2 conhecido como Next Generation Form Factor (NGFF), se refere a uma slot que pode encaixar diferentes tipos de peças(desde que seja no formato M.2). A maneira mais comum de se utilizar a entrada M.2 é através de SSD, ',
   verifications: [
      'Caso a placa tenha entrada M.2 veja os padrões que essa entrada aceita, o SSD M.2  pode seguir o padrão NVMe ou Sata.',
   ],
};

export const coolerWich = {
   img: 'https://res.cloudinary.com/drbclvi9z/image/upload/v1614128996/DragAndDrop/cooler/cooler_dqjvtl.png',
   whatIs: 'Sistemas de refrigeração. Ele é composto por um dissipador( peça de cobre ou alumínio que faz contato com o processador) e um ventilador que gira constantemente para remover o calor excessivo da CPU.',
   verifications: [
      'Tipos de sockets do processador suportados, pois interferem na compatibilidade com o processador.',
   ],
};

export const recorderWich = {
   img: 'https://res.cloudinary.com/drbclvi9z/image/upload/v1614129026/DragAndDrop/recorder/recorder_dcvehc.png',
   whatIs: 'Server para ler e gravar em mídias do tipo CD, DVD e Blu-ray.',
   verifications: [
      'Ver quais mídias são suportadas pelo leitor escolhido.',
   ],
};

export const psuWich = {
   img: 'https://res.cloudinary.com/drbclvi9z/image/upload/v1614129016/DragAndDrop/powerSupply/powerSupply_izjyph.png',
   whatIs: 'Serve para alimentar cargas elétricas do aparelho. Ela serve também como uma última linha de defesa contra picos de tensão e instabilidade na corrente, depois do nobreak ou estabilizador.',
   verifications: [
      'Observar a quantidade de Watts que cada peça precisa, principalmente placa mãe, processador e placa de vídeo as que mais consomem, e escolher uma fonte que supra a necessidade.',
   ],
};
