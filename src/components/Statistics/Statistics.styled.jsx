import styled from 'styled-components';

export const Statistic = styled.section`
    width: 340px;
    margin: 0 auto 50px;
`;

export const Title = styled.h2`
  font-weight: 500;
  margin: 0;
  padding: 35px 0 0;
  text-align: center;
  color: #232425;  
`;

export const StatList = styled.ul`
  display: flex;  
  padding: 0;
`;

export const StatItem = styled.li`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  width: 68px;
  padding: 10px 10px;
  justify-content: center;
  color: #fff;
`;

export const Label = styled.span`
  display: block;
  font-size: 14px;
  width: 100%;
  text-align: center;
  padding-bottom: 5px;
`;

export const Percentage = styled.span`
    font-size: 14px;
`;

