import styled from "@emotion/styled";
import API from "api";
import PageButtonPannel from "components/common/PageButtonPannel";
import ReactTable from "components/common/ReactTable";

const Base = styled.div``;

const Heading = styled.h1`
  font-size: 24px;
  font-weight: 700;
`;

const ContentHead = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ContentBody = styled.div``;

const InboundProcessPage = ({ data }) => {
  return (
    <Base>
      <Heading>Inbound Process Page</Heading>
      <ContentHead>
        <PageButtonPannel />
      </ContentHead>
      <ContentBody>
        <ReactTable
          title={"Packing List"}
          propData={data.results}
        />
      </ContentBody>
    </Base>
  );
};

export const getServerSideProps = async () => {
  const result = await API.get("/movie/upcoming");

  return {
    props: { data: result.data },
  };
};

export default InboundProcessPage;
