# Guitar-shop - Магазин музыкальных инструментов
[Деплой на vercel](https://leontyev-accelerator-react-starter-pack.vercel.app/)
---

Небольшой интернет-магазин по продаже гитар. Состоит из трех страниц: страница каталога, страница товара, корзина.
Проект сделан на `React - Redux - Redux-thunk - Typescript - Axios`

#### Страница каталога
- Есть фильтрация по цене, типу гитары и количеству струн гитары
- Сортировка по цене и по популярности (возрастание/убывание)
- Сортировка и фильтрация происходят на стороне сервера
- На время фильтрации и сортировки показывается лоадер

#### Страница товара
* Возможность посмотреть отзывы (показано три отзыва по дефолту + по три отзыва 
  по нажатию кнопки 'показать еще')
* Возможность оставить свой отзыв

#### Страница корзины
- Посмотреть товары в корзине (что очевидно)
- Изменить количество товара (не более 99) или удалить товар совсем
- Корзина сохраняется в localStorage через redux middleware
- Есть возможность применить промокоды на скидку

#### Прочее
* В шапке есть живой поиск
* Не разработанные страницы закрыты заглушками 404

## Getting Started

---

### public

Директория для размещения статичных ресурсов (шрифты, стили, изображения и так далее).

### src

Директория для размещения исходного кода проекта: компоненты, файлы с тестами, модули и т.д.

### Запуск проекта

```bash
npm start
```

### Запуск тестов

```bash
npm test
```

Подробнее про тесты => [Запуск тестов](https://facebook.github.io/create-react-app/docs/running-tests).

### Проверка линтером

```bash
npm run eslint
```

### Сборка проекта

```bash
npm run build
```

### Извлечение конфигурации проекта

```bash
npm run eject
```

