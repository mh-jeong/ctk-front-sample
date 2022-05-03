import { observer } from "mobx-react";
import Link from "next/link";
import { useRouter } from "next/router";

import * as S from "./SideTab.styled";

const SideTab = ({ tabs }) => {
  const router = useRouter();

  return (
    <S.Base>
      {tabs.map((tab, idx) => {
        return (
          <S.StyledRipples key={tab.id}>
            <Link href={tab.href}>
              <a>
                <S.TabItem active={router.pathname === tab.href}>side feature {idx + 1}</S.TabItem>
              </a>
            </Link>
          </S.StyledRipples>
        );
      })}
    </S.Base>
  );
};

export default observer(SideTab);
