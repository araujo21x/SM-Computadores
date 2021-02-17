/* exported  drag, drop, allowDrop, dropSave*/
const drag = (event, piece) => {
   event.dataTransfer.setData('text', event.target.id);
   event.dataTransfer.setData('piece', JSON.stringify(piece));
};

const allowDrop = (event) => {
   event.preventDefault();
};

const drop = (event) => {
   event.preventDefault();
   const data = event.dataTransfer.getData('text');
   const piece = JSON.parse(event.dataTransfer.getData('piece'));

   if (piece.type === 'motherBoard') {
      installMotherboard(piece);
   } else {
      if (checkSlot(event.target.id, piece.type)) {
         switch (checkCompatibility(piece)) {
         case 'compatible':
            compatible(event, data, piece);
            break;
         case 'malfunction':
            malfunction(event, data, piece);
            break;
         case 'incompatible':
            incompatible();
            break;
         }
      } else {
         if (event.target.id.slice(0, 4) === 'drag') {
            alert('já possui peçã retire a atual');
         } else {
            alert('Esse não é o local da peçã');
         }
      }
   }
   coolerZone();
};

const compatible = (event, data, piece) => {
   event.target.appendChild(document.getElementById(data));
   pieceSpecificity(piece.type, data, piece, event.target.id);
   phantomDivRemove();
   setBuildingPC(piece, event.target.id);

   // liberar botoes do menu
   const titleTabs = Array.from(document.getElementsByClassName('titleTab'));
   disableTab(titleTabs);
};

const malfunction = (event, data, piece) => {
   alert('Pode apresentar mau funcionamento ou perda de desempenho');
   event.target.appendChild(document.getElementById(data));
   pieceSpecificity(piece.type, data, piece, event.target.id);
   phantomDivRemove();
   setBuildingPC(piece, event.target.id);

   // liberar botoes do menu
   const titleTabs = Array.from(document.getElementsByClassName('titleTab'));
   disableTab(titleTabs);
};

const incompatible = () => {
   alert('Não compativel com a placa mãe!');
};

const dropSave = (event, typeTab) => {
   event.preventDefault();
   const data = event.dataTransfer.getData('text');
   const piece = JSON.parse(event.dataTransfer.getData('piece'));

   const imgDelete = document.getElementById(data);
   imgDelete.parentNode.removeChild(imgDelete);

   if (piece.type === typeTab) {
      document.getElementById(`${typeTab}Tab`).appendChild(hardwareItem(piece));
   }
   deleteBuildingPC(piece);
   phantomDivRemove();

   const titleTabs = Array.from(document.getElementsByClassName('titleTab'));
   disableTab(titleTabs);
};

const installMotherboard = (piece) => {
   setBuildingPC(piece);
   motherboardMode();
   phantomDivRemove();
   pieceSpecificity(piece.type);
   // liberar botoes do menu
   const titleTabs = Array.from(document.getElementsByClassName('titleTab'));
   disableTab(titleTabs);
};

const checkSlot = (idSection, type) => {
   let answer = false;

   if (idSection.slice(idSection.length - 2, idSection.length - 1) === '_') {
      const id = idSection.slice(0, idSection.length - 2);
      if (id === type) answer = true;
   }
   if (idSection === type) answer = true;

   return answer;
};

const pieceSpecificity = (type, data, piece, slot) => {
   switch (type) {
   case 'pciExpress':
      pciExpressSpecificity(data, piece.dropImage);
      break;
   case 'ram':
      ramSpecificity(slot, piece.dropImage);
      break;
   case 'powerSupply':
      tradeImagem(data, piece.dropImage);
      break;
   case 'rom':
      tradeImagem(data, piece.dropImage);
      break;
   case 'recorder':
      tradeImagem(data, piece.dropImage);
      break;
   case 'm2':
      tradeImagem(data, piece.dropImage);
      break;
   case 'motherBoard':
      motherBoardSpecificity();
      break;
   }
};
