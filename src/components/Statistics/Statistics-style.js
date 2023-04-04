import styled from 'styled-components';

export const SectionStatistics = styled.div`
  border: 1px solid rgba(123, 94, 94, 0.3);
  border-radius: 0 30px;

  text-align: center;
  font-size: 20px;

  background-color: #f6f4f4;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 60px -20px,
    rgba(226, 217, 206, 0.3) 0px 20px 40px -30px,
    rgba(0, 37, 64, 0.35) 0px -2px 6px 0px inset;

  overflow: hidden;
  min-width: content;
`;

export const StatisticsList = styled.ul`
  width: calc((100% - (3 * 35px)) / 4);
  list-style: none;
  margin: 25px 0 0 10px;
  display: flex;
  margin: 0;
  padding: 0;
`;

export const StatisticItem = styled.li`
  padding: 10px;
  flex-grow: 1;
`;

export const StatisticLabel = styled.span`
  display: block;
`;