/* exported openModal, closeModal */

const openModal = (typeModal, piece) => {
   const modal = document.getElementById('modal');
   modal.classList.add('open');
   switch (typeModal) {
   case 'filter':
      createModalFilter(piece);
      break;
   case 'whichIs':
      createModalWhichIs(piece);
      break;
   case 'moreInfo':
      createModalMoreInfo(piece);
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
