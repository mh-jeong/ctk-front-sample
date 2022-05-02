import styled from "@emotion/styled";
import { useObserver } from "mobx-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useStore from "store";
import { createRipples } from "react-ripples";

const Base = styled.div`
  width: 200px;
  padding: 24px 16px;
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

const Ripples = createRipples({
  color: "rgba(8,58,144,0.3)",
  during: 1600,
});

const StyledRipples = styled(Ripples)`
  &:not(:first-of-type) {
    margin-top: 16px;
  }
`;

const SideTab = () => {
  const router = useRouter();
  const [selected, setSelected] = useState(1);

  const { commonStore } = useStore();

  const handleTab = (e) => {
    setSelected(e.currentTarget.dataset.value);
  };

  const DUMMY_ITEMS = [...new Array(3)].map((_, i) => i + 1);

  useEffect(() => {
    setSelected(1);
  }, [commonStore.menu.selectedMenuHref]);

  return useObserver(
    () =>
      commonStore?.menu?.selectedMenuHref &&
      commonStore?.menu?.selectedMenuHref.indexOf("process") > -1 && (
        <Base active={commonStore?.menu?.selectedMenuHref.indexOf("process") > -1}>
          {DUMMY_ITEMS.map((value) => {
            let href = "/";

            if (value === 1) {
              href = commonStore.menu.selectedMenuHref;
            } else {
              href = commonStore.menu.selectedMenuHref + `/feature${value}`;
            }

            return (
              <StyledRipples key={value}>
                <Link href={href}>
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
      ),
  );
};

export default SideTab;
