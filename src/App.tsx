import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Home from './container/Home/Home';
import { ProductType } from './products';
import data from './data/productData';

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 2rem;
`;

const App = () => {
  const [productData, setProductData] = useState<ProductType[]>([]);

  function ensure<T>(
    argument: T | undefined | null,
    message = 'This value was promised to be there.',
  ): T {
    if (argument === undefined || argument === null) {
      throw new TypeError(message);
    }
    return argument;
  }

  useEffect(() => {
    setProductData(data);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const dataToChange = ensure(productData.find(i => i.id === e.currentTarget.value));
    const changedData = {
      ...dataToChange,
      isAriaExpanded: !dataToChange.isAriaExpanded,
      isHidden: !dataToChange.isHidden,
    };
    setProductData(
      productData.map(data => (data.id !== e.currentTarget.value ? data : changedData)),
    );
  };
  return (
    <Main className="App">
      <Home productData={productData} handleClick={handleClick} />
    </Main>
  );
};

export default App;
