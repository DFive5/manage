const state = {
  opended: sessionStorage.getItem("open")
    ? sessionStorage.getItem("open")
    : "false",
  msgIsShow: false,
  showDriver: localStorage.getItem("driver")
    ? localStorage.getItem("driver")
    : "yes"
};
const mutations = {
  SET_OPENED(state, payload) {
    state.opended = String(payload);
    sessionStorage.setItem("open", payload);
  },
  SET_MSGISOPEN(state) {
    state.msgIsShow = !state.msgIsShow;
  },
  SET_DRIVER(state, payload) {
    state.showDriver = payload;
    localStorage.setItem("driver", payload);
  }
};
export default {
  namespaced: true, //局部命名空间
  state,
  mutations
};
//lj
