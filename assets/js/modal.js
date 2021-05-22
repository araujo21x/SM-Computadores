import createModalFilter from './modals/filter.js';
import createModalMoreInfo from './modals/moreInfo.js';
import createModalWhichIs from './modals/whichIs.js';

export function openModal(typeModal, part) {
   const modal = document.getElementById('modal');
   modal.classList.add('open');

   switch (typeModal) {
   case 'filter':
      createModalFilter(part);
      break;
   case 'whichIs':
      createModalWhichIs(part);
      break;
   case 'moreInfo':
      createModalMoreInfo(part);
      break;
   };
}

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
