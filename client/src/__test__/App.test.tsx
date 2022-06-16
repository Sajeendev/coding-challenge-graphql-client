import { render } from '@testing-library/react';
import React from 'react';
import App from '../App';
import TestComponentWrapper from './test-component-renderer';

test('renders the landing page', () => {
  render(
    <TestComponentWrapper>
      <App />
    </TestComponentWrapper>
  );
});
