import cards from "../mocks/mocks";

type PageProps = {
	card: {
		id: string,
		title: string,
		price: number,
        type: string,
		previewImage: string,
		isFavorite: boolean,
		isPremium: boolean,
		rating: number,
		city: {
			name: string,
			location: {
			  latitude: number,
			  longitude: number,
			  zoom: number
			}
	    };
    }
}

//это будущая фильтрация	
//const filterCards = cards.filter(card => card.price < 50 && card.type === 'flat')

function Card ({card}:  PageProps): JSX.Element {
	return (
		<article className="cities__card place-card">
			
			<div className="place-card__mark">
				<span>Premium</span>
			</div>
			<div className="cities__image-wrapper place-card__image-wrapper">
				<a href="#">
					<img className="place-card__image" src={card.previewImage} width="260" height="200" alt="Place image" />
				</a>
			</div>
			<div className="place-card__info">
				<div className="place-card__price-wrapper">
					<div className="place-card__price">
						<b className="place-card__price-value">&euro;{card.price}</b>
						<span className="place-card__price-text">&#47;&nbsp;night</span>
					</div>
					<button className="place-card__bookmark-button button {card.isFavorite ? 'place-card__bookmark-button--active' : ''}" type="button">
						<svg className="place-card__bookmark-icon" width="18" height="19">
							<use xlinkHref="#icon-bookmark"></use>
						</svg>
						<span className="visually-hidden">To bookmarks</span>
					</button>
				</div>
				<div className="place-card__rating rating">
					<div className="place-card__stars rating__stars">
						<span style={{width: '80%'}}></span>
						<span className="visually-hidden">Rating</span>
					</div>
				</div>
				<h2 className="place-card__name">
					<a href="#">{card.title}</a>
				</h2>
				<p className="place-card__type">{card.type}</p>
			</div>
		</article>
	);
}

const cardList = cards.map(card => <Card card={card}/>)

export default cardList;
