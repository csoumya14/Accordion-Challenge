import React from 'react';
import { AccordionItemContainer } from './AccordionItem.css';
import ListRegion from '../ListRegion/ListRegion';
import ProductTitle from '../ProductTitle/ProductTitle';
import { ProductType } from '../../products';

const AccordionItem = ({
  dataItem,
  handleClick,
  isAriaExpanded,
  active,
}: {
  dataItem: ProductType;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isAriaExpanded: boolean;
  active: boolean;
}) => {
  return (
    <AccordionItemContainer key={dataItem.id}>
      <ProductTitle
        dataItem={dataItem}
        handleClick={handleClick}
        isAriaExpanded={isAriaExpanded}
        active={active}
      />
      <ListRegion dataItem={dataItem} active={active} />
    </AccordionItemContainer>
  );
};

export default AccordionItem;
