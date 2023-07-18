const Setting = {
	OffersCount: 312
} as const;

const CITIES = [
	'Paris',
	'Cologne',
	'Brussels',
	'Amsterdam',
	'Hamburg',
	'Dusseldorf'
] as const;

const AppRoute = {
	Root: '/',
	Login: '/login',
	Favorites: '/favorites',
	Offer: '/offer/:id',
  } as const;

export {Setting, CITIES, AppRoute};
