import styled from "styled-components";

export const ProfileCard = styled.div`
  width: 320px;
  border: 1px solid #efefdd;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 60px -20px,
    rgba(226, 217, 206, 0.3) 0px 20px 40px -30px,
    rgba(0, 37, 64, 0.35) 0px -2px 6px 0px;
  border-radius: 0 0 15px 15px;
  text-align: center;
  font-size: 20px;
  background-color: #f6e8e8;
  overflow: hidden;
  min-width: min-content;
`;

export const ProfileAva = styled.img`
  display: block;
  height: 200px;
  width: 200px;
  border: 2px solid silver;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 60px -20px,
    rgba(234, 218, 218, 0.3) 0px 20px 40px -30px,
    rgba(0, 37, 64, 0.35) 0px -2px 6px 0px;
  border-radius: 0 0 30px 30px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 15px;
  padding-top: 5px;
  background-color: #f6f4f4;
`;

export const ProfileName = styled.p`
  font-size: 25px;
  font-style: bold;
`;

export const ProfileTag = styled.p`
color: rgba(0, 0, 0, 0.6);
`;

export const StatsList = styled.ul`
  list-style: none;
  display: flex;
  background-color: #f29898;
  margin: 0;
  padding: 0;
  border-radius: 0 0 15px 15px;
`;

export const ProfileStatsItem = styled.li`
  width: calc(100% / 3);
  padding: 10px 10px 25px 10px;
  text-transform: capitalize;
  border-top: 1px solid rgba(0, 0, 0, 0.6);
`;

export const ProfileStatsLable = styled.span`
  display: block;
  margin-left: 5px;
`;