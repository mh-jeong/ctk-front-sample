import styled from "@emotion/styled";
import { sampleApi } from "api";
import CommonTable from "components/common/CommonTable";
import PageButtonPanel from "components/common/PageButtonPanel";
import { dehydrate, QueryClient, useQuery } from "react-query";

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

const ContentBody = styled.div``;

const InboundProcessPage = () => {
  const { data, isLoading } = useQuery("list", async () => {
    const { data } = await sampleApi.get("/movie/upcoming");
    return data;
  });

  return (
    <Page>
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

export const getServerSideProps = ({ req }) => {
  const ip =
    req.headers["x-forwarded-for"] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress;

  console.log("@ip", ip);
  console.log('req.headers["x-forwarded-for"]', req.headers["x-forwarded-for"]);
  console.log("req.connection.remoteAddress", req.connection.remoteAddress);
  console.log("req.socket.remoteAddress", req.socket.remoteAddress);
  console.log("req.connection.socket.remoteAddress", req.connection.socket?.remoteAddress);

  const queryClient = new QueryClient();

  queryClient.prefetchQuery("list", () => {
    const { data } = sampleApi.get("/movie/upcoming");
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
