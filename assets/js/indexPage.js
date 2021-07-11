import {
   getEvaluativeMode,
   resetLocalStorage,
} from './data/localStorage.js';
(() =>{
   const trainingButton = document.getElementById('trainingButton');
   addStartFunction(trainingButton, false);
   const reviewButton = document.getElementById('reviewButton');
   addStartFunction(reviewButton, true);
})();

function addStartFunction(button, mode) {
   button.addEventListener('click', () =>{
      const evaluativeMode = getEvaluativeMode();
      if (evaluativeMode !== null) {
         if (evaluativeMode !== mode) {
            resetLocalStorage(mode);
         }
         window.location.href = '../../simulator.html';
      } else {
         resetLocalStorage(mode);
         window.location.href = '../../simulator.html';
      }
   });
}
