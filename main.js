const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({ show: false });

  win.loadFile('index.html');

  win.once('ready-to-show', () => {
    win.show();
    win.setFullScreen(true);
  });
}

app.whenReady().then(createWindow);`j`