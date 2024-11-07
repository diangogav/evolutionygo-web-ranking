type MenuItem = {
  name: string;
  href: string;
  submenu?: MenuItem[];
  target?: string;
	disabled?: boolean;
	comingSoon?: boolean;
};

// Exportación por defecto de `menuItems`
const menuItems: MenuItem[] = [
  {
    name: 'Home',
    href: '#section-home',
  },
  {
    name: 'Ranking',
    href: '#section-ranking',
  },
  {
    name: 'Download',
    href: '#section-download',
  },
  // {
  //   name: 'Ranking',
  //   href: '/ranking',
  //   submenu: [
  //     {
  //       name: 'Submenu 1',
  //       href: '/submenu1',
  //       target: '_self',
  //     },
  //     {
  //       name: 'Submenu 2',
  //       href: '/submenu2',
  //       target: '_self',
  //     },
  //   ],
  // },
  {
		name: 'Features',
		href: '#section-features',
	},
	{
    name: 'Tournaments',
    href: '/tournaments',
		disabled: true,
		comingSoon: true,
  },
  {
    name: 'Status',
    href: 'https://status.evolutionygo.com',
    target: '_blank',
  },
];

export default menuItems;
