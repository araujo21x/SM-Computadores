const phantomDivRemove = () => {
  let box = Array.from(document.getElementsByClassName('box'))
  box.map(item => {
    if (item.childElementCount === 0) item.parentNode.removeChild(item)
  })
}