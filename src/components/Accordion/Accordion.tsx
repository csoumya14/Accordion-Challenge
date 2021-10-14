import React, { useState, useEffect } from 'react';
import { ProductType } from '../../products';
import AccordionItem from '../AccordionItem/AccordionItem';
import data from '../../data/productData';

const Accordion = () => {
  const [productData, setProductData] = useState<ProductType[]>([]);

  useEffect(() => {
    setProductData(data);
  }, []);

  return (
    <div>
      {productData.map(dataItem => (
        <AccordionItem key={dataItem.id} dataItem={dataItem} />
      ))}
    </div>
  );
};

export default Accordion;
