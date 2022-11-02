import React, { FC, useState } from 'react';
import './assets/styles/index.css';
import styled from 'styled-components';
import { Container } from './components/styles';
import { Header, Sidebar } from './components';
import { BooksPage } from './pages/BooksPage';
import { kindsArt } from './constants/mock';
import { BookPage } from './pages/BookPage';

const App: FC = () => {
	const [active, setActive] = useState(0);
	const books = kindsArt[active].books;

	const setActiveGenre = (activeGenre: number) => {
		setActive(activeGenre);
	};

	return (
		<>
			<Header />
			<Main>
				{/*Первая страничка*/}
				<Sidebar
					activeGenre={active}
					setActiveGenre={setActiveGenre}
					data={kindsArt}
				/>
				<BooksPage books={books} />
				{/*Вторая страничка*/}
				{/*<BookPage />*/}
			</Main>
		</>
	);
};

export default App;

const Main = styled.main`
	${Container};
	display: grid;
	padding: 50px 0;
	grid-template-columns: repeat(12, 1fr);
	gap: 20px;
`;
