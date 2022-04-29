import styled from "@emotion/styled";
import { useObserver } from "mobx-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { IoCloseCircleSharp } from "react-icons/io5";

import useStore from "/mobx/store";

const Base = styled.nav`
  background-color: #ebecf0;
  display: flex;
  height: 60px;
  padding: 12px 24px 10px;
  box-shadow: inset 0 2px 4px rgb(0 0 0 / 50%);
`;

const TabList = styled.ul`
  display: flex;
`;

const Tab = styled.li`
  border: 1px solid ${({ active, theme }) => (active ? theme.colors.black : "#a4a4a4")};
  color: ${({ active, theme }) => (active ? theme.colors.black : "#a4a4a4")};
  box-shadow: ${({ active }) => (active ? "1px 2px 4px rgb(0 0 0 / 25%)" : "unset")};
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;
  min-width: 232px;
  border-radius: 4px;
  font-size: 16px;
  transition: 0.25s;
  &:not(:first-of-type) {
    margin-left: 8px;
  }
  &:hover {
    background-color: #deebff;
    box-shadow: 1px 2px 4px rgb(0 0 0 / 25%);
  }
`;

const TabName = styled.div`
  color: ${({ active, theme }) => (active ? theme.colors.black : "#a4a4a4")};
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 36px;
  padding-left: 12px;
  cursor: pointer;
  white-space: nowrap;
`;

const CloseTabButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 9px 12px 9px 20px;
  cursor: pointer;
`;

const TabNavigation = () => {
  const { pathname } = useRouter();
  const { commonStore } = useStore();

  const handleTabClick = (e) => {
    commonStore.pathname = e.currentTarget.dataset.href;
  };

  const handleTabClose = useCallback((e) => {
    commonStore.tabNavigationItems = commonStore.tabNavigationItems.filter((item) => {
      return item.href !== e.currentTarget.dataset.href;
    });
  });

  console.log("@commonStore.tabNavigationItems", commonStore.tabNavigationItems);

  return useObserver(() => (
    <Base>
      <TabList>
        {commonStore.tabNavigationItems.map((item) => (
          <Tab
            active={pathname === item.href}
            key={item.href}>
            <Link href={item.href}>
              <a>
                <TabName
                  active={pathname === item.href}
                  onClick={handleTabClick}>
                  {item.name}
                </TabName>
              </a>
            </Link>
            <CloseTabButton
              onClick={handleTabClose}
              data-href={item.href}>
              <IoCloseCircleSharp />
            </CloseTabButton>
          </Tab>
        ))}
      </TabList>
    </Base>
  ));
};

export default TabNavigation;
