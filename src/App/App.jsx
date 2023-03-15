import React from 'react';

import './meui/meui.scss';
import './App.css';

import Sidebar from './Sidebar/Sidebar';
import {
	BackgroundsPage,
	ButtonsPage,
	CardsPage,
	FormsPage,
	HomePage,
	ImagesPage,
	LinksPage,
	TablesPage,
	TextsPage,
} from './Pages';

const PAGES = [
	{title: "Home", component: HomePage},
	{title: "Backgrounds", component: BackgroundsPage},
	{title: "Buttons", component: ButtonsPage},
	{title: "Cards", component: CardsPage},
	{title: "Forms", component: FormsPage},
	{title: "Images", component: ImagesPage},
	{title: "Links", component: LinksPage},
	{title: "Tables", component: TablesPage},
	{title: "Texts", component: TextsPage},
];

function App () {
	const [pageIndex, setPageIndex] = React.useState(0);
	const CurrentPage = PAGES[pageIndex];
	const CurrentPageComponent = CurrentPage.component;

	return (
		<div className="flex min-h-screen">
			<Sidebar {...{pageIndex, setPageIndex, PAGES}} />

			<main className="grow">
				<header className="px-4 py-4 bg-blue-500 text-white">
					<h2>{CurrentPage.title}</h2>
				</header>

				<main className="min-h-screen px-4 py-4">
					<CurrentPageComponent />
				</main>

				<footer className="px-4 py-12 bg-zinc-700 text-white text-center">
					<h4>&copy; Ankur Seth.</h4>
				</footer>
			</main>
		</div>
	)
}

export default App;
