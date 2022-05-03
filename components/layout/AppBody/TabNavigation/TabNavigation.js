import { observer } from "mobx-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { IoCloseCircleSharp } from "react-icons/io5";

import useStore from "/mobx/store";

import * as S from "./TabNavigation.styled";

const TabNavigation = () => {
  const { pathname } = useRouter();
  const { commonStore } = useStore();

  const handleTabClose = useCallback((e) => {
    commonStore.menu.tabNavigationItems = commonStore.menu.tabNavigationItems.filter((item) => {
      return item.href !== e.currentTarget.dataset.href;
    });
  });

  const handleMenuClick = (e) => {
    commonStore.menu.selectedMenuHref = e.target.dataset.href;
  };

  return (
    <S.Base className="hp_noScroll">
      <S.TabList>
        {commonStore.menu.tabNavigationItems.map((item) => (
          <S.Tab
            active={pathname === item.href || item.href === commonStore.menu.selectedMenuHref}
            key={item.href}>
            <Link href={item.href}>
              <a>
                <S.TabName
                  active={pathname === item.href || item.href === commonStore.menu.selectedMenuHref}
                  onClick={handleMenuClick}
                  data-href={item.href}>
                  {item.name}
                </S.TabName>
              </a>
            </Link>
            <S.CloseTabButton
              onClick={handleTabClose}
              data-href={item.href}>
              <IoCloseCircleSharp />
            </S.CloseTabButton>
          </S.Tab>
        ))}
      </S.TabList>
    </S.Base>
  );
};

export default observer(TabNavigation);
