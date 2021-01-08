const mainLoaded = () => {
  setBuildingPC({ motherBoard: 1, cpu: 0, ram: null, cooler: null, fonte: null })
  let titleTabs = Array.from(document.getElementsByClassName("titleTab"))
  disableTab(titleTabs)
}