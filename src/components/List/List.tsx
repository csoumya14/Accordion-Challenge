import React from 'react';
import ListItem from '../ListItem/ListItem';
import { ListContainer } from './List.css';

const List = ({ data }: { data: Array<string> }) => {
  return (
    <ListContainer>
      {data.map(listItem => (
        <ListItem key={listItem} listItem={listItem} />
      ))}
    </ListContainer>
  );
};

export default List;
