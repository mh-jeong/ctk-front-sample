import commonStore from "./common";
import authStore from "./auth";

const useStore = () => {
  return { commonStore, authStore };
};

export default useStore;
