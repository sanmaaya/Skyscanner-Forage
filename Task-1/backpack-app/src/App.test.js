import { render, screen } from '@testing-library/react';
import App from './App';

// Mock Backpack components that cause Jest issues
jest.mock('@skyscanner/backpack-web/bpk-component-button', () => ({
  __esModule: true,
  default: ({ children, onClick }) => <button onClick={onClick}>{children}</button>,
}));

jest.mock('@skyscanner/backpack-web/bpk-component-text', () => ({
  __esModule: true,
  default: ({ children, textStyle, tagName, ...rest }) => {
    const Tag = tagName || 'span';
    return <Tag {...rest}>{children}</Tag>;
  },
}));

jest.mock('@skyscanner/backpack-web/bpk-component-calendar', () => {
  const React = require('react');
  return {
    __esModule: true,
    default: (props) => <div data-testid="calendar-mock">{props.id}</div>,
    CALENDAR_SELECTION_TYPE: { single: 'single' }
  };
});

test('renders Flight Schedule header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Flight Schedule/i);
  expect(headerElement).toBeInTheDocument();
});
