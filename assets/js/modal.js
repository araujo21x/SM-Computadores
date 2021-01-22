/* exported openModal, closeModal */

const openModal = (typeModal, piece) => {
   const modal = document.getElementById('modal');
   modal.classList.add('open');

   switch (typeModal) {
   case 'filter':
      filter(piece);
      break;
   case 'whichIs':
      whichIs(piece);
      break;
   case 'moreInfo':
      moreInfo(piece);
      break;
   };
};

const closeModal = (event) => {
   if (
      event.target.id === 'modal' ||
      event.target.className === 'close' ||
      event.target.className === 'cancelButton'
   ) {
      const modal = document.getElementById('modal');
      modal.classList.remove('open');
   };
};

const filter = (piece) =>{
   console.log('filter');
};

const whichIs = (piece) =>{
   console.log('whichIs');
};

const moreInfo = (piece) =>{
   console.log('moreInfo');
};
