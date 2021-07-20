import createModalFilter from './modals/filter.js';
import createModalMoreInfo from './modals/moreInfo.js';
import createModalWhichIs from './modals/whichIs.js';

export async function openModal(typeModal, part) {
   const modal = document.getElementById('modal');
   modal.classList.add('open');
   const borderModal = document.getElementsByClassName('modal');

   switch (typeModal) {
   case 'filter':
      borderModal[0].style.border = '5px solid var(--primaryColor)';
      await createModalFilter(part);
      break;
   case 'whichIs':
      borderModal[0].style.border = '5px solid var(--primaryColor)';
      createModalWhichIs(part);
      break;
   case 'moreInfo':
      borderModal[0].style.border = '5px solid var(--primaryColor)';
      createModalMoreInfo(part);
      break;
   };
};

export function closeModal(event) {
   if (
      event.target.id === 'modal' ||
      event.target.className === 'close' ||
      event.target.className === 'cancelButton'
   ) {
      const modal = document.getElementById('modal');
      modal.classList.remove('open');
   };
};
