import styled from "@emotion/styled";

export const Base = styled.div``;

export const AccountInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
  cursor: pointer;
  position: relative;
`;

export const Avatar = styled.div`
  width: 44px;
  height: 44px;
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: 50%;
`;

export const Wrapper = styled.div`
  margin-left: 8px;
`;

export const AccountName = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
`;

export const AccountPosition = styled.div`
  font-size: 13px;
`;

export const AccountMenuList = styled.ul`
  position: absolute;
  display: ${({ active }) => (active ? "block" : "none")};
  background-color: #fff;
  top: 76px;
  right: 16px;
  min-width: 280px;
  border-radius: 4px;
  border: 1px solid #202020;
  z-index: 11;
`;

export const AccountMenu = styled.li`
  cursor: pointer;
  padding: 16px;
  &:hover {
    background-color: #deebff;
  }
  &:not(:first-of-type) {
    margin-top: 8px;
  }
`;
