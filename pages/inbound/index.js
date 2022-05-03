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
    </>
  );
};

export default InboundIndexPage;
