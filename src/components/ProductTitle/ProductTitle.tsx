import React from 'react';
import downArrow from '../../assets/chevron-down.svg';
import upArrow from '../../assets/chevron-up.svg';
import { Button, TitleContainer } from './ProductTitle.css';
import { ProductType } from '../../products';

const ProductTitle = ({
  dataItem,
  handleClick,
  active,
  isAriaExpanded,
}: {
  dataItem: ProductType;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  active: boolean;
  isAriaExpanded: boolean;
}) => {
  return (
    <TitleContainer>
      <Button
        aria-expanded={isAriaExpanded}
        aria-controls={dataItem.ariaControls}
        className="accordion-trigger"
        id={dataItem.ariaLabelledBy}
        value={dataItem.id}
        onClick={event => handleClick(event)}
      >
        {dataItem.productTitle}
        <span aria-hidden="true">
          {!active ? <img src={downArrow} alt="" /> : <img src={upArrow} alt="" />}
        </span>
      </Button>
    </TitleContainer>
  );
};

export default ProductTitle;
