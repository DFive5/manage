import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";
const path = require("path");

Vue.use(Vuex);

const files = require.context("./modules", false, /\.js$/); //遍历module文件夹下所有的js文件并返回一个函数
let modules = {};
files.keys().forEach(key => {
  let name = path.basename(key, ".js"); //提取文件名不包含js(app,permission,user)
  modules[name] = files(key).default || files(key); //默认导出的模块
});
export default new Vuex.Store({
  modules,
  getters
});
//lq
