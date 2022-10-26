import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import TestComponentRenderer from '../../../test/test-component-renderer';
import AccountMenuComponent from '../account-menu.component';
import AppBarComponent from '../app-bar.component';

/**
 * renders account menu
 */
test('renders account menu', () => {
  render(
    <TestComponentRenderer>
      <AccountMenuComponent />
    </TestComponentRenderer>
  );

  const userAccountMenu = screen.getByTestId('user-account-menu');
  expect(userAccountMenu).toBeInTheDocument();
});

/**
 * renders app bar
 */
test('renders app bar', () => {
  render(
    <TestComponentRenderer>
      <AppBarComponent handleDrawerToggle={() => {}} mobileDrawerOpen={false} />
    </TestComponentRenderer>
  );

  const appBarElement = screen.getByTestId('app-bar');
  expect(appBarElement).toBeInTheDocument();
});

/**
 * renders company logo
 */
test('renders company logo', () => {
  render(
    <TestComponentRenderer>
      <AppBarComponent handleDrawerToggle={() => {}} mobileDrawerOpen={false} />
    </TestComponentRenderer>
  );

  const companyLogo = screen.getByTestId('company-logo');
  expect(companyLogo).toBeInTheDocument();
});

/**
 * renders clanguage option
 */
test('renders clanguage option', () => {
  render(
    <TestComponentRenderer>
      <AppBarComponent handleDrawerToggle={() => {}} mobileDrawerOpen={false} />
    </TestComponentRenderer>
  );

  const languageOption = screen.getByTestId('language-option');
  expect(languageOption).toBeInTheDocument();
});
