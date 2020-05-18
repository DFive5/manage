import $axios from "./index";

export function login(data) {
  const url = "/login";
  return $axios.post(url, data);
} //提交登录信息
export function getInfo() {
  const url = "/getInfo";
  return $axios.get(url);
} //返回个人信息
//lq
