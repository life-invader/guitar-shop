import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { createMockGuitar } from '../../utils/common';
import GuitarCard from './guitar-card';

const mockGuitar = createMockGuitar();

describe('Component: GuitarCard', () => {
  it('should render GuitarCard component', () => {
    render(
      <BrowserRouter>
        <GuitarCard guitar={mockGuitar} />
      </BrowserRouter>,
    );

    expect(screen.getByText('Цена:')).toBeInTheDocument();
    expect(screen.getByText('Подробнее')).toBeInTheDocument();
    expect(screen.getByText('Купить')).toBeInTheDocument();
  });
});
