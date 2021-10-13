import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ProductTitle from './ProductTitle';

test('clicking the button calls event handler once', () => {
  const dataItem = {
    id: 0,
    productTitle: 'Televisions & Home Theatre',
    productList: ['tele-product1', 'tele-product2', 'tele-product3', 'tele-product4'],
    ariaControls: 'sect1',
    ariaLabelledBy: 'accordion1id',
  };

  const mockHandler = jest.fn();

  const component = render(
    <ProductTitle
      dataItem={dataItem}
      handleClick={mockHandler}
      active="true"
      isAriaExpanded="false"
    />,
  );

  const button = component.getByText('Televisions & Home Theatre');
  fireEvent.click(button);

  expect(mockHandler.mock.calls).toHaveLength(1);
});

test('checking for aria-expanded if it is provided', () => {
  const dataItem = {
    id: 0,
    productTitle: 'Televisions & Home Theatre',
    productList: ['tele-product1', 'tele-product2', 'tele-product3', 'tele-product4'],
    ariaControls: 'sect1',
    ariaLabelledBy: 'accordion1id',
  };
  const mockHandler = jest.fn();
  const component = render(
    <ProductTitle
      dataItem={dataItem}
      handleClick={mockHandler}
      active="true"
      isAriaExpanded="false"
    />,
  );
  const button = component.getByText('Televisions & Home Theatre');
  expect(button.getAttribute('aria-expanded')).toBe('false');
});

test('checking for aria-expanded if it is not provided', () => {
  const dataItem = {
    id: 0,
    productTitle: 'Televisions & Home Theatre',
    productList: ['tele-product1', 'tele-product2', 'tele-product3', 'tele-product4'],
    ariaControls: 'sect1',
    ariaLabelledBy: 'accordion1id',
  };
  const mockHandler = jest.fn();
  const component = render(
    <ProductTitle dataItem={dataItem} handleClick={mockHandler} active="true" />,
  );
  const button = component.getByText('Televisions & Home Theatre');
  expect(button.getAttribute('aria-expanded')).not.toBe('true');
});
