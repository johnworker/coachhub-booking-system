import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { useAuthStore } from '../../store/authStore';

// 模擬 useAuthStore 回傳
jest.mock('../../store/authStore', () => ({
  useAuthStore: jest.fn()
}));

describe('Navbar', () => {
  it('未登入時顯示登入註冊連結', () => {
    useAuthStore.mockReturnValue({ token: '', profile: null, logout: jest.fn() });
    render(<Navbar />, { wrapper: MemoryRouter });
    expect(screen.getByText('登入')).toBeInTheDocument();
    expect(screen.getByText('註冊')).toBeInTheDocument();
  });
});
