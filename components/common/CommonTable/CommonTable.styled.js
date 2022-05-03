import styled from "@emotion/styled";

export const StyledTable = styled.div`
  padding: 16px;
  border: 1px solid #202020;
  overflow: auto;

  table {
    margin-top: 12px;
    width: 100%;
    border-spacing: 0;
    border: 1px solid #202020;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding-left: 12px;
      padding-right: 12px;
      padding-top: ${({ padding }) => (padding ? padding : "12px")};
      padding-bottom: ${({ padding }) => (padding ? padding : "12px")};
      border-bottom: 1px solid #202020;
      border-right: 1px solid #202020;
      text-align: center;
      white-space: nowrap;

      :last-child {
        border-right: 0;
      }
    }

    th {
      background-color: #f1f3f5;
    }

    td {
      border-right: 0;
      background-color: #fff;
      cursor: pointer;
      //&:hover {
      //  background-color: #deebff;
      //}
    }

    th,
    td {
      max-width: 200px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;

export const TableTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
  border-top: 1px solid #202020;
  border-left: 1px solid #202020;
  border-right: 1px solid #202020;
  padding: 8px;
  font-size: 14px;
  font-weight: 500;
  background-color: #f1f3f5;
`;

export const GlobalFilterBase = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const GlobalFilterInput = styled.input`
  font-size: 15px;
  border: 1px solid #202020;
  padding: 8px;
  min-width: 320px;
  border-radius: 4px;
`;

export const GlobalFilterButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 8px;
  cursor: pointer;
`;
