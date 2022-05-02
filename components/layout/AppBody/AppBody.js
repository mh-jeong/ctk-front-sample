import styled from "@emotion/styled";

import SideTab from "./SideTab";
import TabNavigation from "./TabNavigation";

const Base = styled.div`
  z-index: 8;
  //background-color: #fafbfc;
`;

const Body = styled.section`
  display: flex;
  min-height: calc(100vh - (72px + 60px + 60px));
`;

const Content = styled.div`
  width: calc(100vw - 200px);
  padding: 24px 24px 120px;
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
