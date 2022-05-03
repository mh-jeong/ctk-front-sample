import styled from "@emotion/styled";

import TabNavigation from "./TabNavigation";

const Base = styled.div`
  z-index: 8;
`;

const Body = styled.div`
  min-width: 1920px;
  min-height: calc(100vh - (72px + 60px + 60px));
  transition: 0.25s;
`;

const AppBody = ({ children }) => {
  return (
    <Base>
      <TabNavigation />
      <Body>{children}</Body>
    </Base>
  );
};

export default AppBody;
