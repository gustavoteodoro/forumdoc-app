import styled from "styled-components";

export const MovieItemContainer = styled.View`
  border-width: 1;
  border-color: #ddd;
  background-color: white;
  margin: 15px;
  margin-bottom: 0px;
  height: 210;
`;

export const MovieItemContent = styled.View`
  flex: 1;
  flex-direction: row;
  padding: 20px;
`;

export const MovieItemImageContainer = styled.View`
  flex: 2;
  height: 125;
`;

export const MovieItemImage = styled.Image`
  width: 100%;
  height: 125;
`;

export const MovieItemTextContainer = styled.View`
  flex: 4;
  height: 125;
  padding-left: 15px;
`;

export const MovieItemTitle = styled.Text`
  font-weight: bold;
`;

export const MovieItemDescription = styled.Text`
  margin-top: 10px;
`;

export const MovieItemCountry = styled.View`
  margin-top: 15px;
`;

export const MovieItemBottomBar = styled.View`
  flex-direction: row;
  border-top-width: 1;
  border-color: #ddd;
  height: 40;
  justify-content: space-between;
`;

export const MovieItemLocation = styled.View`
  justify-content: center;
  align-items: flex-start;
  padding-left: 20px;
  padding-right: 20px;
  border-right-width: 1;
  border-color: #ddd;
`;

export const MovieItemBottomText = styled.Text`
  font-size: 11;
`;

export const MovieItemTime = styled.View`
  flex: 1.3;
  align-items: center;
  justify-content: center;
`;

export const MovieItemLike = styled.View`
  align-items: flex-end;
  justify-content: center;
  border-left-width: 1;
  border-color: #ddd;
  align-items: flex-start;
  padding-left: 20px;
  padding-right: 20px;
`;
