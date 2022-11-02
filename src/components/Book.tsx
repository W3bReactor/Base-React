import React, { FC } from 'react';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { Card, Colors } from './styles';
import { Counter } from './Counter';

interface BookProps {
	styles?: FlattenSimpleInterpolation;
	title?: string;
	author?: string;
	genre?: string;
	price?: number;
}

export const Book: FC<BookProps> = ({
	styles,
	price = '250',
	genre = 'Фэнтези',
	title = 'Несносное проклятье некроманта',
	author = 'Блинова Маргарита',
}) => {
	return (
		<BookWrapper styles={styles}>
			<BookContent>
				<Title>{title}</Title>
				<BookContentCenter>
					<Author>{author}</Author>
					<Genre>{genre}</Genre>
				</BookContentCenter>
				<Price>{price} ₽</Price>
			</BookContent>
			<Counter />
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
`;

const Genre = styled.p`
	${InfoStyles};
`;

const Price = styled.p`
	font-weight: 700;
	font-size: 24px;
	line-height: 33px;
	color: ${Colors.DARK};
`;
