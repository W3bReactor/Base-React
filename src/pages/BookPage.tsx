import React from 'react';
import { Annotation, Book, Reviews } from '../components';
import styled, { css } from 'styled-components';

export const BookPage = () => {
	return (
		<BookWrapper>
			<BookInfo>
				<Book styles={BookStyles} />
				<Annotation styles={AnnotationStyles} />
			</BookInfo>
			<Reviews />
		</BookWrapper>
	);
};

const BookWrapper = styled.div`
	grid-column: 12 span;
`;

const BookInfo = styled.div`
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	gap: 20px;
	margin-bottom: 40px;
`;

const BookStyles = css`
	align-items: flex-end;
	grid-column: 6 span;
`;
const AnnotationStyles = css`
	grid-column: 6 span;
`;
