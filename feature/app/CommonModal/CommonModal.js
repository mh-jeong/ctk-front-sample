import { observer } from "mobx-react";
import { IoCloseOutline } from "react-icons/io5";

import useStore from "/mobx/store";

import Modal from "../../../components/common/Modal/Modal";
import * as S from "./CommonModal.styled";

const CommonModal = ({
  width = "460px",
  title = "",
  useHeaderClose = false,
  useFooter = true,
  content = "",
  isConfirmModal = false,
  closeButtonText = "Close",
  confirmButtonText = "Confirm",
  handleCloseCallback = null,
  handleConfirmCallback = null,
}) => {
  const { commonStore } = useStore();

  const handleClose = () => {
    commonStore.commonModal.close();
  };

  return (
    <Modal
      isOpen={commonStore.commonModal.isOpen}
      width={width}>
      {(title || useHeaderClose) && (
        <S.ModalHeader>
          <S.Title>{title}</S.Title>
          {(useHeaderClose || !useFooter) && (
            <S.HeaderCloseButton onClick={handleClose}>
              <IoCloseOutline />
            </S.HeaderCloseButton>
          )}
        </S.ModalHeader>
      )}
      <S.ModalBody>
        <div>{content}</div>
      </S.ModalBody>
      {useFooter && (
        <S.ModalFooter>
          {isConfirmModal && (
            <S.CloseButton onClick={handleCloseCallback || handleClose}>
              {closeButtonText}
            </S.CloseButton>
          )}
          <S.ConfirmButton onClick={handleConfirmCallback || handleClose}>
            {confirmButtonText}
          </S.ConfirmButton>
        </S.ModalFooter>
      )}
    </Modal>
  );
};

export default observer(CommonModal);
