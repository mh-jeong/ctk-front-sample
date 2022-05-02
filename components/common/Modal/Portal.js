import { createPortal } from "react-dom";

const Portal = ({ children, selector }) => {
  if (typeof window !== "object") {
    return <></>;
  }

  console.log("@", document.querySelector(selector));

  const rootElement = selector && document.querySelector(selector);
  // const rootElement = selector && "";

  return <>{rootElement ? createPortal(children, rootElement) : children}</>;
};

export default Portal;
