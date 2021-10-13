import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import ListItem from './ListItem';

test('renders content', () => {
  const listItem = ['audio-product1'];
  const component = render(<ListItem listItem={listItem} />);
  component.debug();
  const element = component.getByText('audio-product1');
  expect(element).toBeDefined();
});
