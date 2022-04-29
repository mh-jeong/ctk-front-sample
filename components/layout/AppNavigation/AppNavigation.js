import styled from "@emotion/styled";

import * as CONSTANTS from "./AppNavigation.constants";
import MenuItem from "./MenuItem";

const Base = styled.nav`
  padding-left: 16px;
  padding-right: 16px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
`;

const MenuList = styled.ul`
  list-style: none;
  display: flex;
`;

const AppNavigation = () => {
  return (
    <Base>
      <MenuList>
        {CONSTANTS.MENU_LIST_DATA.map((menu) => (
          <MenuItem
            key={menu.id}
            menu={menu}
          />
        ))}
      </MenuList>
    </Base>
  );
};

export default AppNavigation;
