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
   const divImage = document.createElement('div');
   divImage.className = 'hardwareItemImg';

   const imageTag = creatTagImg(imageDir, infoImg, piece);

   divImage.appendChild(imageTag);
   return divImage;
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
