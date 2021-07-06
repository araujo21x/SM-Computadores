export function activatePlug(name, display) {
   console.log('entrou');
   const elementPlug = document.getElementById(name);
   elementPlug.style.display = display;
}
