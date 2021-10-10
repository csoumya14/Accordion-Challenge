import React from 'react';
import downArrow from '../../assets/chevron-down.svg';
import upArrow from '../../assets/chevron-up.svg';
import { Button, TitleContainer } from './ProductTitle.css';
import { ProductType } from '../../products';

const ProductTitle = ({
  dataItem,
  handleClick,
}: {
  dataItem: ProductType;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
  return (
    <TitleContainer>
      <Button
        aria-expanded={dataItem.isAriaExpanded}
        aria-controls={dataItem.ariaControls}
        id={dataItem.ariaLabelledBy}
        value={dataItem.id}
        onClick={event => handleClick(event)}
      >
        {dataItem.productTitle}
        <span>
          {dataItem.isHidden ? <img src={downArrow} alt="" /> : <img src={upArrow} alt="" />}
        </span>
      </Button>
    </TitleContainer>
  );
};

export default ProductTitle;
