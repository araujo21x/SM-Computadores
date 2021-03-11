/* exported openTab, disableTab,showTitleTabs */

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
   // aqui vou mudar a cor para verde
   // se tiver a peçã(confirma mas acho que é aqui)
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
   tabs.map((element) => element.style.display = 'none');
};
