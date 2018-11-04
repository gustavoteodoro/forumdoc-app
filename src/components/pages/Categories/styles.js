import styled from 'styled-components';

export const Container = styled.View`
  background: white;
  flex: 1;
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
