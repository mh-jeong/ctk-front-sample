import styled from "@emotion/styled";
import { observer } from "mobx-react";

import useStore from "/mobx/store";

import Modal from "../Modal";
import { IoCloseOutline } from "react-icons/io5";

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  font-size: 20px;
  padding: 20px;
`;

const HeaderCloseButton = styled.div`
  font-size: 24px;
  padding: 20px;
  cursor: pointer;
`;

const ModalBody = styled.div`
  padding: 20px 20px 36px 20px;
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 20px;
`;

const ConfirmButton = styled.button`
  border: 1px solid transparent;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: 8px 16px;
  font-size: 15px;
  border-radius: 4px;
  margin-left: 8px;
  cursor: pointer;
  &:hover {
    background-color: #062f77;
  }
`;

const CloseButton = styled.button`
  border: 1px solid #202020;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 15px;
  background-color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #deebff;
  }
`;

const CommonModal = ({
  width = "460px",
  title = "",
  useHeaderClose = false,
  useFooter = true,
  content = "",
  isConfirmModal = false,
  closeButtonText = "닫기",
  confirmButtonText = "확인",
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
        <ModalHeader>
          <Title>{title}</Title>
          {(useHeaderClose || !useFooter) && (
            <HeaderCloseButton onClick={handleClose}>
              <IoCloseOutline />
            </HeaderCloseButton>
          )}
        </ModalHeader>
      )}
      <ModalBody>
        <div>{content}</div>
      </ModalBody>
      {useFooter && (
        <ModalFooter>
          {isConfirmModal && (
            <CloseButton onClick={handleCloseCallback || handleClose}>
              {closeButtonText}
            </CloseButton>
          )}
          <ConfirmButton onClick={handleConfirmCallback || handleClose}>
            {confirmButtonText}
          </ConfirmButton>
        </ModalFooter>
      )}
    </Modal>
  );
};

export default observer(CommonModal);
