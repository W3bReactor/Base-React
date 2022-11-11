import React, { FC, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { useAppSelector } from '../hooks/useAppSelector';
import {
	selectBooks,
	selectBooksStatus,
} from '../store/slices/books/selectors';
import { selectActiveGenre } from '../store/slices/genres/selectors';
import { fetchBooks } from '../store/slices/books';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { Status } from '../store/common/enums';
import { Book } from './Book';
import { Preloader } from './Preloader';

export const Books: FC = () => {
	const dispatch = useAppDispatch();
	const books = useAppSelector(selectBooks);
	const status = useAppSelector(selectBooksStatus);
	const activeGenre = useAppSelector(selectActiveGenre);
	const fetchBookById = async (id: string) => {
		dispatch(fetchBooks(id));
	};

	useEffect(() => {
		if (activeGenre) {
			fetchBookById(activeGenre);
		}
	}, [activeGenre]);

	return (
		<List>
			{Status.LOADING === status && <Preloader />}
			{Status.SUCCESS === status &&
				books.map((book) => (
					<ListItem key={book.id}>
						<Book
							withLink={true}
							id={book.id}
							price={book.price}
							title={book.name}
							authors={book.authors}
							subgenre={book.subgenre}
							styles={BookStyles}
						/>
					</ListItem>
				))}
			{Status.FAILED === status && <div>Не удалось получить книги</div>}
		</List>
	);
};

const BookStyles = css`
	height: 200px;
`;

const List = styled.ul`
	list-style: none;
	text-decoration: none;
`;

const ListItem = styled.li`
	:not(:last-child) {
		margin-bottom: 16px;
	}
`;
