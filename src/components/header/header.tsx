import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../constants/routes';
import { selectCart } from '../../store/guitars/selectors';
import HeaderSearch from './header-search/header-search';

const NavLink = {
  Catalog: {
    title: 'Каталог',
    route: AppRoute.Catalog(1),
  },
  WhereToBuy: {
    title: 'Где купить?',
    route: AppRoute.WhereToBuy(),
  },
  About: {
    title: 'О компании',
    route: AppRoute.About(),
  },
};

function Header() {
  const cart = useSelector(selectCart);
  const [currentLink, setCurrentLink] = useState(0);

  return (
    <header className='header' id='header'>
      <div className='container header__wrapper'>
        <Link className='header__logo logo' to={AppRoute.Main()}>
          <img className='logo__img' width='70' height='70' src='/img/svg/logo.svg' alt='Логотип' />
        </Link>
        <nav className='main-nav'>
          <ul className='main-nav__list'>

            {
              Object.values(NavLink).map((link, index) => (
                <li key={`${index + 1}_${link}`} onClick={() => setCurrentLink(index)}>
                  <Link className={`link main-nav__link ${index === currentLink ? 'link--current' : ''}`} to={link.route}>{link.title}</Link>
                </li>
              ))
            }

          </ul>
        </nav>
        <HeaderSearch />
        <Link className='header__cart-link' to={AppRoute.Cart()} aria-label='Корзина'>
          <svg className='header__cart-icon' width='14' height='14' aria-hidden='true'>
            <use xlinkHref='#icon-basket'></use>
          </svg><span className='visually-hidden'>Перейти в корзину</span><span className='header__cart-count'>{cart}</span>
        </Link>
      </div>
    </header >
  );
}

export default Header;
