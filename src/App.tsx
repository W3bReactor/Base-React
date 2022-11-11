import React, { FC } from 'react';
import './assets/styles/index.css';
import styled from 'styled-components';
import { Container } from './components/styles';
import { Header } from './components';
import { BooksPage } from './pages/BooksPage';
import { BookPage } from './pages/BookPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BookCartPage } from './pages/BookCartPage';

const App: FC = () => {
	return (
		<BrowserRouter>
			<Header />
			<Main>
				<Routes>
					<Route path={'/'} element={<BooksPage />} />
					<Route path={'/books/:id'} element={<BookPage />} />
					<Route path={'/cart'} element={<BookCartPage />} />
				</Routes>
			</Main>
		</BrowserRouter>
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
