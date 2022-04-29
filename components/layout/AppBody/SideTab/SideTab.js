import styled from "@emotion/styled";

const Base = styled.div`
  width: ${({ active }) => (active ? "200px" : 0)};
  transition: 0.1s;
  padding: 24px 16px;
  border-right: 1px solid #eee;
  background-color: #f4f5f7;
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
  &:not(:first-of-type) {
    margin-top: 16px;
  }
  &:hover {
    background-color: #deebff;
    box-shadow: 1px 2px 4px rgb(0 0 0 / 25%);
  }
`;

const SideTab = () => {
  return (
    <Base active={true}>
      <TabItem>side feature 1</TabItem>
      <TabItem active={true}>side feature 2</TabItem>
      <TabItem>side feature 3</TabItem>
    </Base>
  );
};

export default SideTab;
