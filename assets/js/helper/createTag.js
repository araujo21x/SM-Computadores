/* exported hardwareItem */
const hardwareItem = (piece) => {// refatorar
   const hardwareItemTag = document.createElement('div');
   hardwareItemTag.className = 'hardwareItem';

   // Adicionar a imagem do peça
   hardwareItemTag.appendChild(imageZone(piece.image
      , 'imagem de um processador na net teste 01', piece));
   // Adicionar as info das peça
   hardwareItemTag.appendChild(bodyZone(piece));

   // verificar se a peçã e compativel com a placa-mãe e definir a cor da borda
   hardwareItemTag.classList.add(checkCompatibility(piece));

   return hardwareItemTag;
};

const imageZone = (imageDir, infoImg, piece) => {
   const divZoneImage = document.createElement('div');
   divZoneImage.className = 'hardwareItemImg';
   const imageTag = creatTagImg(imageDir, infoImg, piece);
   const divImage = document.createElement('div');
   if (piece.type==='motherBoard') {
      divImage.style.width = '100%';
      divImage.style.height = '100%';
   }
   divImage.appendChild(imageTag);

   divZoneImage.appendChild(divImage);
   return divZoneImage;
};
const creatTagImg = (imageDir, infoImg, piece) => {
   const imageTag = document.createElement('img');
   imageTag.src = imageDir;
   imageTag.alt = infoImg;
   imageTag.className = 'imagePiece';

   // add drag and drop
   imageTag.draggable = true;

   imageTag.addEventListener('dragstart', function() {
      drag(event, piece);
   });

   imageTag.addEventListener('dragend', function() {
      dropEnd();
   });

   imageTag.id = `drag_${piece.type}_${piece.id}`;
   return imageTag;
};

const bodyZone = (piece) => {
   const divBody = document.createElement('div');
   divBody.className = 'HardwareItemBody';

   divBody.appendChild(bodyTitle(piece.name));
   divBody.appendChild(bodyInfo(piece));
   divBody.appendChild(bodyButton(piece));

   return divBody;
};

const bodyTitle = (namePiece) => {
   const div = document.createElement('div');
   div.className = 'hardwareItemTitle';
   div.textContent = namePiece;

   return div;
};

const bodyInfo = (piece) => {
   const div = document.createElement('div');
   div.className = 'HardwareItemText';

   div.appendChild(buildDivUl(piece));
   return div;
};

const bodyButton = (piece) => {
   const button = document.createElement('button');
   button.addEventListener('click', function() {
      openModal('moreInfo', piece);
   });
   button.innerHTML = 'Mais informações';

   return button;
};
