import { useState } from "react";

import * as S from "./PageDashboard.styled";

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
    <S.Base>
      <S.DashboardList>
        {DUMMY_DATA.map((item) => (
          <S.StyledRipples key={item.id}>
            <S.DashboardItem
              selected={selected === item.id}
              onClick={handleOnClick}
              data-id={item.id}>
              <S.Category>
                <S.Name>{item.name}</S.Name>
                <S.Description>({item.description})</S.Description>
              </S.Category>
              <S.Count>{item.count}</S.Count>
            </S.DashboardItem>
          </S.StyledRipples>
        ))}
      </S.DashboardList>
    </S.Base>
  );
};

export default PageDashboard;
