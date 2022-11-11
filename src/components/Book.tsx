import React, { FC } from 'react';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { Card, Colors } from './styles';
import { Counter } from './Counter';
import { Link } from 'react-router-dom';
import rating from '../assets/images/rating.png';

interface BookProps {
	styles?: FlattenSimpleInterpolation;
	title?: string;
	id: string;
	authors?: string[];
	subgenre?: string;
	price?: number;
	withLink: boolean;
}

export const Book: FC<BookProps> = ({
	styles,
	id,
	price = 250,
	subgenre = 'Фэнтези',
	title = 'Несносное проклятье некроманта',
	authors = ['Блинова Маргарита'],
	withLink,
}) => {
	return (
		<BookWrapper styles={styles}>
			<BookContent>
				{withLink ? (
					<ListLink to={`books/${id}`}>
						<Title>{title}</Title>
					</ListLink>
				) : (
					<Title>{title}</Title>
				)}
				<BookContentCenter>
					<Author>{authors?.join(', ')}</Author>
					<Genre>{subgenre}</Genre>
					<Rating src={rating} alt="Рейтинг" />
				</BookContentCenter>
				<Price>{price} ₽</Price>
			</BookContent>
			<Counter
				price={price}
				title={title}
				authors={authors}
				subgenre={subgenre}
				id={id}
			/>
		</BookWrapper>
	);
};

const BookWrapper = styled.section<{ styles?: FlattenSimpleInterpolation }>`
	${Card};
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 16px;

	${(props) => props.styles};
`;

const BookContent = styled.div`
	height: 100%;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
`;

const Title = styled.h2`
	display: block;
	font-weight: 700;
	font-size: 20px;
	line-height: 27px;
	color: ${Colors.DARK};
`;

const Rating = styled.img`
	width: 100px;
	height: 16px;
`;

const BookContentCenter = styled.div`
	display: flex;
	flex-direction: column;
`;

const InfoStyles = css`
	font-weight: 400;
	font-size: 16px;
	line-height: 22px;
	color: rgba(0, 0, 0, 0.5);
`;

const Author = styled.p`
	${InfoStyles};
	margin-bottom: 8px;
`;

const Genre = styled.p`
	${InfoStyles};
	margin-bottom: 8px;
`;

const Price = styled.p`
	font-weight: 700;
	font-size: 24px;
	line-height: 33px;
	color: ${Colors.DARK};
`;

const ListLink = styled(Link)`
	text-decoration: none;
`;
