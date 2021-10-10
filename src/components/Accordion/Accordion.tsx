import React from 'react';
import ProductTitle from '../../components/ProductTitle/ProductTitle';
import ListRegion from '../../components/ListRegion/ListRegion';
import { ProductType } from '../../products';
import { ItemContainer } from './Accordion.css';

const Accordion = ({
  productData,
  handleClick,
}: {
  productData: ProductType[];
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
  return (
    <div>
      {productData.map(dataItem => (
        <ItemContainer key={dataItem.id}>
          <ProductTitle dataItem={dataItem} handleClick={handleClick} />
          <ListRegion dataItem={dataItem} />
        </ItemContainer>
      ))}
    </div>
  );
};

export default Accordion;

/*
<div>
      {productData.map(dataItem => (
        <ItemContainer>
          <ProductTitle dataItem={dataItem} handleClick={handleClick} />
          <ListRegion dataItem={dataItem} />
        </ItemContainer>
      ))}
    </div>
    */
