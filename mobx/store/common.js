import { observable } from "mobx";

const commonStore = observable({
  menu: {
    tabNavigationItems: [],
    selectedMenuHref: "",
  },
  commonModal: {
    isOpen: false,
    open() {
      this.isOpen = true;
    },
    close() {
      this.isOpen = false;
    },
  },
});

export default commonStore;
