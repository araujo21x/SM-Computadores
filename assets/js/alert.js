export function openAlert(typeAlert, title, text, cb) {
   const modal = document.getElementById('alert');
   modal.classList.add('openAlert');

   switch (typeAlert) {
   case 'confirm':
      confirmAlert(title, text, cb);
      break;
   case 'confirmDanger':
      confirmDangerAlert(title, text, cb);
      break;
   case 'confirmAttention':
      confirmAttentionAlert(title, text, cb);
      break;
   }
}

export function closeAlert(event) {
   if (
      event.target.id === 'alert'
   ) {
      close();
   };
}

function confirmAlert(title, text, cb) {
   const alert = document.getElementsByClassName('alert');
   alert[0].style.boxShadow = '0 0 0 6px var(--primaryColor)';

   const alertButton = document.getElementById('alertButton');
   alertButton.innerHTML = '';

   createTile(title, 'primaryColor', 'fas fa-check-circle');
   createBody(text);
   alertButton.appendChild(createButton('Cancelar', 'cancelButton', close));
   alertButton.appendChild(createButton('Confirmar', 'normalButton', cb));
}

function confirmDangerAlert(title, text, cb) {
   const alert = document.getElementsByClassName('alert');
   alert[0].style.boxShadow = '0 0 0 6px var(--errorColor)';

   const alertButton = document.getElementById('alertButton');
   alertButton.innerHTML = '';

   createTile(title, 'errorColor', 'fas fa-exclamation-triangle');
   createBody(text);
   if (!cb) {
      alertButton.appendChild(createButton('Confirmar', 'cancelButton', close));
   } else {
      alertButton.appendChild(createButton('Cancelar', 'neutralButton', close));
      alertButton.appendChild(createButton('Confirmar', 'cancelButton', cb));
   }
}

function confirmAttentionAlert(title, text, cb) {
   const alert = document.getElementsByClassName('alert');
   alert[0].style.boxShadow = '0 0 0 6px var(--incompatible)';

   const alertButton = document.getElementById('alertButton');
   alertButton.innerHTML = '';

   createTile(title, 'incompatible', 'fas fa-exclamation-triangle');
   createBody(text);
   if (!cb) {
      alertButton.appendChild(createButton('Confirmar', 'attentionButton',
         close));
   } else {
      alertButton.appendChild(createButton('Cancelar', 'neutralButton', close));
      alertButton.appendChild(createButton('Confirmar', 'attentionButton', cb));
   }
}

function createTile(title, color, icon) {
   const alertTitle = document.getElementById('alertTitle');
   alertTitle.innerHTML = '';
   alertTitle.style.color = `var(--${color})`;

   const i = document.createElement('i');
   i.className = icon;
   alertTitle.appendChild(i);

   const h3 = document.createElement('h3');
   h3.innerText = title;
   alertTitle.appendChild(h3);
}

function createBody(text) {
   const alertBody = document.getElementById('alertBody');
   alertBody.innerHTML = text;
}

function createButton(text, type, cb) {
   const button = document.createElement('button');
   button.className = type;
   button.innerText = text;
   button.addEventListener('click', function() {
      cb();
   });
   return button;
}

export function close() {
   const modal = document.getElementById('alert');
   modal.classList.remove('openAlert');
}
