import styled from "@emotion/styled";

import SideTab from "./SideTab";
import TabNavigation from "./TabNavigation";

const Base = styled.div`
  z-index: 8;
`;

const Body = styled.section`
  display: flex;
  height: calc(100vh - (72px + 60px + 60px));
`;

const Content = styled.div`
  width: calc(100vw - 200px);
  padding: 24px;
`;

const AppBody = ({ children }) => {
  return (
    <Base>
      <TabNavigation />
      <Body>
        <SideTab />
        <Content>{children}</Content>
      </Body>
    </Base>
  );
};

export default AppBody;
