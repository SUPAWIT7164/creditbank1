export default {
  //   checkAuth() {
  //     return localStorage.getItem("token");
  //   },

  registerData({ commit }, data) {
    return this.$axios
      .$post("api/reg/registerData", data)
      .then((response) => {
        return Promise.resolve(response);
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  },
  addSub({ commit }, data) {
    return this.$axios
      .$post("api/sub/addSub", data)
      .then((response) => {
        return Promise.resolve(response);
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  },
  approveSub({ commit }, data) {
    return this.$axios
      .$post("api/sub/approveSub", data)
      .then((response) => {
        return Promise.resolve(response);
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  },
  cancelSub({ commit }, data) {
    return this.$axios
      .$post("api/sub/cancelSub", data)
      .then((response) => {
        return Promise.resolve(response);
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  },
  listSub({ commit }, data) {
    return this.$axios
      .$get("api/sub/listSub_nonap")
      .then((response) => {
        return Promise.resolve(response);
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  },
};
