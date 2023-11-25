import { render, screen } from '@testing-library/react';
import App from '../App';

test('test Lea est super belle', () => {
  render(<App />);
  const linkElement = screen.getByText(/lea est super belle !/i);
  expect(linkElement).toBeInTheDocument();
});
