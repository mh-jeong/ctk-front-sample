import styled from "@emotion/styled";
import PageDashboardBox from "components/common/PageDashboard";
import PageButtonPannel from "../../../components/common/PageButtonPannel";
import PageTable from "../../../components/common/PageTable";

const Base = styled.div``;

const Heading = styled.h1`
  font-size: 24px;
  font-weight: 700;
`;

const ContentHead = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ContentBody = styled.div``;

const InboundProcessPage = () => {
  return (
    <Base>
      <Heading>Inbound Process Page</Heading>
      <ContentHead>
        <PageDashboardBox />
        <PageButtonPannel />
      </ContentHead>
      <ContentBody>
        <PageTable />
      </ContentBody>
    </Base>
  );
};

export default InboundProcessPage;
