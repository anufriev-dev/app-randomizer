const {app ,BrowserWindow } = require('electron');

let win;

function createWindow(){
    win = new BrowserWindow({
        width: 615,
        height: 475,
    });
    win.loadFile(__dirname + '/index.html')
    
    // win.webContents.openDevTools();

    win.on('closed',() => win = null);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => app.quit());


