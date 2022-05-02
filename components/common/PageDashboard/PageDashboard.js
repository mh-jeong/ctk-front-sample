import styled from "@emotion/styled";
import { useState } from "react";
import { createRipples } from "react-ripples";

const Base = styled.div`
  margin-top: 28px;
`;

const DashboardList = styled.ul`
  display: flex;
`;

const DashboardItem = styled.li`
  display: flex;
  justify-content: space-between;
  width: 240px;
  height: 84px;
  padding: 16px;
  border-radius: 4px;
  border: 1px solid #a4a4a4;
  background-color: #fff;
  transition: 0.2s;
  cursor: pointer;
  opacity: ${({ selected }) => (selected ? "1" : "0.4")};
  // box-shadow: ${({ selected }) => (selected ? "1px 2px 4px rgb(0 0 0 / 25%" : "unset")};

  &:hover {
    box-shadow: 1px 2px 4px rgb(0 0 0 / 25%);
  }
`;

const Category = styled.div``;

const Name = styled.div`
  font-size: 16px;
`;

const Description = styled.div`
  font-size: 14px;
  line-height: 2;
`;

const Count = styled.div`
  display: flex;
  align-items: flex-end;
  font-size: 32px;
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
    name: "Category",
    description: "Description",
    count: 99,
  },
  {
    id: 1,
    name: "Category",
    description: "Description",
    count: 99,
  },
  {
    id: 2,
    name: "Category",
    description: "Description",
    count: 99,
  },
];

const PageDashboard = () => {
  const [selected, setSelected] = useState(0);

  const handleOnClick = (e) => {
    setSelected(Number(e.currentTarget.dataset.id));
  };

  return (
    <Base>
      <DashboardList>
        {DUMMY_DATA.map((item) => (
          <StyledRipples key={item.id}>
            <DashboardItem
              selected={selected === item.id}
              onClick={handleOnClick}
              data-id={item.id}>
              <Category>
                <Name>{item.name}</Name>
                <Description>({item.description})</Description>
              </Category>
              <Count>{item.count}</Count>
            </DashboardItem>
          </StyledRipples>
        ))}
      </DashboardList>
    </Base>
  );
};

export default PageDashboard;
