# Electron transparency demo

> A sandbox and demo/test environment before upgrading electron-transparency-mouse-fix to v2

```bash
npm install --save-dev
npm start
```

## Bugs for Electron 8.x

- Windows 10:
  - setIgnoreMouseEvents is lost after a reload
    (i think i had a workaround for this at some point)
- MacOS Catalina:
  - can't drop files into the app
    (probably can port the fix from electron-transparency-mouse-fix v1)
  - cursor doesn't always show up correctly when coming in from the border
