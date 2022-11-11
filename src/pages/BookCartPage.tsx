import React, { FC } from 'react';
import { Book, OrderList } from '../components';
import styled, { css } from 'styled-components';
import { useAppSelector } from '../hooks/useAppSelector';
import { selectCartEntities } from '../store/slices/cart/selectors';
import { Link } from 'react-router-dom';
import { Colors } from '../components/styles';

export const BookCartPage: FC = () => {
	const entities = useAppSelector(selectCartEntities);
	if (entities.length === 0) {
		return (
			<Undefined>
				<UndefinedTitle>Вы ещё не взяли книги в корзину :(</UndefinedTitle>
				<UndefinedLink to="/">Вернуться</UndefinedLink>
			</Undefined>
		);
	}
	return (
		<>
			<OrderList />
			<List>
				{entities.map((entity) => (
					<Item key={entity.id}>
						<Book
							price={entity.price}
							title={entity.name}
							authors={entity.authors}
							subgenre={entity.subgenre}
							withLink={true}
							id={entity.id}
							styles={BookStyles}
						/>
					</Item>
				))}
			</List>
		</>
	);
};

const BookStyles = css`
	height: 216px;
`;

const List = styled.ul`
	grid-column: 8 span;
	list-style: none;
`;

const Item = styled.li`
	:not(:last-child) {
		margin-bottom: 16px;
	}
`;

const Undefined = styled.div`
	text-align: center;
	grid-column: 12 span;
`;

const UndefinedTitle = styled.h2`
	font-size: 48px;
	color: ${Colors.DARK};
`;

const UndefinedLink = styled(Link)`
	color: ${Colors.DARK};
	font-size: 32px;
`;
