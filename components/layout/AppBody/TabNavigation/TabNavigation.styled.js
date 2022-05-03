import styled from "@emotion/styled";

export const Base = styled.nav`
  background-color: #ebecf0;
  display: flex;
  height: 60px;
  padding: 12px 24px 10px;
  box-shadow: inset 0 2px 4px rgb(0 0 0 / 50%);
  overflow-x: scroll;
`;

export const TabList = styled.ul`
  display: flex;
`;

export const Tab = styled.li`
  border: 1px solid ${({ active, theme }) => (active ? theme.colors.black : "#a4a4a4")};
  color: ${({ active, theme }) => (active ? theme.colors.black : "#a4a4a4")};
  box-shadow: ${({ active }) => (active ? "1px 2px 4px rgb(0 0 0 / 25%)" : "unset")};
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;
  min-width: 232px;
  border-radius: 4px;
  font-size: 16px;
  transition: 0.25s;
  &:not(:first-of-type) {
    margin-left: 8px;
  }
  &:hover {
    background-color: #deebff;
    box-shadow: 1px 2px 4px rgb(0 0 0 / 25%);
  }
`;

export const TabName = styled.div`
  color: ${({ active, theme }) => (active ? theme.colors.black : "#a4a4a4")};
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 36px;
  padding-left: 12px;
  cursor: pointer;
  white-space: nowrap;
`;

export const CloseTabButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 9px 12px 9px 20px;
  cursor: pointer;
`;
