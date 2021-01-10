/* exported openModal, closeModal */

const openModal = () => {
   const modal = document.getElementById('modal');
   modal.classList.add('open');
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

