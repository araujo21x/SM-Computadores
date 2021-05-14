import {openTab} from '../tab.js';

export default function(partName, title, img) {
   const sectionTag = document.getElementById('partsTabs');
   sectionTag.appendChild(menuButton(partName, title, img));
   sectionTag.appendChild(menuTab(partName));
}

function menuButton(partName, title, img) {
   // tags para cada item do lateral menu
   const buttonTag = document.createElement('button');
   const imgTag = document.createElement('img');
   const pTag = document.createElement('p');


   // construção do botão
   buttonTag.id = `${partName}Title`;
   buttonTag.className = 'titleTab';
   buttonTag.addEventListener('click', function() {
      openTab(title, `${partName}Tab`);
   });

   imgTag.src = img;
   imgTag.style.width = '60%';
   imgTag.style.height = '60%';

   pTag.innerText = title;

   buttonTag.appendChild(imgTag);
   buttonTag.appendChild(pTag);

   return buttonTag;
}

function menuTab(partName) {
   const divTag = document.createElement('div');
   divTag.id = `${partName}Tab`;
   divTag.className = 'tab';

   return divTag;
}
