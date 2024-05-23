const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow () {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 1000,
    height: 800,
  //   webPreferences: {
  //     preload: path.join(__dirname, '/src/js/preload.js'), // Ensure the correct path to preload.js
  //     contextIsolation: true, // Important for security and ensuring contextBridge works
  //     enableRemoteModule: false // Optional, for added security
  // }
  });

  // and load the index.html of the app.
  // win.loadFile('./src/auth/login.html');
  win.loadFile('src/dashboard.html');
}
// C:/Users/Windows 11/test-ele/src/dashboard.html

// app.whenReady().then(createWindow);
app.whenReady().then(() => {
  createWindow();
}).catch(err => {
  console.error('Failed to create window:', err);
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
