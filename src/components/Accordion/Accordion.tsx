import React, { useState, useEffect } from 'react';
import { ProductType } from '../../products';
import AccordionItem from '../AccordionItem/AccordionItem';
import data from '../../data/productData';

const Accordion = () => {
  const [productData, setProductData] = useState<ProductType[]>([]);
  useEffect(() => {
    setProductData(data);
  }, []);

  const [isAriaExpanded, setAriaExpanded] = useState(false);
  const [selected, setSelected] = useState('-1');

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (selected === e.currentTarget.value) {
      return setSelected('-1');
    }
    setSelected(e.currentTarget.value);
    setAriaExpanded(!isAriaExpanded);
  };

  return (
    <div>
      {productData.map(dataItem => (
        <AccordionItem
          key={dataItem.id}
          handleClick={handleClick}
          dataItem={dataItem}
          isAriaExpanded={isAriaExpanded}
          active={selected === dataItem.id}
        />
      ))}
    </div>
  );
};

export default Accordion;
