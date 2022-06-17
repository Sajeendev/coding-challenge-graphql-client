import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import TestComponentRenderer from '../../../test/test-component-renderer';
import HomeScreen from '../home.screen';

/**
 * renders hottest deal card
 */
test('renders hottest deal card', () => {
  render(
    <TestComponentRenderer>
      <HomeScreen />
    </TestComponentRenderer>
  );

  const hottestDeal1 = screen.getByTestId('hottest-deal-1');
  expect(hottestDeal1).toBeInTheDocument();

  const hottestDeal2 = screen.getByTestId('hottest-deal-2');
  expect(hottestDeal2).toBeInTheDocument();

  const hottestDeal3 = screen.getByTestId('hottest-deal-3');
  expect(hottestDeal3).toBeInTheDocument();

  const hottestDeal4 = screen.getByTestId('hottest-deal-4');
  expect(hottestDeal4).toBeInTheDocument();
});
