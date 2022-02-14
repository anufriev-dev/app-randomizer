const {app ,BrowserWindow } = require('electron');

let win;

function createWindow(){
    win = new BrowserWindow({
        width: 800,
        height: 690,
        icon: 'src/img/ico.png'
    });
    win.loadFile(__dirname + '/index.html')
    
    // win.webContents.openDevTools();

    win.on('closed',() => win = null);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => app.quit());


