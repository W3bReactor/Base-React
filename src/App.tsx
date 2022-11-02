import React, { FC, useState } from 'react';
import './assets/styles/index.css';
import styled from 'styled-components';
import { Container } from './components/styles';
import { Header } from './components';
import { BooksPage } from './pages/BooksPage';
import { kindsArt } from './utils/mock';
import { BookPage } from './pages/BookPage';

const App: FC = () => {
	return (
		<>
			<Header />
			<Main>
				{/*Первая страничка*/}
				<BooksPage />
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
