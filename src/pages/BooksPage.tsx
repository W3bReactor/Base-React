import React, { FC } from 'react';
import styled from 'styled-components';
import { Books, Genres } from '../components';

export const BooksPage: FC = () => {
	return (
		<>
			<Genres />
			<BooksContent>
				<Books />
			</BooksContent>
		</>
	);
};

const BooksContent = styled.div`
	grid-column: 9 span;
`;
