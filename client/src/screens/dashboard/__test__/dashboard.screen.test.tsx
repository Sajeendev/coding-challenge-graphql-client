import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import React from 'react';
import TestComponentWrapper from '../../../__test__/test-component-renderer';
import AccountMenuComponent from '../account-menu.component';
import AppBarComponent from '../app-bar.component';

/**
 * renders account menu
 */
test('renders account menu', () => {
  render(
    <TestComponentWrapper>
      <AccountMenuComponent />
    </TestComponentWrapper>
  );

  const userAccountMenu = screen.getByTestId('user-account-menu');
  expect(userAccountMenu).toBeInTheDocument();
});

/**
 * renders app bar
 */
test('renders app bar', () => {
  render(
    <TestComponentWrapper>
      <AppBarComponent handleDrawerToggle={() => {}} mobileDrawerOpen={false} />
    </TestComponentWrapper>
  );

  const appBarElement = screen.getByTestId('app-bar');
  expect(appBarElement).toBeInTheDocument();
});

/**
 * renders company logo
 */
test('renders company logo', () => {
  render(
    <TestComponentWrapper>
      <AppBarComponent handleDrawerToggle={() => {}} mobileDrawerOpen={false} />
    </TestComponentWrapper>
  );

  const companyLogo = screen.getByTestId('company-logo');
  expect(companyLogo).toBeInTheDocument();
});

/**
 * renders clanguage option
 */
test('renders clanguage option', () => {
  render(
    <TestComponentWrapper>
      <AppBarComponent handleDrawerToggle={() => {}} mobileDrawerOpen={false} />
    </TestComponentWrapper>
  );

  const languageOption = screen.getByTestId('language-option');
  expect(languageOption).toBeInTheDocument();
});
