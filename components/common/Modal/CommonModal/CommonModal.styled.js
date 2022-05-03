import styled from "@emotion/styled";

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 20px;
  padding: 20px;
`;

export const HeaderCloseButton = styled.div`
  font-size: 24px;
  padding: 20px;
  cursor: pointer;
`;

export const ModalBody = styled.div`
  padding: 20px 20px 36px 20px;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 20px;
`;

export const ConfirmButton = styled.button`
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

export const CloseButton = styled.button`
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
