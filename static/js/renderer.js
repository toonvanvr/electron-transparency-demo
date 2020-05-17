"use strict";
function dragstart(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
}
function dragover(event) {
    event.target.classList.add('hovering');
    event.preventDefault();
    if (event.dataTransfer) {
        event.dataTransfer.dropEffect = 'move';
    }
}
function dragout(event) {
    event.target.classList.remove('hovering');
}
function drop(event) {
    const target = event.target;
    const dataTransfer = event.dataTransfer;
    const source = document.getElementById(dataTransfer.getData('text/plain'));
    target.classList.remove('hovering');
    target.innerHTML = '';
    target.appendChild(source);
    event.preventDefault();
}
function dropfile(event) {
    const target = event.target;
    const dataTransfer = event.dataTransfer;
    target.classList.remove('hovering');
    target.classList.remove('failed');
    target.classList.add('success');
    for (const file of dataTransfer.files) {
        target.innerHTML = file.name;
        return;
    }
    target.classList.remove('success');
    target.classList.add('failed');
    target.innerHTML = 'FILES!!!';
}
function makefile(event) {
    const data = event.dataTransfer;
    const target = event.target;
    if (target.classList.contains('success')) {
        data.setData('DownloadURL', 'text/plain:generated-file.txt:data:text/plain;base64,' + btoa(`You dropped a file called ${target.innerHTML}`));
    }
    else {
        event.preventDefault();
    }
}
