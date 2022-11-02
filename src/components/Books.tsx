import React, { FC } from 'react';
import { Book } from './Book';
import styled, { css } from 'styled-components';
import { book } from '../constants/mock';

interface BooksProps {
	books: book[];
}
export const Books: FC<BooksProps> = ({ books }) => {
	return (
		<List>
			{books.map((book) => (
				<ListItem key={book.id}>
					<Book
						price={book.price}
						title={book.name}
						author={book.author}
						genre={book.genre}
						styles={BookStyles}
					/>
				</ListItem>
			))}
		</List>
	);
};

const BookStyles = css`
	height: 200px;
`;

const List = styled.ul`
	list-style: none;
`;

const ListItem = styled.li`
	:not(:last-child) {
		margin-bottom: 16px;
	}
`;
