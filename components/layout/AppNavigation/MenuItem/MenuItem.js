import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useRef, useState } from "react";
import { createRipples } from "react-ripples";

import useStore from "/mobx/store";

const Base = styled.li`
  position: relative;
  min-width: 240px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const Menu = styled.div`
  color: ${({ active }) => (active ? "#fff" : "#a4a4a4")};
  background-color: ${({ selected }) => (selected ? "rgba(255, 255, 255, 0.1)" : "")};
  width: 100%;
  padding-top: 22px;
  padding-bottom: 22px;
  text-align: center;
  transition: 0.25s;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const Container = styled.div`
  display: block;
  position: absolute;
  top: 60px;
  height: 0;
  min-width: 240px;
  z-index: 9;
`;

const SubMenuWrapper = styled.ul`
  display: ${({ selected }) => (selected ? "block" : "none")};
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 16px 0;
  margin-top: 4px;
  border-radius: 4px;
`;

const SubMenu = styled.li`
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

const Ripples = createRipples({
  color: "#ffffff1a",
  during: 1600,
});

const StyledRipples = styled(Ripples)`
  display: block !important;
  width: 100%;
`;

const MenuItem = ({ menu }) => {
  const { commonStore } = useStore();

  const [selectedMenu, setSelectedMenu] = useState("");

  const { pathname } = useRouter();

  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setSelectedMenu("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  const handleClickMenu = useCallback((e) => {
    setSelectedMenu(e.target.dataset.name);
  });

  const handleClickSubMenu = useCallback((e) => {
    setSelectedMenu("");

    const hasItem = commonStore.tabNavigationItems.find((o) => o.href === e.target.dataset.href);

    if (!hasItem) {
      commonStore.tabNavigationItems.push({
        name: e.target.dataset.name,
        href: e.target.dataset.href,
      });
      commonStore.pathname = e.target.dataset.href;
    }
  });

  return (
    <>
      {!menu.sub.length > 0 ? (
        <Ripples>
          <Link href={menu.href}>
            <a>
              <Base>
                <Menu active={pathname === menu.href}>Home</Menu>
              </Base>
            </a>
          </Link>
        </Ripples>
      ) : (
        <Base ref={menuRef}>
          <StyledRipples>
            <Menu
              active={pathname.indexOf(menu.name.toLowerCase()) > -1}
              selected={selectedMenu === menu.name.toLowerCase()}
              onClick={handleClickMenu}
              data-name={menu.name.toLowerCase()}>
              {menu.name}
            </Menu>
          </StyledRipples>
          <Container>
            <SubMenuWrapper selected={selectedMenu === menu.name.toLowerCase()}>
              {menu.sub?.map((subMenu) => (
                <Link
                  href={subMenu.href}
                  key={subMenu.id}>
                  <a>
                    <SubMenu
                      active={pathname === subMenu.href}
                      onClick={handleClickSubMenu}
                      data-name={subMenu.name}
                      data-href={subMenu.href}>
                      {subMenu.name}
                    </SubMenu>
                  </a>
                </Link>
              ))}
            </SubMenuWrapper>
          </Container>
        </Base>
      )}
    </>
  );
};

export default MenuItem;
