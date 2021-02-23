/* exported mainLoaded */

const mainLoaded = () => {
   setBuildingPC();
   const titleTabs = Array.from(document.getElementsByClassName('titleTab'));
   disableTab(titleTabs);

   setDropZone();

   motherTradeVisual('center');
   continueConstruction();
};
