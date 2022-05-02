import styled from "@emotion/styled";

import Portal from "./Portal";

const Overlay = styled.div`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  position: fixed;
  z-index: 10;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  align-items: center;
  justify-content: center;
`;

const Dim = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;
`;

const Container = styled.div`
  width: ${({ width }) => (width ? width : "600px")};
  // height: ${({ height }) => (height ? height : "252px")};
  position: relative;
  z-index: 100;
  border-radius: 4px;
  background-color: #fff;
`;

const Modal = ({ children, width, height, isOpen, selector = "#modal-root" }) => {
  return (
    <Portal selector={selector}>
      <Overlay isOpen={isOpen}>
        <Dim />
        <Container
          width={width}
          // height={height}
        >
          {children}
        </Container>
      </Overlay>
    </Portal>
  );
};

export default Modal;
