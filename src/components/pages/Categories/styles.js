import styled from 'styled-components';

export const Container = styled.View`
  background: white;
  flex: 1;
`;

export const Heading = styled.View`
  flex-direction: row;
  height: 40;
  background-color: #b4d5c0;
`;

export const HeadingText = styled.Text`
  color: white;
  font-size: 16;
  padding: 10px;
`;

export const ListContainer = styled.View`
  flex: 1;
  align-items: stretch;
  flex-direction: column;
`;

export const ListItem = styled.Text`
  padding: 13px;
  font-size: 18;
  height: 51;
`;

export const ListItemSeparator = styled.View`
  height: 1;
  background-color: #ccc;
`;
