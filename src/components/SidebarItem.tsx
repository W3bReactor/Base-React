import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { Colors } from './styles';

interface ListElementProps {
	children: React.ReactNode;
	href: string;
	isActiveGenre?: boolean;
}

export const SidebarItem: FC<ListElementProps> = ({
	children,
	href,
	isActiveGenre,
}) => {
	console.log(isActiveGenre);
	return (
		<Link isActiveGenre={isActiveGenre} href={href}>
			{children}
		</Link>
	);
};

const Styles = css`
	font-weight: 400;
	font-size: 16px;
	line-height: 22px;
	color: ${Colors.DARK};
`;
const Link = styled.a<{ isActiveGenre?: boolean }>`
	${Styles};
	text-decoration: none;
	transition: 0.3s all;
	${(props) =>
		props.isActiveGenre
			? `text-shadow: 0 0 0.65px ${Colors.DARK}, 0 0 0.65px ${Colors.DARK}`
			: ''};
	:hover {
		text-shadow: 0 0 0.65px ${Colors.DARK}, 0 0 0.65px ${Colors.DARK};
	}
`;
