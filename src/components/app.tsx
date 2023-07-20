import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';

import {AppRoute, AuthorizationStatus} from '../const';
import PrivateRoute from '../components/private-route/private-route';
import MainPage from '../pages/main-page/main-page';
import FavoritesPage from '../pages/favorites-page/favorutes-page';
import LoginPage from '../pages/login-page/login-page';
import OfferPage from '../pages/offer-page/offer-page';
import NotFoundPage from '../pages/not-found-page/not-found-page';
//import OfferUnloggedPage from '../pages/offer-unlogged-page/offer-unlogged-page';

type AppOfferProps = {
	offersCount: number;
}

function App({offersCount}: AppOfferProps): JSX.Element {
	return (
		<HelmetProvider>
			<BrowserRouter>
				<Routes>
					<Route path={AppRoute.Main} element={<MainPage offersCount={offersCount} />} />
					<Route path={AppRoute.Login} element={<LoginPage />} />
					<Route path={AppRoute.Offer} element={<PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
						<OfferPage />
					</PrivateRoute>} />
					<Route path={AppRoute.Favorites} element={<PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
						<FavoritesPage />
					</PrivateRoute>} />
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</BrowserRouter>
		</HelmetProvider>
	);
}

export default App;
