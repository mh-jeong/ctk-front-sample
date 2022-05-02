import { useMemo, useState } from "react";

import { ModalDispatchContenxt, ModalStateContext } from "./ModalContext";

const ModalsProvider = ({ children }) => {
  const [opendModals, setOpenedModals] = useState([]);

  const open = (Component, props) => {
    setOpenedModals((modals) => {
      return [...modals, { Component, props }];
    });
  };

  const close = (Component) => {
    setOpenedModals((modals) => {
      return modals.filter((modal) => {
        return modal.Component !== Component;
      });
    });
  };

  const dispatch = useMemo(() => ({ open, close }), []);

  return (
    <ModalStateContext.Provider value={opendModals}>
      <ModalDispatchContenxt.Provider value={dispatch}>{children}</ModalDispatchContenxt.Provider>
    </ModalStateContext.Provider>
  );
};

export default ModalsProvider;
