import styled from "@emotion/styled";
import CommonModal from "components/common/Modal/CommonModal";

import useStore from "../../mobx/store";

const InboundIndexPage = () => {
  const { commonStore } = useStore();

  const handleClick = () => {
    commonStore.commonModal.open();
  };

  return (
    <>
      <div>Inbound Index Page</div>
      {/*<div>*/}
      {/*  <button onClick={handleClick}>모달 열기</button>*/}
      {/*  <CommonModal*/}
      {/*    title={"Inbound Modal"}*/}
      {/*    content={"내용스"}*/}
      {/*  />*/}
      {/*</div>*/}
    </>
  );
};

export default InboundIndexPage;
