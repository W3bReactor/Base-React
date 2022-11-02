import React, { FC } from 'react';
import styled from 'styled-components';
import { Colors, Container } from './styles';

export const Header: FC = () => {
	return (
		<HeaderWrapper>
			<HeaderInner>
				<Link href="src/components/Header#">Магазин</Link>
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
const Link = styled.a`
	text-decoration: none;
	font-weight: 700;
	font-size: 20px;
	line-height: 27px;
	color: ${Colors.LIGHT};
`;
