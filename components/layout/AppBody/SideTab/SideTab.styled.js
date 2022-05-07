import styled from "@emotion/styled";
import { createRipples } from "react-ripples";

export const Base = styled.div`
  width: ${({ theme }) => `${theme.layout.sideTabWidth}px`};
  min-width: ${({ theme }) => `${theme.layout.sideTabWidth}px`};
  padding: 24px 16px;
  border-right: 1px solid #eee;
  background-color: #fafbfc;
  overflow: hidden;
`;

export const TabItem = styled.button`
  border: 1px solid #202020;
  border-radius: 4px;
  width: 168px;
  height: 168px;
  border: 1px solid ${({ active, theme }) => (active ? theme.colors.black : "#a4a4a4")};
  color: ${({ active, theme }) => (active ? theme.colors.black : "#a4a4a4")};
  box-shadow: ${({ active }) => (active ? "1px 2px 4px rgb(0 0 0 / 25%)" : "unset")};
  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  transition: 0.25s;
  &:hover {
    background-color: #deebff;
    box-shadow: 1px 2px 4px rgb(0 0 0 / 25%);
  }
`;

export const Ripples = createRipples({
  color: "rgba(8,58,144,0.3)",
  during: 1600,
});

export const StyledRipples = styled(Ripples)`
  &:not(:first-of-type) {
    margin-top: 16px;
  }
`;
