/* exported index, justPluggable, notPluggable*/
const index = async (hardware, title) => {
   const type = cutId(hardware);
   const pieces = await getPieces(type);

   // Adicionado os botões e a zona de recuperar peça
   const divTab = document.getElementById(hardware);
   divTab.innerText = '';
   divTab.appendChild(titleSection(title, hardware));
   divTab.appendChild(detailsHardware(hardware));
   divTab.appendChild(saveZone(type));

   const section = document.createElement('section');
   section.id = 'dropableParts';

   // Adicionando as peças
   const newPieces = justPluggable(pieces);
   newPieces.forEach((element) => section.appendChild(hardwareItem(element)));
   divTab.appendChild(section);
   divTab.appendChild(backButton());
   // mudar o modo de visualização
   modeCheck(type);
};

const detailsHardware = (type) => {
   const zoneButtons = document.createElement('div');
   zoneButtons.className = 'detailsHardware';

   zoneButtons.appendChild(buttonDetailsHardware(type,
      'Filtrar e Ordenar', 'filter'));

   return zoneButtons;
};

const buttonDetailsHardware = (type, text, typeModal) => {
   const button = document.createElement('button');
   const p = document.createElement('p');
   const icon = document.createElement('i');

   button.addEventListener('click', function() {
      openModal(typeModal, cutId(type));
   });

   p.innerText = text;
   button.appendChild(p);

   if (typeModal === 'order') icon.className = 'fas fa-sort-alpha-up-alt';
   else icon.className = 'fas fa-filter';
   button.appendChild(icon);

   return button;
};

const saveZone = (type) => {
   const saveZone = document.createElement('div');
   const text = document.createElement('p');
   text.innerHTML = 'Guarde sua peçã aqui!';

   saveZone.className = 'saveZone';
   saveZone.id = `${type}Save`;
   saveZone.appendChild(text);

   // add drag function
   saveZone.ondrop = function() {
      dropSave(event, type);
   };

   saveZone.ondragover = function() {
      allowDrop(event);
   };

   return saveZone;
};

const modeCheck = (type) => {
   switch (type) {
   case 'motherBoard':
      motherboardMode();
      break;
   case 'cpu':
      motherboardMode();
      break;
   case 'cooler':
      motherboardMode();
      break;
   case 'ram':
      motherboardMode();
      break;
   case 'pciExpress':
      motherboardMode();
      break;
   case 'm2':
      motherboardMode();
      break;
   case 'rom':
      pcMode();
      break;
   case 'recorder':
      pcMode();
      break;
   case 'powerSupply':
      pcMode();
      break;
   }
};

const backButton = () => {
   const backButton = document.createElement('button');
   backButton.className = 'backButton';
   backButton.addEventListener('click', function() {
      showTitleTabs();
   });

   const iconBack = document.createElement('i');
   iconBack.className = 'fas fa-arrow-left';
   backButton.appendChild(iconBack);

   const p = document.createElement('p');
   p.innerHTML = 'Voltar';
   backButton.appendChild(p);

   return backButton;
};

const titleSection = (titleText, type) => {
   const titleSection = document.createElement('section');
   titleSection.id = 'titleSection';
   // create back icon
   const icomBack = document.createElement('i');
   icomBack.className = 'fas fa-arrow-circle-left titleSectionIcon';
   icomBack.addEventListener('click', function() {
      showTitleTabs();
   });
   titleSection.appendChild(icomBack);

   // create tag p
   const elementP = document.createElement('p');
   elementP.innerText = titleText;
   titleSection.appendChild(elementP);

   // create tag icon two
   const iconWhichIs = document.createElement('i');
   iconWhichIs.className = 'fas fa-info-circle titleSectionIcon';
   iconWhichIs.addEventListener('click', function() {
      openModal('whichIs', cutId(type));
   });
   titleSection.appendChild(iconWhichIs);


   return titleSection;
};

const justPluggable = (parts) => {
   const newParts = parts.filter((piece) => {
      const isCompatible = checkCompatibility(piece);
      return isCompatible !== 'incompatible' ? piece : null;
   });
   return newParts;
};

const notPluggable = (parts) => {
   const newParts = parts.filter((piece) => {
      const isCompatible = checkCompatibility(piece);
      return isCompatible === 'incompatible' ? piece : null;
   });
   return newParts;
};
