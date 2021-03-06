import { sampleApi } from "api";
import { useRouter } from "next/router";
import { dehydrate, QueryClient, useQuery } from "react-query";

const InboudProcessDetail = () => {
  const router = useRouter();
  const { detailId } = router.query;

  const { data, isLoading } = useQuery(["list", detailId], async () => {
    const { data } = await sampleApi.get(`/movie/${detailId}`);
    return data;
  });

  return (
    <>
      {isLoading ? (
        "Loading..."
      ) : (
        <ul>
          <li>{data.title}</li>
          <li>{data.original_title}</li>
          <li>{data.overview}</li>
          <li>{data.vote_average}</li>
        </ul>
      )}
    </>
  );
};

export const getServerSideProps = (context) => {
  const { detailId } = context.query;

  const queryClient = new QueryClient();

  queryClient.prefetchQuery(["list", detailId], () => {
    const { data } = sampleApi.get(`/movie/${detailId}`);
    return data;
  });

  // console.log("@queryClient", queryClient);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default InboudProcessDetail;
