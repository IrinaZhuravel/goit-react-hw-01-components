import styled from 'styled-components';

export const Item = styled.li`
    display: flex;
    align-items: center;
    background-color: #ffffff;
    width: 300px;
    padding: 5px;
    margin: 0 auto;
    margin-bottom: 10px;
    box-shadow: 0 2px 2px 2px #cccccc;
`;

export const Status = styled.span`
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
    display: block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
`;



export const Avatar = styled.img`
    margin-left: 5px;
`;

export const Name = styled.p`
    font-weight: 500;
    margin-left: 5px;
`;