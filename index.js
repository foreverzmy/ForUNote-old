const {
  app, // 控制应用生命周期的模块。
  BrowserWindow, // 创建原生浏览器窗口的模块
} = require('electron');

require('electron-reload')(__dirname);

// 保持一个对于 window 对象的全局引用，不然，当 JavaScript 被 GC，window 会被自动地关闭
let win;

const createWindow = () => {
  // Create the browser window.
  win = new BrowserWindow({
    width: 1200,
    height: 800,
    frame: false,
    defaultFontSize: 16,
    minWidth: 1200,
    minHeight: 800,
    icon: `file://${__dirname}/dist/assets/icon.png`,
    defaultMonospaceFontSize: 16,
    defaultEncoding: "utf-8",
    webPreferences: {
      plugins: true
    }
  });
  // 加载应用的 index.html
  win.loadURL(`file://${__dirname}/dist/index.html`);
  // 打开开发工具
  win.webContents.openDevTools();
  // 当 window 被关闭，这个事件会被发出
  win.on('closed', () => win = null)
  win.on('ready-to-show', () => {
    win.show()
    win.focus()
  })
}
// 当 Electron 完成了初始化并且准备创建浏览器窗口的时候这个方法就被调用
app.on('ready', createWindow)
// 当所有窗口被关闭时，退出程序
app.on('window-all-closed', () => {
  // 在 OS X 上，通常用户在明确地按下 Cmd + Q 之前应用会保持活动状态
  process.platform !== 'darwin' && app.quit()
})
app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  win === null && createWindow()
})
