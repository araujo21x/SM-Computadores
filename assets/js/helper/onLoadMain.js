/* exported mainLoaded */

const mainLoaded = () => {
   setBuildingPC();
   const titleTabs = Array.from(document.getElementsByClassName('titleTab'));
   disableTab(titleTabs);

   motherTradeVisual('center');
   continueConstruction();
};
