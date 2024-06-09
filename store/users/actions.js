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
    addPeoplePass({ commit }, data) {
        return this.$axios
            .$post("api/sub/addPeoplePass", data)
            .then((response) => {
                return Promise.resolve(response);
            })
            .catch((err) => {
                return Promise.reject(err);
            });
    },
    byIdCard({ commit }, data) {
        return this.$axios
            .$post("api/sub/byIdCard", data)
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
    genCer({ commit }, data) {
        return this.$axios
            .$post("api/sub/genCer", data)
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
    showPopSub({ commit }, data) {
        return this.$axios
            .$get("api/sub/ShowPopData")
            .then((response) => {
                return Promise.resolve(response);
            })
            .catch((err) => {
                return Promise.reject(err);
            });
    },
    selectSByAj({ commit }, data) {
        return this.$axios
            .$get("api/sub/selectSByAj")
            .then((response) => {
                return Promise.resolve(response);
            })
            .catch((err) => {
                return Promise.reject(err);
            });
    },
    allNews({ commit }, data) {
        return this.$axios
            .$get("api/new/allNews")
            .then((response) => {
                return Promise.resolve(response);
            })
            .catch((err) => {
                return Promise.reject(err);
            });
    },
    getUser({ commit }, data) {
        return this.$axios
            .$get("api/sub/getUser")
            .then((response) => {
                return Promise.resolve(response);
            })
            .catch((err) => {
                return Promise.reject(err);
            });
    },
    getSignature({ commit }, data) {
        return this.$axios
            .$get("api/sub/getSignature")
            .then((response) => {
                return Promise.resolve(response);
            })
            .catch((err) => {
                return Promise.reject(err);
            });
    },
    registerTea({ commit }, data) {
        return this.$axios
            .$post("api/reg/registerTea", data)
            .then((response) => {
                return Promise.resolve(response);
            })
            .catch((err) => {
                return Promise.reject(err);
            });
    },
    Logincheck({ commit }, data) {
        return this.$axios
            .$post("api/log/checkLog", data)
            .then((response) => {
                return Promise.resolve(response);
            })
            .catch((err) => {
                return Promise.reject(err);
            });
    },
    Detailselect({ commit }, data) {
        return this.$axios
            .$post("api/sub/Selectdetail", data)
            .then((response) => {
                return Promise.resolve(response);
            })
            .catch((err) => {
                return Promise.reject(err);
            });
    },
    addNew({ commit }, data) {
        return this.$axios
            .$post("api/new/tests", data)
            .then((response) => {
                return Promise.resolve(response);
            })
            .catch((err) => {
                return Promise.reject(err);
            });
    },
    insertSignature({ commit }, data) {
        return this.$axios
            .$post("api/sub/insertSignature", data)
            .then((response) => {
                return Promise.resolve(response);
            })
            .catch((err) => {
                return Promise.reject(err);
            });
    },
    deleteSig({ commit }, data) {
        return this.$axios
            .$post("api/sub/deleteSig", data)
            .then((response) => {
                return Promise.resolve(response);
            })
            .catch((err) => {
                return Promise.reject(err);
            });
    },
    insertRegisSub({ commit }, data) {
        return this.$axios
            .$post("api/sub/insertRegisSub", data)
            .then((response) => {
                return Promise.resolve(response);
            })
            .catch((err) => {
                return Promise.reject(err);
            });
    },
    handleSelectConfirm({ commit }, data) {
        return this.$axios
            .$post("api/sub/handleSelectConfirm", data)
            .then((response) => {
                return Promise.resolve(response);
            })
            .catch((err) => {
                return Promise.reject(err);
            });
    },
    handleExpdf({ commit }, data) {
        return this.$axios
            .$post("api/sub/handleExpdf", data)
            .then((response) => {
                return Promise.resolve(response);
            })
            .catch((err) => {
                return Promise.reject(err);
            });
    },
    // showSubDa({ commit }, data) {
    //   return this.$axios
    //     .$get("api/sub/showShowSub")
    //     .then((response) => {
    //       return Promise.resolve(response);
    //     })
    //     .catch((err) => {
    //       return Promise.reject(err);
    //     });
    // },
};