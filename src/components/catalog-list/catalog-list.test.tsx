import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { RootState } from '../../store/root-reducer';
import { createMockGuitars } from '../../utils/common';
import CatalogList from './catalog-list';
import { initialState as guitarInitialState } from '../../store/guitars/guitars-reducer';
import { initialState as filtersInitialState } from '../../store/filters/filters-reducer';
import { initialState as paginationInitialState } from '../../store/pagination/pagination-reducer';
import { initialState as cartInitialState } from '../../store/cart/cart-reducer';

const displayedGuitars = createMockGuitars();
const mockStore = configureMockStore<RootState>();
const store = mockStore({
  guitars: {
    ...guitarInitialState,
  },
  filters: {
    ...filtersInitialState,
  },
  pagination: {
    ...paginationInitialState,
  },
  cart: {
    ...cartInitialState,
  },
});

describe('Component: CatalogList', () => {
  it('should render CatalogList component', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <CatalogList displayedGuitars={displayedGuitars} />
        </BrowserRouter>
      </Provider>,
    );

    expect(screen.getByText('Рейтинг:')).toBeInTheDocument();
    expect(screen.getByText('Цена:')).toBeInTheDocument();
    expect(screen.getByText('Подробнее')).toBeInTheDocument();
  });
});
