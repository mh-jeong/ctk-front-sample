import styled from "@emotion/styled";
import Link from "next/link";

import Account from "./Account";
import Notification from "./Notification";
import Settings from "./Settings";

const Base = styled.header`
  height: 72px;
  padding-left: 16px;
  padding-right: 16px;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
`;
const Logo = styled.div``;

const Wrapper = styled.div`
  display: flex;
`;

const AppHeader = () => {
  return (
    <Base>
      <Link href="/">
        <a>
          <Logo>LOGO</Logo>
        </a>
      </Link>
      <Wrapper>
        <Notification />
        <Settings />
        <Account />
      </Wrapper>
    </Base>
  );
};

export default AppHeader;
