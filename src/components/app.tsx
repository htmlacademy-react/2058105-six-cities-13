import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {AppRoute} from '../const';

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
					<Route path={AppRoute.Offer} element={<OfferPage />} />
					<Route path={AppRoute.Favorites} element={<FavoritesPage />} />
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
		    </BrowserRouter>
		</HelmetProvider>
	);
}

export default App;
