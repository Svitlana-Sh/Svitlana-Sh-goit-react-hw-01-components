import styled from 'styled-components';

export const FriendUl = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: auto;
  padding: 15px;
  border: 1px solid #f6e8e8;
  border-radius: 15px;
  text-align: center;
  font-size: 20px;
  background-color: #f6e8e8;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 60px -20px,
    rgba(234, 218, 218, 0.3) 0px 20px 40px -30px,
    rgba(0, 37, 64, 0.35) 0px -2px 6px 0px;
  overflow: hidden;
  min-width: content;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 5px 15px;
  border: 1px solid #e59c9a;
  border-radius: 15px;
  ox-shadow: rgba(50, 50, 93, 0.25) 0px 50px 60px -20px,
    rgba(234, 218, 218, 0.3) 0px 20px 40px -30px,
    rgba(0, 37, 64, 0.35) 0px -2px 6px 0px;
`;

export const Status = styled.span`
  width: 55px;
  height: 55px;
  border-radius: 15px;
  ${props =>
    props.isOnline ? `border: 3px solid #6fdeae` : `border: 3px solid #e59c9a`};
`;

export const ItemAva = styled.img`
  margin: 0 8px;
  width: 40px;
  position: absolute;
`;

export const FriendName = styled.p`
font-style: bold;
margin-left: 20px;
`;