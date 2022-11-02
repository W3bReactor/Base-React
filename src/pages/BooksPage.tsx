import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { kindsArt } from '../utils/mock';
import { Books, Sidebar } from '../components';

export const BooksPage: FC = () => {
	const [active, setActive] = useState(0);
	const books = kindsArt[active].books;

	return (
		<>
			<Sidebar
				activeGenre={active}
				setActiveGenre={setActive}
				data={kindsArt}
			/>
			<BooksContent>
				<Books books={books} />
			</BooksContent>
		</>
	);
};

const BooksContent = styled.div`
	grid-column: 9 span;
`;
