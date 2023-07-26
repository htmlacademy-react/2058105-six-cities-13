import { Helmet } from 'react-helmet-async';
import Header from '../../components/header';
import { CardProps } from '../../components/card/type';
import Card from '../../components/card/card';
import { FavoriteCard } from '../../components/card/favorite.card';

type FavoritesProps = {
	cards: CardProps[]
}

function FavoritesPage({cards}: FavoritesProps): JSX.Element {
	return (
		<div className="page">
			<Helmet>
				<title>Favorites offers</title>
			</Helmet>
			<Header />
			<main className="page__main page__main--favorites">
				<div className="page__favorites-container container">
					<section className="favorites">
						<h1 className="favorites__title">Saved listing</h1>
						<ul className="favorites__list">
						{cards.map((card) => <FavoriteCard {...card} key={card.id}/>)}
						</ul>
					</section>
				</div>
			</main>
			<footer className="footer container">
				<a className="footer__logo-link" href="main.html">
					<img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
				</a>
			</footer>
		</div>
	);
}

export default FavoritesPage;
