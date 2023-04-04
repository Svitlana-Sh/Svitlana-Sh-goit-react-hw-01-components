import styled from 'styled-components';

export const TransactionTable = styled.table`
  width: calc((100% - (3 * 35px)) / 4);
  border: 1px solid rgba(0, 0, 0, 0.6);
  border-radius: 15px;
  text-align: center;
  font-size: 20px;
  background-color: #f6e8e8;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 60px -20px,
    rgba(226, 217, 206, 0.3) 0px 20px 40px -30px,
    rgba(0, 37, 64, 0.35) 0px -2px 6px 0px;
  overflow: hidden;
  min-width: min-content;
  border-collapse: collapse;
`;

export const TransactionTableTitle = styled.th`
  border: 1px solid rgba(0, 0, 0, 0.3);
  padding: 10px 50px;
  background-color: #e59c9a;
`;

export const TransactionTableData = styled.td`
  border: 1px solid rgba(0, 0, 0, 0.3);
  padding: 10px 50px;
  text-transform: capitalize;
`;

export const TransactionTableRow = styled.tr`
  &:nth-child(2n) {
    background-color: #fcfafa;
  }
`;