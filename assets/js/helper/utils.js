/* eslint-disable max-len */
import {
   resetLocalStorage,
   getPCBuilding,
   getEvaluativeMode,
   getCable,
   getErrorReport,
} from '../data/localStorage.js';
import {openAlert, close} from '../alert.js';

// server para pegar o tipo da peça
export function cutId(string) {
   return string.slice(0, -3);
}

export function phantomDivRemove() {
   const div = Array.from(document.getElementsByClassName('hardwareItem'));
   div.map((item) => {
      if (item.firstChild.firstChild.childElementCount === 0) {
         item.parentNode.removeChild(item);
      }
   });
}

export function configGrid(tag, piece) {
   const div = document.getElementById(tag);
   div.className = 'dropMobile';
   div.style.gridColumn = piece.gridColumn;
   div.style.gridRow = piece.gridRow;
   if (!getEvaluativeMode()) {
      div.style.border = '2px solid #ff00ff';
   }
}

export async function request(url, method) {
   const response = await fetch(url, {
      method,
      headers: {'Content-Type': 'application/json'},
   });
   return response.json();
}

export function reset() {
   resetLocalStorage();
   location.reload();
}

export function generatePDF() {
   const studentName = document.getElementById('studentName').value;
   if (studentName.length > 0) {
      close();
      loading(true);

      const body = {
         ...getPCBuilding(),
         evaluativeMode: getEvaluativeMode(),
         cable: getCable(),
         error: getErrorReport(),
         studentName: studentName,
      };
      fetch('https://sm-computadores.onrender.com/finish', {
      // fetch('http://localhost:3000/finish', {
         method: 'POST',
         headers: {'Content-Type': 'application/json'},
         body: JSON.stringify(body),
      }).then((response) => {
         if (response.status === 200) {
            response.blob().then((blob) => {
               const url = window.URL.createObjectURL(blob);
               const a = document.createElement('a');
               a.href = url;
               a.download = 'arquivo.pdf';
               document.body.appendChild(a);
               a.click();
               a.remove();
            });
         } else {
            response.json().then((value) => {
               openAlert('confirmDanger', ' Erro', value.result.mensagem);
            });
         }
      });
      loading(false);
   } else {
      openAlert('confirmDanger', ' Erro', 'Nome não informado!');
   }
}

export function showSaveZone() {
   setTimeout(() => {
      document.getElementsByClassName('saveZone')[0].style.display = 'flex';
      document.getElementsByClassName('backButton')[0].style.display = 'none';
      document.getElementsByClassName('backButton')[0].style.display = 'none';
      document.getElementsByClassName('detailsHardware')[0].style.display = 'none';
      document.getElementById('titleSection').style.display = 'none';
      document.getElementById('droppableParts').style.display = 'none';
   }, 150);
}

export function hideSaveZone() {
   setTimeout(() => {
      document.getElementsByClassName('saveZone')[0].style.display = 'none';
      document.getElementsByClassName('backButton')[0].style.display = 'flex';
      document.getElementsByClassName('backButton')[0].style.display = 'flex';
      document.getElementsByClassName('detailsHardware')[0].style.display = 'flex';
      document.getElementById('titleSection').style.display = 'flex';
      document.getElementById('droppableParts').style.display = 'flex';
   }, 150);
}

export function loading(activate) {
   const modalLoading = document.getElementById('modalLoading');
   if (activate) modalLoading.classList.add('open');
   else modalLoading.classList.remove('open');
}

export function cablesZoneHelper() {
   if (!getEvaluativeMode()) {
      document.getElementById('plugPSU').style.border = '2px solid #29ffda';
      document.getElementById('plugSata01').style.border = '2px solid #29ffda';
      document.getElementById('plugSata02').style.border = '2px solid #29ffda';
      document.getElementById('plugSata03').style.border = '2px solid #29ffda';
      document.getElementById('plugSata04').style.border = '2px solid #29ffda';
      document.getElementById('plugRecord').style.border = '2px solid #29ffda';
      document.getElementById('plugRom1').style.border = '2px solid #29ffda';
      document.getElementById('plugRom2').style.border = '2px solid #29ffda';
      document.getElementById('plugCooler').style.border = '2px solid #29ffda';
   }
}
