import React, { FC } from 'react';
import styled from 'styled-components';
import { Colors, Container } from './styles';
import { Link } from 'react-router-dom';
import cart from '../assets/images/cart.svg';
export const Header: FC = () => {
	return (
		<HeaderWrapper>
			<HeaderInner>
				<HeaderLink to="/">Магазин</HeaderLink>
				<Link to="/cart">
					<img src={cart} alt="Корзина" />
				</Link>
			</HeaderInner>
		</HeaderWrapper>
	);
};

const HeaderWrapper = styled.header`
	padding: 20px 0;
	color: ${Colors.LIGHT};
	background-color: ${Colors.DARK};
`;
const HeaderInner = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	${Container};
	padding: 20px 0;
	color: ${Colors.LIGHT};
`;

const HeaderLink = styled(Link)`
	text-decoration: none;
	font-weight: 700;
	font-size: 20px;
	line-height: 27px;
	color: ${Colors.LIGHT};
`;
