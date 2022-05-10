import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useRef } from "react";

import authStore from "/mobx/store/auth";
import { lessLayout } from "components/layout/layout.utils";

const Base = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoginFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 420px;
  padding: 24px;
  //border: 1px solid #083a90;
  //border-radius: 4px;
`;

const Title = styled.div`
  font-size: 32px;
  color: #083a90;
  font-weight: 500;
`;

const IdInput = styled.input`
  font-size: 16px;
  border: 1px solid #202020;
  padding: 8px;
  min-width: 320px;
  border-radius: 4px;
  margin-top: 12px;
`;

const PasswordInput = styled.input`
  font-size: 16px;
  border: 1px solid #202020;
  padding: 8px;
  min-width: 320px;
  border-radius: 4px;
  margin-top: 12px;
`;

const LoginButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 12px;
  background-color: #083a90;
  font-size: 16px;
  border: 1px solid #202020;
  padding: 9px 8px 8px;
  color: #fff;
  font-weight: 500;
  cursor: pointer;
  border-radius: 4px;
`;

const LoginPage = () => {
  const router = useRouter();
  const idInput = useRef();
  const handleClick = () => {
    authStore.logIn(idInput.current.value);
    router.push("/");
  };
  return (
    <Base>
      <LoginFormWrapper>
        <IdInput
          type="text"
          ref={idInput}
        />
        <PasswordInput type="password" />
        <LoginButton onClick={handleClick}>로그인</LoginButton>
      </LoginFormWrapper>
    </Base>
  );
};

export default LoginPage;

LoginPage.getLayout = lessLayout;
