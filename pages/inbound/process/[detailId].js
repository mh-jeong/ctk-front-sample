import { useRouter } from "next/router";

const InboudProcessDetail = () => {
  const router = useRouter();
  return <>Inbound Process Detail Page{router.query.detailId}</>;
};

export default InboudProcessDetail;
