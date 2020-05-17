function dragstart(event: DragEvent) {
  (event.dataTransfer as DataTransfer).setData('text/plain', (event.target as HTMLElement).id)
}

function dragover(event: DragEvent) {
  (event.target as HTMLElement).classList.add('hovering')
  event.preventDefault()
  if (event.dataTransfer) {
    event.dataTransfer.dropEffect = 'move'
  }
}

function dragout(event: DragEvent) {
  (event.target as HTMLElement).classList.remove('hovering')
}

function drop(event: DragEvent) {
  const target = event.target as HTMLElement
  const dataTransfer = event.dataTransfer as DataTransfer
  const source = document.getElementById(dataTransfer.getData('text/plain')) as HTMLElement
  target.classList.remove('hovering')
  target.innerHTML = ''
  target.appendChild(source)
  event.preventDefault()
}

function dropfile(event: DragEvent) {
  const target = event.target as HTMLElement
  const dataTransfer = event.dataTransfer as DataTransfer

  target.classList.remove('hovering')
  target.classList.remove('failed')
  target.classList.add('success')

  for (const file of dataTransfer.files) {
    target.innerHTML = file.name
    return
  }

  target.classList.remove('success')
  target.classList.add('failed')
  target.innerHTML = 'FILES!!!'
}

function makefile (event: DragEvent) {
  const data = event.dataTransfer as DataTransfer
  const target = event.target as HTMLElement
  if (target.classList.contains('success')) {
    data.setData('DownloadURL', 'text/plain:generated-file.txt:data:text/plain;base64,' + btoa(`You dropped a file called ${target.innerHTML}`));
  } else {
    data.setData('DownloadURL', 'text/plain:generated-file.txt:data:text/plain;base64,' + btoa(`There was no file dropped yet`));
  }
}