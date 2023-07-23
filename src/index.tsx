import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';
import { Setting } from './const';
import cards from './mocks/mocks';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
	<React.StrictMode>
		<App offersCount = {Setting.OffersCount} cards = {cards}/>
	</React.StrictMode>
);
