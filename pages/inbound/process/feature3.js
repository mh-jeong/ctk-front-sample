import styled from "@emotion/styled";
import PageButtonPanel from "components/common/PageButtonPanel";
import SideTab from "components/layout/AppBody/SideTab/SideTab";

const Page = styled.div`
  display: flex;
  flex-grow: 1;
`;

const Content = styled.div`
  width: 100%;
  min-width: ${({ theme }) => `${theme.layout.minWidth - theme.layout.sideTabWidth}px`};
  padding: 24px 24px 80px;
`;

const Heading = styled.h1`
  font-size: 24px;
  font-weight: 700;
`;

const ContentHead = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ContentBody = styled.div`
  margin-top: 24px;
`;

const InboundFeaturePage = () => {
  return (
    <Page>
      <Content>
        <Heading>Inbound Feature Page 3</Heading>
        <ContentBody>Inbound Feature Page 3 Content</ContentBody>
      </Content>
    </Page>
  );
};

export default InboundFeaturePage;
