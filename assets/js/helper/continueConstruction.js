/* exported  continueConstruction*/
const continueConstruction = () => {
   const {
      motherBoard,
      cpu,
      cooler,
      ram,
      rom,
      pciExpress,
      powerSupply,
   } = getBuildingPC();
   if (motherBoard) {
      motherboardMode();
      if (cpu) continueCpuCooler(cpu, cooler);
      if (pciExpress) continuePciExpress(pciExpress); // falta foto
      if (powerSupply) continuePowerSupply(powerSupply);
      if (ram) continueRam(ram); // ver como vai ser o array
      if (rom) continueRom(rom); // ver como vai ser o array
   }
};

const continueCpuCooler = (cpu, cooler) => {
   const divCpu = document.getElementById('cpu');
   divCpu.appendChild(creatTagImg(cpu.image, cpu.name, cpu));
   if (cooler) {
      const divCooler = document.getElementById('cooler');
      divCooler.appendChild(creatTagImg(cooler.image, cooler.name, cooler));
      divCooler.style.display = 'inline';
   }
};

const continuePowerSupply = (powerSupply) => {
   const divCpu = document.getElementById('powerSupply');
   divCpu.appendChild(
      creatTagImg(powerSupply.dropImage, powerSupply.name, powerSupply));
};

const continuePciExpress = (pciExpress) => {

};

const continueRom = (rom) => {

};

const continueRam = (ram) => {
   ram.map((element) => {
      const divRam = document.getElementById(element.div);
      divRam.appendChild(creatTagImg(element.dropImage, element.name, element));
   });
};
