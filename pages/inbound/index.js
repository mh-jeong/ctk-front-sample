import styled from "@emotion/styled";
import CommonSelect from "components/common/CommonSelect";

import useStore from "/mobx/store";

const SelectWrapper = styled.div`
  width: 200px;
  margin-top: 16px;
`;

const InboundIndexPage = () => {
  const { commonStore } = useStore();

  const handleClick = () => {
    commonStore.commonModal.open();
  };

  return (
    <>
      <div>Inbound Index Page</div>
      <SelectWrapper>
        <CommonSelect />
      </SelectWrapper>
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
