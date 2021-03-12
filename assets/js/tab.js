/* exported openTab, disableTab, showTitleTabs */

const openTab = (title, hardware) => {
   const tabs = Array.from(document.getElementsByClassName('tab'));
   tabs.map((element) => element.style.display = 'none');
   hideTitleTabs();
   document.getElementById(hardware).style.display = 'flex';
   coolerZone(hardware);
   index(hardware, title);
};

const disableTab = (titleTabs) => {
   const buildingPC = getBuildingPC();

   titleTabs.map((titleTab) => {
      const typePiece = titleTab.id.slice(0, -5);
      titleTab.className = 'titleTab';

      if (buildingPC[typePiece]) {
         if (Array.isArray(buildingPC[typePiece])) {
            if (buildingPC[typePiece].length > 0) {
               titleTab.className = 'titleTab docked';
            }
         } else {
            titleTab.className = 'titleTab docked';
         }
      }

      titleTab.disabled = false;
      if (titleTab.id === 'coolerTitle') {
         if (!buildingPC.motherBoard || !buildingPC.cpu) {
            titleTab.disabled = true;
         }
      } else {
         if (!buildingPC.motherBoard && titleTab.id !== 'motherBoardTitle') {
            titleTab.disabled = true;
         }
      }
   });
};

const hideTitleTabs = () => {
   const titleTabs = Array.from(document.getElementsByClassName('titleTab'));
   const sectionTabs = document.getElementById('partsTabs');
   sectionTabs.style.height = '100%';

   titleTabs.map((element) => element.style.display = 'none');
   document.getElementById('optionsLateralMenu').style.display = 'none';
};

const showTitleTabs = () => {
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
};
