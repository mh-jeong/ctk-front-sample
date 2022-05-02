import { observable } from "mobx";

const authStore = observable({
  accountId: null,
  logIn(id) {
    this.accountId = id;
  },
});

export default authStore;
