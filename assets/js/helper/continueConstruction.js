/* exported  continueConstruction*/
const continueConstruction = () => {
   const {
      motherBoard,
      cpu,
      cooler,
      ram,
      rom,
      m2,
      pciExpress,
      powerSupply,
      recorder,
   } = getBuildingPC();
   if (motherBoard) {
      motherBoardSpecificity();
      if (cpu) continueCpuCooler(cpu, cooler);
      if (pciExpress) continuePciExpress(pciExpress);
      if (powerSupply) continuePowerSupply(powerSupply);
      if (ram) continueRam(ram);
      if (rom) continueRom(rom);
      if (recorder) continueRecorder(recorder);
      if (m2) continueM2(m2);
      motherboardMode();
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
   const divpowerSupply = document.getElementById('powerSupply');
   divpowerSupply.appendChild(
      creatTagImg(powerSupply.dropImage, powerSupply.name, powerSupply));
};

const continuePciExpress = (pciExpress) => {
   const divPci = document.getElementById('pciExpress_1');
   divPci.appendChild(
      creatTagImg(pciExpress.dropImage, pciExpress.name, pciExpress));
};

const continueRom = (rom) => {
   rom.map((element) => {
      const divRom = document.getElementById(element.div);
      divRom.appendChild(creatTagImg(element.dropImage, element.name, element));
   });
};

const continueRam = (ram) => {
   ram.map((element) => {
      const divRam = document.getElementById(element.div);
      divRam.appendChild(creatTagImg(element.dropImage, element.name, element));
   });
};

const continueM2 = (m2) => {
   const divPci = document.getElementById('m2');
   divPci.appendChild(
      creatTagImg(m2.dropImage, m2.name, m2));
};

const continueRecorder = (recorder) => {
   const divRecorder = document.getElementById('recorder');
   divRecorder.appendChild(
      creatTagImg(recorder.dropImage, recorder.name, recorder));
};
