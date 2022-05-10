import authStore from "./auth";
import commonStore from "./common";

const useStore = () => {
  return { commonStore, authStore };
};

export default useStore;
