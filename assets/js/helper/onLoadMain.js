const mainLoaded = () => {
  let titleTabs = Array.from(document.getElementsByClassName("titleTab"))
  disableTab(titleTabs)
  setBuildingPC({ motherBoard: 1, cpu: 0, ram: null, cooler: null, fonte: null })
}