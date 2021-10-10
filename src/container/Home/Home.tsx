import React from 'react';
import Heading from '../../components/MainTitle/MainTitle';
import Accordion from '../../components/Accordion/Accordion';
import { ProductType } from '../../products';
import { Wrapper } from './Home.css';

const MainPage = ({
  productData,
  handleClick,
}: {
  productData: ProductType[];
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
  return (
    <Wrapper>
      <Heading title="Electronics" />
      <Accordion productData={productData} handleClick={handleClick} />
    </Wrapper>
  );
};

export default MainPage;

/*

<Accordion productData={productData} handleClick={handleClick} />*/
