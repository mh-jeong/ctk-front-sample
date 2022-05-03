import styled from "@emotion/styled";
import { createRipples } from "react-ripples";

export const Base = styled.div`
  margin-top: 8px;
`;

export const ButtonList = styled.ul`
  display: flex;
`;

export const ButtonWrapper = styled.li`
  &:not(:first-of-type) {
    margin-left: 8px;
  }
  &:hover {
    box-shadow: 1px 2px 4px rgb(0 0 0 / 25%);
  }
`;

export const Button = styled.button`
  width: 100px;
  height: 72px;
  border: 1px solid #a4a4a4;
  border-radius: 4px;
  background-color: #fff;
  font-size: 15px;
  cursor: pointer;
  &:hover {
    background-color: #deebff;
  }
`;

export const Ripples = createRipples({
  color: "rgba(8,58,144,0.3)",
  during: 1600,
});

export const StyledRipples = styled(Ripples)`
  &:not(:first-of-type) {
    margin-left: 8px;
  }
`;
