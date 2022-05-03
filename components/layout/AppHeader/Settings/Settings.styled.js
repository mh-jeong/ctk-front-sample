import styled from "@emotion/styled";

export const Base = styled.div``;

export const SettingsIconWrapper = styled.div`
  position: relative;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  &:hover {
    background-color: #deebff;
  }
`;

export const SettingsMenuList = styled.ul`
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

export const SettingsMenu = styled.li`
  cursor: pointer;
  padding: 16px;
  &:hover {
    background-color: #deebff;
  }
  &:not(:first-of-type) {
    margin-top: 8px;
  }
`;
