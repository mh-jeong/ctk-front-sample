import { observable } from "mobx";

const commonStore = observable({
  tabNavigationItems: [],
  pathname: "",
});

export default commonStore;
