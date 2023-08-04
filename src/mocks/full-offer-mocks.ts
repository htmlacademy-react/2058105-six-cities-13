import { FullCardProps } from '../components/card/type';

export const fullCards: FullCardProps[] = [
	{
		'id': 'a88c5458-f1cb-4a58-92dc-9ccc31e37ec1',
		'title': 'Beautiful & luxurious studio at great location',
		'type': 'apartment',
		'price': 120,
		'city': {
			'name': 'Amsterdam',
			'location': {
				'latitude': 52.35514938496378,
				'longitude': 4.673877537499948,
				'zoom': 8
			}},
		'location': {
			'latitude': 52.35514938496378,
			'longitude': 4.673877537499948,
			'zoom': 8
		},
		'isFavorite': true,
		'isPremium': true,
		'rating': 4,
		'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
		'bedrooms': 3,
		'goods': [
			'Heating',
			'Washing machine',
			'Towels',
			'Coffee machine',
			'Baby seat',
			'Kitchen',
			'Dishwasher',
			'Cabel TV',
			'Fridge'
		],
		'host': {
			'name': 'Oliver Conner',
			'avatarUrl': 'https://i.pravatar.cc/128',
			'isPro': false
		},
		'images': [
			'img/room.jpg',
			'img/apartment-01.jpg',
			'img/apartment-02.jpg',
			'img/apartment-03.jpg',
			'img/studio-01.jpg'
		],
		'maxAdults': 4
	}
];
