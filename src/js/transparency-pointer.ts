const {remote} = require('electron')
const win = remote.getCurrentWindow()
const html = document.documentElement

function checkPointer (event: PointerEvent) {
  if (event.target === html || event.target === document) {
    win.setIgnoreMouseEvents(true, {forward: true})
    html.classList.remove('listening')
  } else {
    win.setIgnoreMouseEvents(false)
    html.classList.add('listening')
  }
}

html.addEventListener('pointerover', checkPointer)
html.addEventListener('pointerleave', checkPointer)
