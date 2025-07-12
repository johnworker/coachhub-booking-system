import { render, screen } from '@testing-library/react';
import Home from '../../pages/Home/Home';
import { BrowserRouter } from 'react-router-dom';

test('首頁標題正確', () => {
  render(<Home />, { wrapper: BrowserRouter });
  expect(screen.getByText('Find Your Coach')).toBeInTheDocument();
});
