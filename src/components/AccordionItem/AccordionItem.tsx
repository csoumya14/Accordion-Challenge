import React, { Dispatch, SetStateAction, useState } from 'react';
import { AccordionItemContainer } from './AccordionItem.css';
import ListRegion from '../ListRegion/ListRegion';
import ProductTitle from '../ProductTitle/ProductTitle';
import { ProductType } from '../../products';

interface AccordionItemProps {
  dataItem: ProductType;
  focus: boolean;
  selected: number;
  setSelected: Dispatch<SetStateAction<number>>;
}

const AccordionItem = (props: AccordionItemProps) => {
  const [openAll, setOpenAll] = useState<number>(-1);
  const [allowMultiple] = useState<boolean>(true);
  const [isAriaExpanded, setAriaExpanded] = useState<boolean>(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (props.selected === Number(e.currentTarget.value)) {
      props.setSelected(-1);
      setOpenAll(-1);
    } else {
      props.setSelected(Number(e.currentTarget.value));
      setOpenAll(Number(e.currentTarget.value));
    }
    setAriaExpanded(!isAriaExpanded);
  };

  const handleSelect = (id: number) => {
    if (allowMultiple) {
      const active = openAll === id;
      return active;
    } else {
      const active = props.selected === id;
      return active;
    }
  };

  return (
    <AccordionItemContainer key={props.dataItem.id}>
      <ProductTitle
        dataItem={props.dataItem}
        handleClick={handleClick}
        isAriaExpanded={isAriaExpanded}
        active={handleSelect(Number(props.dataItem.id))}
        focus={props.focus}
      />
      <ListRegion dataItem={props.dataItem} active={handleSelect(Number(props.dataItem.id))} />
    </AccordionItemContainer>
  );
};

export default AccordionItem;
