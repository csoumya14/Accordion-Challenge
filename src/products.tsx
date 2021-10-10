export interface ProductType {
  id: string;
  productTitle: string;
  productList: string[];
  isHidden: boolean;
  isAriaExpanded: boolean;
  ariaControls: string;
  ariaLabelledBy: string;
}
