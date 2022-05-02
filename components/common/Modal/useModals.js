import { useContext } from "react";

import { ModalDispatchContenxt } from "./ModalContext";

const useModals = () => {
  const { open, close } = useContext(ModalDispatchContenxt);

  const openModal = (Component, props) => {
    open(Component, props);
  };

  const closeModal = (Component) => {
    close(Component);
  };

  return {
    openModal,
    closeModal,
  };
};

export default useModals;
