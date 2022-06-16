import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import React from 'react';
import TestComponentRenderer from '../../../__test__/test-component-renderer';
import SearchBoxComponent from '../search-box-component';

/**
 * renders dropdown lists
 */
test('renders dropdown lists', () => {
  render(
    <TestComponentRenderer>
      <SearchBoxComponent
        locations={[]}
        isLoading={false}
        isHomeScreen={false}
      />
    </TestComponentRenderer>
  );

  const departureDropDown = screen.getByTestId('search-dropdown-departure');
  expect(departureDropDown).toBeInTheDocument();

  const arrivalDropDown = screen.getByTestId('search-dropdown-arrival');
  expect(arrivalDropDown).toBeInTheDocument();
});

/**
 * renders date picker
 */
test('renders date picker', () => {
  render(
    <TestComponentRenderer>
      <SearchBoxComponent
        locations={[]}
        isLoading={false}
        isHomeScreen={false}
      />
    </TestComponentRenderer>
  );

  const datepickerDeparture = screen.getByTestId(
    'search-date-picker-departure'
  );
  expect(datepickerDeparture).toBeInTheDocument();
});
