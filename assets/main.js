let placaMae = {
  name: 'placaMae01',
  slotRam: 'ddr4',
  slotRamFreq: 2400,
}

let pcMounted = { ram: null }

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev, comp) {
  ev.dataTransfer.setData("text", ev.target.id);
  ev.dataTransfer.setData("comp", JSON.stringify(comp));
}

function drop(ev) {
  //verificar se tem um appendChild se tiver pegar o ele e salvar numa variavel e remover ele caso a peçã der erro adicionar ele de voltar
  // se não for adicionar ela na lista e adicionar a nova no lugar

  // pensar no sequinte para substituir usar uma variavel para salvar a tag, apagar ela da lista de menu e modificar a background da div,
  // caso mude e seja igual fazer uma verificação para ver se tem essa variavel se tem da um append child na lista de peçãs e substiruir pela nova peçã o back groud e nesse objeto
  ev.preventDefault();
  let data = ev.dataTransfer.getData("text");
  let comp = JSON.parse(ev.dataTransfer.getData("comp"));

  if (ev.target.id !== comp.type) alert('essa peçã não encaixa!')
  else {
    if (placaMae.slotRam !== comp.slotRam) alert('modelo incompativel!')
    else {
      if (placaMae.slotRamFreq !== comp.slotRamFreq) alert('pode apresentar mau funcionamento!')
      let piece = document.getElementById(ev.target.id)
      piece.style.background = `url('${comp.url}') center / cover no-repeat`
      piece.style.backgroundSize = '90% 90%'
      if (pcMounted.ram) document.getElementsByClassName('box')[0].appendChild(pcMounted.ram)
      let newPiece = document.getElementById(data)
      pcMounted.ram = newPiece
      newPiece.parentNode.removeChild(newPiece)

      // ev.target.appendChild(document.getElementById(data));
    }

  }


}

