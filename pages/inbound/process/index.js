import styled from "@emotion/styled";
import axios from "api";
import PageButtonPanel from "components/common/PageButtonPanel";
import CommonTable from "components/common/CommonTable";
import SideTab from "components/layout/AppBody/SideTab/SideTab";
import { dehydrate, QueryClient, useQuery } from "react-query";

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

const ContentBody = styled.div``;

const InboundProcessPage = () => {
  const { data, isLoading } = useQuery("list", async () => {
    const { data } = await axios.get("/movie/upcoming");
    return data;
  });

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
        {isLoading ? (
          "Loading..."
        ) : (
          <>
            <Heading>Inbound Process Page</Heading>
            <ContentHead>
              <PageButtonPanel />
            </ContentHead>
            <ContentBody>
              <CommonTable
                title={"Packing List"}
                propData={data.results}
              />
            </ContentBody>
          </>
        )}
      </Content>
    </Page>
  );
};

export const getServerSideProps = () => {
  const queryClient = new QueryClient();

  queryClient.prefetchQuery("list", () => {
    const { data } = axios.get("/movie/upcoming");
    return data;
  });

  // console.log("@queryClient", queryClient);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default InboundProcessPage;
