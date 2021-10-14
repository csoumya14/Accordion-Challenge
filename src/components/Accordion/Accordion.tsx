import React, { useState, useEffect } from 'react';
import { ProductType } from '../../products';
import AccordionItem from '../AccordionItem/AccordionItem';
import { Button, AccordionContainer } from './Accordion.css';
import data from '../../data/productData';

const Accordion = () => {
  const [productData, setProductData] = useState<ProductType[]>([]);
  const [collapseAll, setCollapseAll] = useState<boolean>(false);

  useEffect(() => {
    setProductData(data);
  }, []);

  const handleCollapse = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCollapseAll(!collapseAll);
  };

  return (
    <AccordionContainer>
      <Button onClick={e => handleCollapse(e)}>Close All</Button>
      {productData.map(dataItem => (
        <AccordionItem
          key={dataItem.id}
          dataItem={dataItem}
          collapseAll={collapseAll}
          setCollapseAll={setCollapseAll}
        />
      ))}
    </AccordionContainer>
  );
};

export default Accordion;
