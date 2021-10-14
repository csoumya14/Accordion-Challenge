import React, { useState, Dispatch, SetStateAction, useEffect } from 'react';
import { AccordionItemContainer } from './AccordionItem.css';
import ListRegion from '../ListRegion/ListRegion';
import ProductTitle from '../ProductTitle/ProductTitle';
import { ProductType } from '../../products';

const AccordionItem = ({
  dataItem,
  collapseAll,
  setCollapseAll,
}: {
  dataItem: ProductType;
  collapseAll: boolean;
  setCollapseAll: Dispatch<SetStateAction<boolean>>;
}) => {
  const [isAriaExpanded, setAriaExpanded] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>('');

  useEffect(() => {
    collapseAll && setSelected('');
  }, [collapseAll]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCollapseAll(false);
    e.preventDefault();
    if (selected === e.currentTarget.value) {
      setSelected('');
    } else {
      setSelected(e.currentTarget.value);
    }
    setAriaExpanded(!isAriaExpanded);
  };

  return (
    <AccordionItemContainer key={dataItem.id}>
      <ProductTitle
        dataItem={dataItem}
        handleClick={handleClick}
        isAriaExpanded={isAriaExpanded}
        active={selected === dataItem.id}
      />
      <ListRegion dataItem={dataItem} active={selected === dataItem.id} />
    </AccordionItemContainer>
  );
};

export default AccordionItem;
