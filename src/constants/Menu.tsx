import AddCircleIcon from '@/assets/icons/add_circle.svg';
import BookIcon from '@/assets/icons/book.svg';
import HomeIcon from '@/assets/icons/home.svg';
import MenuIcon from '@/assets/icons/menu.svg';

export const MENU = [
  {
    key: 'home',
    name: '홈',
    icon: HomeIcon,
    path: '/',
  },
  {
    key: 'diary',
    name: '다이어리',
    icon: BookIcon,
    path: '/diary',
  },
  {
    key: 'create',
    name: '기록하기',
    icon: AddCircleIcon,
    path: '/create',
  },
  {
    key: 'menu',
    name: '메뉴',
    icon: MenuIcon,
    path: '/menu',
  },
];
