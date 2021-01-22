/* exported hardwareItem */

const hardwareItem = (piece) => {// refatorar
   const hardwareItemTag = document.createElement('div');
   hardwareItemTag.className = 'hardwareItem';

   hardwareItemTag.appendChild(imageZone('https://sitehosting.com.br/wp-content/uploads//2018/05/processador-de-acordo-com-sua-necessidade-Intel-Celeron-D.png'
      , 'imagem de um processador na net teste 01'));
   hardwareItemTag.appendChild(bodyZone(piece));

   hardwareItemTag.classList.add(checkCompatibility(piece));
   return hardwareItemTag;
};

const imageZone = (imageDir, infoImg) => {
   const divImage = document.createElement('div');
   divImage.className = 'hardwareItemImg';

   const imageTag = document.createElement('img');
   imageTag.src = imageDir;
   imageTag.alt = infoImg;

   divImage.appendChild(imageTag);
   return divImage;
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

const bodyInfo = (piece) =>{
   const div = document.createElement('div');
   div.className = 'HardwareItemText';

   const ul = document.createElement('ul');
   const li = document.createElement('li');
   li.textContent = piece.type;
   ul.appendChild(li);
   div.appendChild(ul);

   return div;
};

const bodyButton = (piece) =>{
   const button = document.createElement('button');
   button.addEventListener('click', function() {
      openModal('moreInfo', piece);
   });
   button.innerHTML = 'Mais informações';

   return button;
};
