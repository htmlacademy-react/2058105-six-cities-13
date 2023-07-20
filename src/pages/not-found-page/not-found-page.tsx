import { Helmet } from 'react-helmet-async';
import {Link} from 'react-router-dom';
import { AppRoute } from '../../const';

function NotFoundPage(): JSX.Element {
	return (
		<section className="Error" style={{textAlign: 'center', margin: '200px'}}>
			<Helmet>
				<title>Страница не найдена.</title>
			</Helmet>
			<h1>Ошибка 404. Страница не существует.</h1>
			<Link className="header__logo-link header__logo-link--active" to={AppRoute.Main}>
				<h2>Вернуться на главную страницу.</h2>
				<img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
			</Link>
		</section>
	);
}

export default NotFoundPage;
