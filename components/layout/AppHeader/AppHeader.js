import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import Link from "next/link";
import { IoNotificationsOutline, IoSettingsOutline } from "react-icons/io5";

const Base = styled.header`
  height: 72px;
  padding-left: 16px;
  padding-right: 16px;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.div``;

const Wrapper = styled.div`
  display: flex;
`;

const Settings = styled.div`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Notification = styled.div`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Account = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

const Avatar = styled.div`
  width: 44px;
  height: 44px;
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: 50%;
`;

const AccountInfoWrapper = styled.div`
  margin-left: 8px;
`;

const AccountName = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
`;

const AccountPosition = styled.div`
  font-size: 13px;
`;

const AppHeader = () => {
  const theme = useTheme();

  return (
    <Base>
      <Link href="/">
        <a>
          <Logo>LOGO</Logo>
        </a>
      </Link>
      <Wrapper>
        <Notification>
          <IoNotificationsOutline
            size={24}
            color={theme.colors.black}
          />
        </Notification>
        <Settings>
          <IoSettingsOutline
            size={24}
            color={theme.colors.black}
          />
        </Settings>
        <Account>
          <Avatar />
          <AccountInfoWrapper>
            <AccountName>Account Name</AccountName>
            <AccountPosition>Position</AccountPosition>
          </AccountInfoWrapper>
        </Account>
      </Wrapper>
    </Base>
  );
};

export default AppHeader;
