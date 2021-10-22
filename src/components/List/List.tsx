import React from 'react';
import ListItem from '../ListItem/ListItem';
import { ListContainer } from './List.css';

export interface ListProps {
  data: Array<string>;
}

const List = (props: ListProps) => {
  return (
    <ListContainer>
      {props.data.map(listItem => (
        <ListItem key={listItem} listItem={listItem} />
      ))}
    </ListContainer>
  );
};

export default List;
