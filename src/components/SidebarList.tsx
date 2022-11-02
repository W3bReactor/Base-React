import React, { FC } from 'react';
import { SidebarItem } from './SidebarItem';
import { data } from '../constants/mock';
import styled from 'styled-components';

interface SidebarListProps {
	data: data[];
	setActiveGenre: (activeGenre: number) => void;
	activeGenre: number;
}

export const SidebarList: FC<SidebarListProps> = ({
	data,
	setActiveGenre,
	activeGenre,
}) => {
	return (
		<List>
			{data.map((category, id) => (
				<ListItem onClick={() => setActiveGenre(id)} key={category.id}>
					<SidebarItem isActiveGenre={activeGenre === id} href="#">
						{category.name}
					</SidebarItem>
				</ListItem>
			))}
		</List>
	);
};

const List = styled.ul`
	list-style: none;
`;

const ListItem = styled.li`
	:not(:last-child) {
		margin-bottom: 24px;
	}
`;
