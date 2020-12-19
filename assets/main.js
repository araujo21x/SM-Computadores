let placaMae = {
  name: 'placaMae01',
  slotRam: 'ddr4',
  slotRamFreq: 2400,
}

let pcMontado = {
  placaMae: placaMae,
  cpu: null,
  ram: null,
  cooler: null,
  fonte: null,

}
function allowDrop(ev) {
  ev.preventDefault()
}

function drag(ev, comp) {
  ev.dataTransfer.setData("text", ev.target.id)
  ev.dataTransfer.setData("comp", JSON.stringify(comp))
}

function drop(ev) {
  ev.preventDefault();
  let data = ev.dataTransfer.getData("text")
  let comp = JSON.parse(ev.dataTransfer.getData("comp"))
  
  if (ev.target.id === 'save') {
    let parts = document.getElementById('parts')
    let div = document.createElement('div')
    div.className = 'box'
    div.appendChild(document.getElementById(data))
    parts.appendChild(div)
    phantomDivRemove()
  } else {
    if (ev.target.id.slice(0, 4) === 'drag') {
      alert('Já possuim uma peçã nesse slot!')
    } else {
      if (ev.target.id !== comp.type) {
        alert('essa peçã não encaixa!')
      } else {

        if (placaMae.slotRam !== comp.slotRam) {
          alert('modelo incompativel!')
        } else {
          if (placaMae.slotRamFreq !== comp.slotRamFreq) alert('pode apresentar mau funcionamento!')
          pcMontado.cpu = comp
          ev.target.appendChild(document.getElementById(data))
          phantomDivRemove()
        }

      }
    }
  }
}

