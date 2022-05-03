import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useRef, useState } from "react";

import useStore from "/mobx/store";

import * as S from "./MenuItem.styled";

const MenuItem = ({ menu }) => {
  const { commonStore } = useStore();

  const [selectedMenu, setSelectedMenu] = useState("");

  const { pathname } = useRouter();

  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
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

    const tabNavigationHasSelectedMenu = commonStore.menu.tabNavigationItems.find(
      (o) => o.href === e.target.dataset.href,
    );

    if (!tabNavigationHasSelectedMenu) {
      commonStore.menu.tabNavigationItems.push({
        name: e.target.dataset.name,
        href: e.target.dataset.href,
      });
    }
    commonStore.menu.selectedMenuHref = e.target.dataset.href;
  });

  return (
    <>
      {!menu.sub.length > 0 ? (
        <S.Ripples>
          <Link href={menu.href}>
            <a>
              <S.Base>
                <S.Menu active={pathname === menu.href}>Home</S.Menu>
              </S.Base>
            </a>
          </Link>
        </S.Ripples>
      ) : (
        <S.Base ref={menuRef}>
          <S.StyledRipples>
            <S.Menu
              active={pathname.indexOf(menu.name.toLowerCase()) > -1}
              selected={selectedMenu === menu.name.toLowerCase()}
              onClick={handleClickMenu}
              data-name={menu.name.toLowerCase()}>
              {menu.name}
            </S.Menu>
          </S.StyledRipples>
          <S.Container>
            <S.SubMenuWrapper selected={selectedMenu === menu.name.toLowerCase()}>
              {menu.sub?.map((subMenu) => (
                <Link
                  href={subMenu.href}
                  key={subMenu.id}>
                  <a>
                    <S.SubMenu
                      active={
                        pathname === subMenu.href ||
                        subMenu.href === commonStore.menu.selectedMenuHref
                      }
                      onClick={handleClickSubMenu}
                      data-name={subMenu.name}
                      data-href={subMenu.href}>
                      {subMenu.name}
                    </S.SubMenu>
                  </a>
                </Link>
              ))}
            </S.SubMenuWrapper>
          </S.Container>
        </S.Base>
      )}
    </>
  );
};

export default MenuItem;
