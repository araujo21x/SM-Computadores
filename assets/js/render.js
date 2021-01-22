/* exported index*/
const index = (hardware) => {
   const type = cutId(hardware);
   const pieces = getPieces(type);
   const divTab = document.getElementById(hardware);
   divTab.innerText = '';
   divTab.appendChild(detailsHardware(hardware, type));
   divTab.appendChild(saveZone(type));

   pieces.forEach((element) => {
      const pieceTag = hardwareItem(element);
      divTab.appendChild(pieceTag);
   });
};

const detailsHardware = (type) => {
   const zoneButtons = document.createElement('div');
   const verticalLine = document.createElement('div');
   verticalLine.className = 'verticalLine';
   zoneButtons.className = 'detailsHardware';

   zoneButtons.appendChild(buttonDetailsHardware(type, 'O que é?',
      'assets/img/informationIcon.png', 'whichIs'));
   zoneButtons.appendChild(verticalLine);
   zoneButtons.appendChild(buttonDetailsHardware(type, 'Filtro',
      'assets/img/filter.png', 'filter'));

   return zoneButtons;
};

const buttonDetailsHardware = (type, text, image, typeModal) => {
   const button = document.createElement('button');
   const img = document.createElement('img');

   button.textContent = text;
   img.src = image;
   button.addEventListener('click', function() {
      openModal(typeModal, type);
   });

   button.appendChild(img);

   return button;
};

const saveZone = (type) => {
   const saveZone = document.createElement('div');
   const text = document.createElement('p');
   text.innerHTML = 'Guarde sua peçã aqui!';

   saveZone.className = 'saveZone';
   saveZone.id = `${type}Save`;
   saveZone.appendChild(text);

   return saveZone;
};
