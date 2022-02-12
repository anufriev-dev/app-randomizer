const {app ,BrowserWindow } = require('electron');

let win;

function createWindow(){
    win = new BrowserWindow({
        width: 1000,
        height: 680,
    });
    win.loadFile(__dirname + '/index.html')
    
    // win.webContents.openDevTools();

    win.on('closed',() => win = null);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => app.quit());


