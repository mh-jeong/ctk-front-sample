import TabNavigation from "./TabNavigation";
import styled from "@emotion/styled";

const Base = styled.div``;

const Body = styled.section``;

const AppBody = ({ children }) => {
  return (
    <Base>
      <TabNavigation />
      <Body>{children}</Body>
    </Base>
  );
};

export default AppBody;
