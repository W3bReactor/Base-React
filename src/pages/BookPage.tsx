import React, { useEffect } from 'react';
import { Annotation, Book, Preloader, Reviews } from '../components';
import styled, { css } from 'styled-components';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../hooks/useAppSelector';
import { selectBook, selectBooksStatus } from '../store/slices/books/selectors';
import { Status } from '../store/common/enums';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { fetchBook } from '../store/slices/books';

export const BookPage = () => {
	const dispatch = useAppDispatch();
	const { id } = useParams();
	const book = useAppSelector(selectBook(id));
	const status = useAppSelector(selectBooksStatus);
	const fetchBookById = (id: string) => {
		dispatch(fetchBook(id));
	};
	useEffect(() => {
		if (id) {
			fetchBookById(id);
		}
	}, []);
	return (
		<BookWrapper>
			{status === Status.LOADING && <Preloader />}
			{status === Status.SUCCESS && book && (
				<>
					{' '}
					<BookInfo>
						<Book
							withLink={false}
							id={book.id}
							title={book.name}
							price={book.price}
							subgenre={book.subgenre}
							authors={book.authors}
							styles={BookStyles}
						/>
						<Annotation text={book.annotation} styles={AnnotationStyles} />
					</BookInfo>
					<Reviews reviews={book.reviews} />
				</>
			)}
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
