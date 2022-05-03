import styled from "@emotion/styled";
import PageButtonPanel from "components/common/PageButtonPanel";
import SideTab from "components/layout/AppBody/SideTab/SideTab";

const Page = styled.div`
  display: flex;
`;

const Content = styled.div`
  width: calc(100vw - 200px);
  min-width: 1720px;
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
  const tabs = [
    {
      id: 0,
      href: "/inbound/process",
    },
    {
      id: 1,
      href: "/inbound/process/feature2",
    },
    {
      id: 2,
      href: "/inbound/process/feature3",
    },
  ];
  return (
    <Page>
      <SideTab tabs={tabs} />
      <Content>
        <Heading>Inbound Feature Page 3</Heading>
        <ContentBody>Inbound Feature Page 3 Content</ContentBody>
      </Content>
    </Page>
  );
};

export default InboundFeaturePage;
