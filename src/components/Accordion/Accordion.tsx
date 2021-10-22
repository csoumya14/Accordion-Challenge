import React, { useState, useEffect } from 'react';
import { ProductType } from '../../products';
import AccordionItem from '../AccordionItem/AccordionItem';
import { AccordionContainer } from './Accordion.css';
import data from '../../data/productData';
import KeyboardNavigation from '../../helpers/KeyboardNavigation';

const Accordion = () => {
  const [productData, setProductData] = useState<ProductType[]>([]);
  const [selected, setSelected] = useState<number>(-1);
  const [focus] = KeyboardNavigation(productData.length);

  useEffect(() => {
    setProductData(data);
  }, []);

  return (
    <AccordionContainer>
      {productData.map(dataItem => (
        <AccordionItem
          selected={selected}
          setSelected={setSelected}
          key={dataItem.id}
          dataItem={dataItem}
          focus={focus === Number(dataItem.id)}
        />
      ))}
    </AccordionContainer>
  );
};

export default Accordion;
