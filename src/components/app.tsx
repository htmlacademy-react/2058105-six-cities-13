import {Route, BrowserRouter, Routes} from 'react-router-dom';
import { AppRoute } from '../const';

import MainPage from '../pages/main-page/main-page';
//import FavoritesEmptyPage from '../pages/favorites-empty-page/favorites-empty-page';
import FavoritesPage from '../pages/favorites-page/favorutes-page';
import LoginPage from '../pages/login-page/login-page';
//import MainEmptyPage from '../pages/main-empty-page/main-empty-page';
import OfferPage from '../pages/offer-page/offer-page';
//import OfferUnloggedPage from '../pages/offer-unlogged-page/offer-unlogged-page';

type AppOfferProps = {
    offersCount: number;
  }

function App({offersCount}: AppOfferProps): JSX.Element {
	return (
		<BrowserRouter>
		<Routes>
			<Route path={AppRoute.Root} element={<MainPage offersCount={offersCount} />} />
			<Route path={AppRoute.Login} element={<LoginPage />} />
			<Route path={AppRoute.Offer} element={<OfferPage />} />
			<Route path={AppRoute.Favorites} element={<FavoritesPage />} />
		</Routes>
		</BrowserRouter>
	);
}

export default App;
