const {app ,BrowserWindow } = require('electron');
if (require('electron-squirrel-startup')) return app.quit();

let win;

function createWindow(){
    win = new BrowserWindow({
        width: 800,
        height: 690,
        icon: 'src/img/icon.ico',
    });
    win.loadFile(__dirname + '/index.html')
    win.setMenuBarVisibility(false);
    // win.webContents.openDevTools();

    win.on('closed',() => win = null);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => app.quit());


