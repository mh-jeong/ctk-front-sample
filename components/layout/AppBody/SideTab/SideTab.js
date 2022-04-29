import styled from "@emotion/styled";
import Ripples from "components/common/Ripples";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import useStore from "/mobx/store";
import { useObserver } from "mobx-react";

const Base = styled.div`
  width: ${({ active }) => (active ? "200px" : 0)};
  transition: 0.2s;
  padding: ${({ active }) => (active ? "24px 16px" : "24px 0")};
  border-right: 1px solid #eee;
  background-color: #f4f5f7;
  overflow: hidden;
`;

const TabItem = styled.button`
  border: 1px solid #202020;
  border-radius: 4px;
  width: 168px;
  height: 168px;
  border: 1px solid ${({ active, theme }) => (active ? theme.colors.black : "#a4a4a4")};
  color: ${({ active, theme }) => (active ? theme.colors.black : "#a4a4a4")};
  box-shadow: ${({ active }) => (active ? "1px 2px 4px rgb(0 0 0 / 25%)" : "unset")};
  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  transition: 0.25s;
  &:hover {
    background-color: #deebff;
    box-shadow: 1px 2px 4px rgb(0 0 0 / 25%);
  }
`;

const StyledRipples = styled(Ripples)`
  &:not(:first-of-type) {
    margin-top: 16px;
  }
`;

const SideTab = () => {
  const { commonStore } = useStore();
  const [selected, setSelected] = useState(1);
  const { pathname } = useRouter();
  const features = [...new Array(3)].map((_, i) => i + 1);
  const handleTab = (e) => {
    setSelected(e.currentTarget.dataset.value);
  };
  return useObserver(() => (
    <Base active={pathname.indexOf("process") > -1}>
      {features.map((value) => {
        return (
          <StyledRipples key={value}>
            <Link href={commonStore.pathname + `/feature${value}`}>
              <a>
                <TabItem
                  active={value === Number(selected)}
                  onClick={handleTab}
                  data-value={value}>
                  side feature {value}
                </TabItem>
              </a>
            </Link>
          </StyledRipples>
        );
      })}
    </Base>
  ));
};

export default SideTab;
