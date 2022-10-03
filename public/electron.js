const electron = require("electron");
const { app, BrowserWindow } = electron;
const path = require("path");
const isDev = require("electron-is-dev");

let mainWindow = null;
app.on("ready", createWindow);
app.on("window-all-closed", function () {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
app.on("activate", function () {
  if (mainWindow === null) {
    createWindow();
  }
});
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1128,
    height: 640,
    minWidth: 1128,
    minHeight: 640,
    title: "Management App",
    // Hide The Frame
    frame: false,
    transparent: true,
  });
  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );
  mainWindow.on("closed", function () {
    mainWindow = null;
  });
  mainWindow.on("page-title-updated", function (e) {
    e.preventDefault();
  });
}
