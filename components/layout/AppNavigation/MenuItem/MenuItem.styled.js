import styled from "@emotion/styled";
import { createRipples } from "react-ripples";

export const Base = styled.li`
  position: relative;
  min-width: 240px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Menu = styled.div`
  font-size: 18px;
  color: ${({ active }) => (active ? "#fff" : "#a4a4a4")};
  background-color: ${({ selected }) => (selected ? "rgba(255, 255, 255, 0.1)" : "")};
  width: 100%;
  padding-top: 21px;
  padding-bottom: 21px;
  text-align: center;
  transition: 0.25s;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const Container = styled.div`
  display: block;
  position: absolute;
  top: 60px;
  height: 0;
  min-width: 240px;
  z-index: 9;
`;

export const SubMenuWrapper = styled.ul`
  display: ${({ selected }) => (selected ? "block" : "none")};
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 16px 0;
  margin-top: 4px;
  border-radius: 4px;
`;

export const SubMenu = styled.li`
  width: 100%;
  height: 44px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  color: ${({ active }) => (active ? "#fff" : "#a4a4a4")};
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const Ripples = createRipples({
  color: "#ffffff1a",
  during: 1600,
});

export const StyledRipples = styled(Ripples)`
  display: block !important;
  width: 100%;
`;
