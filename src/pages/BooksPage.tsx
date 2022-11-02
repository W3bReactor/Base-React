import React, { FC } from 'react';
import styled from 'styled-components';
import { book } from '../constants/mock';
import { Books } from '../components';

interface BooksPageProps {
	books: book[];
}

export const BooksPage: FC<BooksPageProps> = ({ books }) => {
	return (
		<BooksContent>
			<Books books={books} />
		</BooksContent>
	);
};

const BooksContent = styled.div`
	grid-column: 9 span;
`;
