/*
 * @Description:
 * @Author: yanghuan
 * @Date: 2022-09-26 17:26:49
 * @LastEditTime: 2022-09-26 18:46:22
 * @Last Modified by: yanghuan
 * @packageDocumentation:
 * @module:
 * @category:
 */
const { app, BrowserWindow } = require("electron");
const path = require("path");

const createWindow = () => {
  // 创建浏览器窗口
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    icon: path.join(__dirname, "public/clam.png"),
    // webPreferences: {
    //   preload: path.resolve(__dirname, "preload.ts"),
    // },
  });

  // 加载 index.html
  mainWindow.loadFile("dist/index.html");

  // 打开开发工具
  mainWindow.webContents.openDevTools();
};

// electron初始化完成
app.whenReady().then(() => {
  // electron初始化完成后创建浏览器窗口
  createWindow();

  app.on("activate", () => {
    // 通常在macOS上，当点击dock中的应用程序图标四，如果没有打开的窗口，那么程序会重新创建一个窗口
    if (BrowserWindow.getAllWindows.length === 0) {
      createWindow();
    }
  });

  app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
      app.quit();
    }
  });
});
