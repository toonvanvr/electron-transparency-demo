const {remote} = require('electron')
const win = remote.getCurrentWindow()
const html = document.documentElement

function checkPointer (event: PointerEvent | DragEvent) {
  if (event.target === html || event.target === document) {
    win.setIgnoreMouseEvents(true, {forward: true})
    html.classList.remove('listening')
    if (event.type === 'pointerover' && (event as PointerEvent).pressure === 0.5) {
      console.log('ADDING POINTERMOVE EVENT LISTENER')
      document.addEventListener('pointermove', dropmove)
    }
  } else {
    win.setIgnoreMouseEvents(false)
    html.classList.add('listening')
  }
}
document.addEventListener('pointerover', checkPointer)
document.addEventListener('pointerleave', checkPointer)
// HTML doesn't receive drag pointer events when setIgnoreMouseEvents is true on macOs Catalina

// TODO: work this out
function dropmove (event: PointerEvent) {
  if (event.pressure === 0.5) {
    console.log('POINTERMOVE')
    // requestAnimationFrame(getPosition)
  } else {
    console.log('STOPPING POINTERMOVE')
    win.setIgnoreMouseEvents(true, {forward: true})
    document.removeEventListener('pointermove', dropmove)
  }
}

// document.addEventListener('pointercancel', () => console.log(event?.type, (event as PointerEvent).pressure))
// document.addEventListener('pointerdown', () => console.log(event?.type, (event as PointerEvent).pressure))
// document.addEventListener('pointerenter', () => console.log(event?.type, (event as PointerEvent).pressure))
// document.addEventListener('pointerleave', () => console.log(event?.type, (event as PointerEvent).pressure))
// document.addEventListener('pointermove', () => console.log(event?.type, (event as PointerEvent).pressure))
// document.addEventListener('pointerout', () => console.log(event?.type, (event as PointerEvent).pressure))
// document.addEventListener('pointerover', () => console.log(event?.type, (event as PointerEvent).pressure))
// document.addEventListener('pointerup', () => console.log(event?.type, (event as PointerEvent).pressure))

// document.addEventListener('mousedown', event => console.log(event.type))
// document.addEventListener('mouseenter', event => console.log(event.type))
// document.addEventListener('mouseleave', event => console.log(event.type))
// document.addEventListener('mousemove', event => console.log(event.type))
// document.addEventListener('mouseout', event => console.log(event.type))
// document.addEventListener('mouseover', event => console.log(event.type))
// document.addEventListener('mouseup', event => console.log(event.type))

// document.addEventListener('drag', () => console.log(event?.type))
// document.addEventListener('dragend', () => console.log(event?.type))
// document.addEventListener('dragenter', () => console.log(event?.type))
// document.addEventListener('dragexit', () => console.log(event?.type))
// document.addEventListener('dragleave', () => console.log(event?.type))
// document.addEventListener('dragover', () => console.log(event?.type))
// document.addEventListener('dragstart', () => console.log(event?.type))
