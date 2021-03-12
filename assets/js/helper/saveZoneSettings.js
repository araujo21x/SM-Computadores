/* exported showSaveZone, hideSaveZone */

const showSaveZone = () => {
  setTimeout(() => {
    document.getElementsByClassName('saveZone')[0].style.display = 'flex';
    document.getElementsByClassName('backButton')[0].style.display = 'none';
    document.getElementsByClassName('backButton')[0].style.display = 'none';
    document.getElementsByClassName('detailsHardware')[0].style.display = 'none';
    document.getElementById('titleSection').style.display = 'none';
    document.getElementById('dropableParts').style.display = 'none';

    
  }, 150)

};

const hideSaveZone = () => {
  setTimeout(() => {
    document.getElementsByClassName('saveZone')[0].style.display = 'none';
    document.getElementsByClassName('backButton')[0].style.display = 'flex';
    document.getElementsByClassName('backButton')[0].style.display = 'flex';
    document.getElementsByClassName('detailsHardware')[0].style.display = 'flex';
    document.getElementById('titleSection').style.display = 'flex';
    document.getElementById('dropableParts').style.display = 'flex';
  }, 150)

};