import styled from "@emotion/styled";
import { createRipples } from "react-ripples";

const Base = styled.div`
  margin-top: 28px;
`;

const ButtonList = styled.ul`
  display: flex;
`;

const ButtonWrapper = styled.li`
  &:not(:first-of-type) {
    margin-left: 8px;
  }
  &:hover {
    box-shadow: 1px 2px 4px rgb(0 0 0 / 25%);
  }
`;

const Button = styled.button`
  width: 100px;
  height: 72px;
  border: 1px solid #a4a4a4;
  border-radius: 4px;
  background-color: #fff;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #deebff;
  }
`;

const Ripples = createRipples({
  color: "rgba(8,58,144,0.3)",
  during: 1600,
});

const StyledRipples = styled(Ripples)`
  &:not(:first-of-type) {
    margin-left: 8px;
  }
`;

const DUMMY_DATA = [
  {
    id: 0,
    name: "Receipt",
  },
  {
    id: 1,
    name: "WRO",
  },
  {
    id: 2,
    name: "Barcode",
  },
  {
    id: 3,
    name: "Delete",
  },
];

const PageButtonPannel = () => {
  const handleOnClick = (e) => {
    alert(`click ${e.currentTarget.dataset.name}`);
  };

  return (
    <Base>
      <ButtonList>
        {DUMMY_DATA.map((item) => (
          <StyledRipples key={item.id}>
            <ButtonWrapper
              onClick={handleOnClick}
              data-name={item.name}>
              <Button>{item.name}</Button>
            </ButtonWrapper>
          </StyledRipples>
        ))}
      </ButtonList>
    </Base>
  );
};

export default PageButtonPannel;
