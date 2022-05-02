import { observable } from "mobx";

const commonStore = observable({
  menu: {
    tabNavigationItems: [],
    selectedMenuHref: "",
  },
});

export default commonStore;
