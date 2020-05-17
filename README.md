# Electron transparency demo

> A sandbox and demo/test environment before upgrading electron-transparency-mouse-fix to v2

```bash
npm install --save-dev
npm start
```

## Checklist

|                             **Status for release 2** | Windows | macOS | Linux |
|-----------------------------------------------------:|:-------:|:-----:|:-----:|
| **Transparency on reload**                           |    OK   |   OK  |   ?   |
| **Click through elements**                           |    OK   |   OK  |   ?   |
| **Click through holes surrounded by clickable area** |   N/A   |  N/A  |  N/A  |
| **CSS, no need for custom JS**                       |    OK   |   OK  |   OK  |
| **Drag text from OS onto input field**               |    ?    |   ?   |   ?   |
| **Drag file from JS to JS**                          |    ?    |   ?   |   ?   |
| **Drag file from OS to JS**                          |    OK   |  WIP  |   ?   |
| **Drag file from OS (hovered by window) to JS**      |    OK   |  WIP  |   ?   |
| **Drag file from JS to OS (hovered by window)**      |    ?    |  TODO |   ?   |
| **Disabled inputs don't work**                       |    ?    |   ?   |   ?   |
| **Enabled inputs work**                              |    ?    |   ?   |   ?   |
| **Hover effects for enabled items**                  |    ?    |   ?   |   ?   |
| **No hover effects for disabled items**              |    ?    |   ?   |   ?   |

## WIP

- MacOS Catalina
  - Can't drag stuff into the application: drag events are eaten by `setIgnoreMouseEvents` :(  
    solution: requestAnimationFrame polling (ETMF style)
    > does catch drag events on window enter (pointer.pressure===.5)  
    > catches a mousemove or pointerover 

- Windows 10:
  - setIgnoreMouseEvents is lost after a reload (same fix as macos catalina drag event eater: polling)

## Bugs for Electron 8.x

- MacOS Catalina:
  - cursor doesn't always show up correctly when coming in from the border  
    TODO: check on windows
- All platforms:
  - opening the devTools (even detached) causes irregular behavior
    prefer using the vscode debugger (see .vscode/launch.json)
  - conditional: always-on-top is not always on top? (vscode-electron?)
