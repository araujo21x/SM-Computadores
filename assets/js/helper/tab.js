const openTab = (event, hardware) => {
  let tabs = Array.from(document.getElementsByClassName("tab"))
  let titleTabs = Array.from(document.getElementsByClassName("titleTab"))

  tabs.map(element => element.style.display = "none")
  titleTabs.map(element => element.className = element.className.replace(" active", ""))
  document.getElementById(hardware).style.display = "block";

  let joao = document.createElement('div')
  joao.className = "titleTab"
  joao.innerHTML = 'sdfasdfasdfasdf'
  event.currentTarget.className += " active";
}

const disableTab = (titleTabs) => {
  let buildingPC = getBuildingPC()
  
  titleTabs.map(titleTab => {
    titleTab.disabled = false
    if (titleTab.id === 'coolerTitle') {
      if (!buildingPC.motherBoard || !buildingPC.cpu) titleTab.disabled = true
    } else {
      if (!buildingPC.motherBoard && titleTab.id !== 'motherBoardTitle') titleTab.disabled = true
    }
  })
}

