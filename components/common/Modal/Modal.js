import * as S from "./Modal.styled";
import Portal from "./Portal";

const Modal = ({ children, width, height, isOpen, selector = "#modal-root" }) => {
  return (
    <Portal selector={selector}>
      <S.Overlay isOpen={isOpen}>
        <S.Dim />
        <S.Container
          width={width}
          // height={height}
        >
          {children}
        </S.Container>
      </S.Overlay>
    </Portal>
  );
};

export default Modal;
