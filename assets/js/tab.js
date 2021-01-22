/* exported openTab, disableTab */

const openTab = (event, hardware) => {
   const tabs = Array.from(document.getElementsByClassName('tab'));
   const titleTabs = Array.from(document.getElementsByClassName('titleTab'));

   tabs.map((element) => element.style.display = 'none');
   titleTabs.map((element) => {
      element.className = element.className.replace(' active', '');
   });
   document.getElementById(hardware).style.display = 'block';
   event.currentTarget.className += ' active';

   index(hardware);
};

const disableTab = (titleTabs) => {
   const buildingPC = getBuildingPC();

   titleTabs.map((titleTab) => {
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
