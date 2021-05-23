import {coolerZone} from './visualHardware.js';
import {getPCBuilding} from './data/localStorage.js';
import {listParts} from './listParts.js';
import {loading} from './helper/utils.js';

function hideTitleTabs() {
   const titleTabs = Array.from(document.getElementsByClassName('titleTab'));
   const sectionTabs = document.getElementById('partsTabs');
   sectionTabs.style.height = '100%';

   titleTabs.map((element) => element.style.display = 'none');
   document.getElementById('optionsLateralMenu').style.display = 'none';
}

export function openTab(title, tabId) {
   loading(true);
   const tabs = Array.from(document.getElementsByClassName('tab'));
   tabs.map((element) => element.style.display = 'none');
   hideTitleTabs();

   document.getElementById(tabId).style.display = 'flex';
   coolerZone(tabId);

   listParts(tabId, title);
   loading(false);
}

export function showTitleTabs() {
   const titleTabs = Array.from(document.getElementsByClassName('titleTab'));
   const sectionTabs = document.getElementById('partsTabs');
   sectionTabs.style.height = '78%';

   titleTabs.map((element) => element.style.display = 'inline');
   document.getElementById('optionsLateralMenu').style.display = 'flex';

   const tabs = Array.from(document.getElementsByClassName('tab'));
   tabs.map((element) => {
      element.innerHTML = '';
      element.style.display = 'none';
   });
}

export function disableTab(titleTabs) {
   const PCBuilding = getPCBuilding();

   titleTabs.map((titleTab) => {
      const typePiece = titleTab.id.slice(0, -5);
      titleTab.className = 'titleTab';

      if (PCBuilding[typePiece]) {
         if (Array.isArray(PCBuilding[typePiece])) {
            if (PCBuilding[typePiece].length > 0) {
               titleTab.className = 'titleTab docked';
            }
         } else {
            titleTab.className = 'titleTab docked';
         }
      }

      titleTab.disabled = false;
      if (titleTab.id === 'coolerTitle') {
         if (!PCBuilding.motherBoard || !PCBuilding.cpu) {
            titleTab.disabled = true;
         }
      } else {
         if (!PCBuilding.motherBoard && titleTab.id !== 'motherBoardTitle') {
            titleTab.disabled = true;
         }
      }
   });
}
