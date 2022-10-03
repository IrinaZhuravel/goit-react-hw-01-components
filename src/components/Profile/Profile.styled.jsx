import styled from 'styled-components';

export const ProfileWrp = styled.div`
    font-size: 16px;
    background-color: rgba(161, 161, 161, 0.8);
    border-radius: 5px;
    border: 1px solid rgba(161, 161, 161, 0.8);
`;

export const Description = styled.div`
    padding: 20px;
    text-align: center;
    background-color: rgb(255, 255, 255);
`;

export const Avatar = styled.img`
    margin: 0 auto 15px auto;
    width: 100px;
    height: 100px;
    border-radius: 50%;
`;

export const Name = styled.p`
    margin-bottom: 10px;
    font-weight: 700;
`;

export const Tag = styled.p`
    margin-bottom: 10px;
    color: rgb(143, 143, 143);
`;

export const Location = styled.p`
    color: rgb(143, 143, 143);
`;

export const Stats = styled.ul`
    padding: 0;
    list-style-type: none;
    display: flex;      
`;

export const Item = styled.li`
        padding: 10px;
      
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      
        border: 1px solid gray;
`;

 export const Label = styled.span`
        color: rgb(143, 143, 143);
 `;

 export const Quantity = styled.span`
        font-weight: 700;
 `;



