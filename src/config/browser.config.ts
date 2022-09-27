/*
 * @Description: 配置主窗口和编辑窗口环境配置、宽高等等，以及要显示的主页面
 * @Author: yanghuan
 * @Date: 2022-09-27 14:37:41
 * @LastEditTime: 2022-09-27 14:57:55
 * @Last Modified by: yanghuan
 * @packageDocumentation:
 * @module:
 * @category:
 */

const globalEnv = process.env.NODE_ENV;

const winURL =
  globalEnv === "development"
    ? "http://localhost:5173"
    : `file://${__dirname}/index.html`;

export default { winURL };
