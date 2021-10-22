import React from 'react';
import downArrow from '../../assets/chevron-down.svg';
import upArrow from '../../assets/chevron-up.svg';
import { Button, TitleContainer } from './ProductTitle.css';
import { ProductType } from '../../products';
import useFocus from '../../helpers/UseFocus';

interface ButtonProps {
  dataItem: ProductType;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  focus: boolean;
  active: boolean;
  isAriaExpanded: boolean;
}

const ProductTitle = (props: ButtonProps) => {
  const myRef = useFocus(props.focus);
  //console.log(props.isAriaExpanded);
  return (
    <TitleContainer>
      <Button
        ref={myRef}
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
