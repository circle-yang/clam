/*
 * @Description: 
 * @Author: yanghuan
 * @Date: 2022-09-26 17:50:28
 * @LastEditTime: 2022-09-26 17:53:44
 * @Last Modified by: yanghuan
 * @packageDocumentation: 
 * @module: 
 * @category: 
 */
// 所有Node.js API都可以在与加载过程中使用
// 它拥有与Chrome扩展一样的沙盒
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
})