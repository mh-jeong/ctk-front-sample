import { observable } from "mobx";

const commonStore = observable({
  menu: {
    tabNavigationItems: [],
    selectedMenuHref: "",
  },
  modal: {
    open: () => {},
    close: () => {},
  },
});

export default commonStore;
