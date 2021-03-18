/* eslint-disable max-len */
/* exported createModalWhichIs, showContent */
const createModalWhichIs = (piece) => {
   switch (piece) {
   case 'motherBoard':
      motherBoardWhichIs();
      break;
   case 'cpu':
      cpuWhichIs();
      break;
   case 'cooler':
      coolerWhichIs();
      break;
   case 'ram':
      ramWhichIs();
      break;
   case 'pciExpress':
      pciExpressWhichIs();
      break;
   case 'rom':
      romWhichIs();
      break;
   case 'm2':
      m2WhichIs();
      break;
   case 'recorder':
      recorderWhichIs();
      break;
   case 'powerSupply':
      psuWhichIs();
      break;
   }
   const modalButton = document.getElementById('modalButton');
   modalButton.innerHTML = '';
   const button = document.createElement('button');
   button.className = 'cancelButton';
   button.innerText = 'Fechar';
   modalButton.appendChild(button);
};

const showContent = (idElement) => {
   const content = document.getElementById(idElement);
   content.previousElementSibling.classList.toggle('active');
   if (content.style.maxHeight) {
      content.style.maxHeight = null;
   } else {
      content.style.maxHeight = content.scrollHeight + 'px';
   }
};

const createTitleWhich = (title) => {
   const modalTitle = document.getElementById('modalTitle');
   modalTitle.innerHTML = '';
   modalTitle.innerText = title;
};

const createImgWhich = (image, width, height) => {
   const img = document.createElement('img');
   img.src = image;
   img.style.marginRight = 'auto';
   img.style.marginLeft = 'auto';
   img.style.display = 'block';
   img.style.width = `${width}em`;
   img.style.height = `${height}em`;
   img.style.marginBottom = '2%';

   const modalBody = document.getElementById('modalBody');
   modalBody.appendChild(img);
};

const creteCollapsible = (text, id, title, body) => {
   const button = document.createElement('button');
   const idComplet = `${id}Content`;
   button.className = 'collapsible';
   button.innerText = title;
   button.onclick = function() {
      showContent(idComplet);
   };
   body.appendChild(button);
   if (typeof text === 'string') {
      const div = document.createElement('div');
      div.id = idComplet;

      const pElement = document.createElement('p');
      pElement.align = 'justify';
      pElement.innerText = text;
      div.appendChild(pElement);
      body.appendChild(div);
   } else {
      const div = document.createElement('div');
      div.id = idComplet;
      const ulElement = document.createElement('ul');
      ulElement.className = 'contentLi';
      text.forEach((element) => {
         const liElement = document.createElement('li');
         liElement.innerText = element;
         ulElement.appendChild(liElement);
      });

      div.appendChild(ulElement);
      body.appendChild(div);
   }
};

const motherBoardWhichIs = () => {
   createTitleWhich('Placa mãe');
   const modalBody = document.getElementById('modalBody');
   modalBody.innerHTML = '';

   createImgWhich(motherBoardWich.img, '17', '14');
   creteCollapsible(motherBoardWich.whatIs, 'whatIs', 'O que é', modalBody);
   creteCollapsible(motherBoardWich.verifications, 'verifications', 'Cuidados', modalBody);
};

const cpuWhichIs = () => {
   createTitleWhich('Processador');
   const modalBody = document.getElementById('modalBody');
   modalBody.innerHTML = '';

   createImgWhich(motherBoardWich.img, '17', '14');
   creteCollapsible(motherBoardWich.whatIs, 'whatIs', 'O que é', modalBody);
   creteCollapsible(motherBoardWich.verifications, 'verifications', 'Cuidados', modalBody);
};

const coolerWhichIs = () => {
   createTitleWhich('Cooler');
   const modalBody = document.getElementById('modalBody');
   modalBody.innerHTML = '';

   createImgWhich(motherBoardWich.img, '17', '14');
   creteCollapsible(motherBoardWich.whatIs, 'whatIs', 'O que é', modalBody);
   creteCollapsible(motherBoardWich.verifications, 'verifications', 'Cuidados', modalBody);
};
const ramWhichIs = () => {
   createTitleWhich('Memória RAM');
   const modalBody = document.getElementById('modalBody');
   modalBody.innerHTML = '';

   createImgWhich(motherBoardWich.img, '17', '14');
   creteCollapsible(motherBoardWich.whatIs, 'whatIs', 'O que é', modalBody);
   creteCollapsible(motherBoardWich.verifications, 'verifications', 'Cuidados', modalBody);
};
const pciExpressWhichIs = () => {
   createTitleWhich('PCI Express');
   const modalBody = document.getElementById('modalBody');
   modalBody.innerHTML = '';

   createImgWhich(motherBoardWich.img, '17', '14');
   creteCollapsible(motherBoardWich.whatIs, 'whatIs', 'O que é', modalBody);
   creteCollapsible(motherBoardWich.verifications, 'verifications', 'Cuidados', modalBody);
};

const romWhichIs = () => {
   createTitleWhich('Memória ROM');
   const modalBody = document.getElementById('modalBody');
   modalBody.innerHTML = '';

   createImgWhich(motherBoardWich.img, '17', '14');
   creteCollapsible(motherBoardWich.whatIs, 'whatIs', 'O que é', modalBody);
   creteCollapsible(motherBoardWich.verifications, 'verifications', 'Cuidados', modalBody);
};

const m2WhichIs = () => {
   createTitleWhich('Memória ROM');
   const modalBody = document.getElementById('modalBody');
   modalBody.innerHTML = '';

   createImgWhich(motherBoardWich.img, '17', '14');
   creteCollapsible(motherBoardWich.whatIs, 'whatIs', 'O que é', modalBody);
   creteCollapsible(motherBoardWich.verifications, 'verifications', 'Cuidados', modalBody);
};

const recorderWhichIs = () => {
   createTitleWhich('Memória RA');
   const modalBody = document.getElementById('modalBody');
   modalBody.innerHTML = '';

   createImgWhich(motherBoardWich.img, '17', '14');
   creteCollapsible(motherBoardWich.whatIs, 'whatIs', 'O que é', modalBody);
   creteCollapsible(motherBoardWich.verifications, 'verifications', 'Cuidados', modalBody);
};

const psuWhichIs = () => {
   createTitleWhich('Placa mãe');
   const modalBody = document.getElementById('modalBody');
   modalBody.innerHTML = '';

   createImgWhich(motherBoardWich.img, '17', '14');
   creteCollapsible(motherBoardWich.whatIs, 'whatIs', 'O que é', modalBody);
   creteCollapsible(motherBoardWich.verifications, 'verifications', 'Cuidados', modalBody);
};
