import { createContext } from "react";

export const ModalDispatchContenxt = createContext({
  open: () => {},
  close: () => {},
});

export const ModalStateContext = createContext([]);
