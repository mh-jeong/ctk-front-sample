import styled from "@emotion/styled";
import { IoCloseCircleSharp } from "react-icons/io5";
import Link from "next/link";

const Base = styled.nav`
  display: flex;
  //height: 52px;
  padding: 13px 16px 11px;
  background-color: ${({ theme }) => theme.colors.gray};
  box-shadow: inset 0 2px 4px rgb(0 0 0 / 50%);
`;

const TabList = styled.ul``;

const Tab = styled.li`
  position: relative;
  min-width: 220px;
  border: 1px solid ${({ active, theme }) => (active ? theme.colors.black : "#a4a4a4")};
  color: ${({ active, theme }) => (active ? theme.colors.black : "#a4a4a4")};
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ active }) => (active ? "1px 2px 4px rgb(0 0 0 / 25%)" : "unset")};
  border-radius: 4px;
  font-size: 16px;
  &:not(:first-of-type) {
    margin-left: 8px;
  }
`;

const TabName = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 36px;
  padding-left: 12px;
  cursor: pointer;
`;

const CloseTabButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 9px 12px 9px 20px;
  cursor: pointer;
`;

const TabNavigation = () => {
  const handleTabClose = () => {
    console.log("@handleTabClose");
  };
  return (
    <Base>
      <TabList>
        <Tab active={true}>
          <Link href="/inbound">
            <a>
              <TabName>inbound/list</TabName>
            </a>
          </Link>
          <CloseTabButton onClick={handleTabClose}>
            <IoCloseCircleSharp />
          </CloseTabButton>
        </Tab>
      </TabList>
    </Base>
  );
};

export default TabNavigation;
