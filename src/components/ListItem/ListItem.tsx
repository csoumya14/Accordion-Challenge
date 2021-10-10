import { ListItemElement, Link } from './ListItem.css';
import React from 'react';

const ListItem = ({ listItem }: { listItem: string }) => {
  return (
    <ListItemElement>
      <Link href="#" className="listItem">
        {listItem}
      </Link>
    </ListItemElement>
  );
};

export default ListItem;
