import React from 'react';
import downArrow from '../../assets/chevron-down.svg';
import upArrow from '../../assets/chevron-up.svg';
import { Button, TitleContainer } from './ProductTitle.css';
import { ProductType } from '../../products';

interface ButtonProps {
  dataItem: ProductType;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  active: boolean;
  isAriaExpanded: boolean;
}

const ProductTitle = (props: ButtonProps) => {
  return (
    <TitleContainer>
      <Button
        aria-expanded={props.isAriaExpanded}
        aria-controls={props.dataItem.ariaControls}
        className="accordion-trigger"
        id={props.dataItem.ariaLabelledBy}
        value={props.dataItem.id}
        onClick={event => props.handleClick(event)}
      >
        {props.dataItem.productTitle}
        <span aria-hidden="true">
          {props.active ? <img src={upArrow} alt="" /> : <img src={downArrow} alt="" />}
        </span>
      </Button>
    </TitleContainer>
  );
};

export default ProductTitle;
