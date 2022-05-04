import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import SideTab from "./SideTab/SideTab";
import TabNavigation from "./TabNavigation";

const Base = styled.div`
  z-index: 8;
`;

const Body = styled.div`
  display: flex;
  min-width: 1920px;
  min-height: calc(100vh - (72px + 60px + 60px));
  transition: 0.25s;
`;

const AppBody = ({ children }) => {
  const router = useRouter();
  const [tabs, setTabs] = useState();

  useEffect(() => {
    if (router.pathname.indexOf("/inbound/process") > -1) {
      setTabs([
        {
          id: 0,
          href: "/inbound/process",
          name: "Inbound Process",
        },
        {
          id: 1,
          href: "/inbound/process/feature2",
          name: "Inbound Feature 2",
        },
        {
          id: 2,
          href: "/inbound/process/feature3",
          name: "Inbound Feature 3",
        },
      ]);
    } else {
      setTabs([]);
    }
  }, [router.pathname]);

  return (
    <Base>
      <TabNavigation />
      <Body>
        {tabs?.length > 0 && <SideTab tabs={tabs} />}
        {children}
      </Body>
    </Base>
  );
};

export default AppBody;
