import { useEffect, useRef, useState } from "react";

import * as S from "./Account.styled";

const Account = () => {
  const [active, setActive] = useState(false);

  const accountRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (accountRef.current && !accountRef.current.contains(e.target)) {
        setActive(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [accountRef]);

  const handleClick = () => {
    setActive(true);
  };

  return (
    <S.Base ref={accountRef}>
      <S.AccountInfoWrapper onClick={handleClick}>
        <S.Avatar />
        <S.Wrapper>
          <S.AccountName>Account Name</S.AccountName>
          <S.AccountPosition>Position</S.AccountPosition>
        </S.Wrapper>
      </S.AccountInfoWrapper>
      <S.AccountMenuList active={active}>
        <S.AccountMenu>계정 메뉴</S.AccountMenu>
        <S.AccountMenu>계정 메뉴</S.AccountMenu>
        <S.AccountMenu>계정 메뉴</S.AccountMenu>
      </S.AccountMenuList>
    </S.Base>
  );
};

export default Account;
