import {app, BrowserWindow} from 'electron'

app.on('ready', () => {
  const win = new BrowserWindow({
    show: false,
    transparent: true,
    frame: false,

    // An electron bug makes the bgcolor white on navigation/reload for #000000 and #00000000
    backgroundColor: '#00ffffff',
    // skipTaskbar: true,
    hasShadow: false,
    alwaysOnTop: true,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile(__dirname + '/html/index.html')
  console.log('initialized')

  win.on('ready-to-show', () => {
    win.show()
    console.log('showing')
  })
})