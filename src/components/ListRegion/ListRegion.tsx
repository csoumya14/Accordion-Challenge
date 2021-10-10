import React from 'react';
import List from '../../components/List/List';
import { ListRegionContainer } from './ListRegion.css';
import { ProductType } from '../../products';

const ListRegion = ({ dataItem }: { dataItem: ProductType }) => {
  return (
    <ListRegionContainer
      id={dataItem.ariaControls}
      aria-labelledby={dataItem.ariaLabelledBy}
      role="region"
    >
      {!dataItem.isHidden ? <List data={dataItem.productList} /> : ''}
    </ListRegionContainer>
  );
};

export default ListRegion;
