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

   if (event.target.id === piece.type) {
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
};

const compatible = (event, data, piece) => {
   event.target.appendChild(document.getElementById(data));
   phantomDivRemove();
   setBuildingPC(piece);
};

const malfunction = (event, data, piece) => {
   alert('Pode apresentar mau funcionamento ou perda de desempenho');
   event.target.appendChild(document.getElementById(data));
   phantomDivRemove();
   setBuildingPC(piece);
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

   deleteBuildingPC(piece, typeTab);
   phantomDivRemove();
};
