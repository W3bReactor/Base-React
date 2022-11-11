import React, { FC } from 'react';
import styled from 'styled-components';
import { Card, Colors } from './styles';
import { useAppSelector } from '../hooks/useAppSelector';
import {
	selectCartEntities,
	selectCartTotalPrice,
} from '../store/slices/cart/selectors';

export const OrderList: FC = () => {
	const entities = useAppSelector(selectCartEntities);
	const totalPrice = useAppSelector(selectCartTotalPrice);
	return (
		<Aside>
			<AsideWrapper>
				<Title>Ваш заказ:</Title>
				<List>
					{entities &&
						entities.map((entity) => (
							<Item key={entity.id}>
								<Text>{entity.name}</Text>
								<Price>{entity.price * (entity.count || 1)} ₽</Price>
							</Item>
						))}
				</List>
				<OrderBottom>
					<TotalPrice>Итого: {totalPrice} ₽</TotalPrice>
					<BuyButton>Купить</BuyButton>
				</OrderBottom>
			</AsideWrapper>
		</Aside>
	);
};

const Aside = styled.aside`
	grid-column: 4 span;
	position: relative;
`;

const AsideWrapper = styled.div`
	position: sticky;
	top: 50px;
	display: flex;
	flex-direction: column;
	padding: 20px;
	min-height: 438px;
	${Card};
`;

const Title = styled.h2`
	font-weight: 700;
	font-size: 16px;
	line-height: 22px;
	color: ${Colors.DARK};
	margin-bottom: 24px;
`;

const List = styled.ul`
	list-style: none;
	margin-bottom: 15px;
`;
const Item = styled.li`
	display: flex;
	align-items: center;
	flex-direction: row;
	justify-content: space-between;
	:not(:last-child) {
		margin-bottom: 16px;
	}
`;

const Text = styled.p`
	font-weight: 400;
	font-size: 16px;
	line-height: 22px;
	color: ${Colors.DARK};
`;
const Price = styled.p`
	font-weight: 700;
	font-size: 16px;
	line-height: 22px;
	color: ${Colors.DARK};
`;

const OrderBottom = styled.div`
	margin-top: auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: row;
`;

const TotalPrice = styled.p`
	font-weight: 700;
	font-size: 20px;
	line-height: 27px;
	color: ${Colors.DARK};
`;

const BuyButton = styled.button`
	background-color: ${Colors.DARK};
	border: none;
	outline: none;
	color: ${Colors.LIGHT};
	border-radius: 8px;
	padding: 6px 12px;
	cursor: pointer;
`;
