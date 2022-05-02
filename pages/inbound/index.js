import styled from "@emotion/styled";
import Modal from "components/common/Modal";
import useModals from "components/common/Modal/useModals";

const Sample = styled.div`
  text-align: center;
`;

const InboundIndexPage = () => {
  const { openModal } = useModals();

  const handleClick = () => {
    openModal(MyModal, { foo: "bar " });
  };

  return (
    <>
      <div>InboundIndexPageModal</div>
      <div>
        <button onClick={handleClick}>모달 열기</button>
      </div>
    </>
  );
};

export default InboundIndexPage;
