import React, { FC } from 'react';
import { SidebarList } from './SidebarList';
import styled from 'styled-components';
import { Colors } from './styles';
import { data } from '../constants/mock';

interface SidebarProps {
	data: data[];
	setActiveGenre: (activeGenre: number) => void;
	activeGenre: number;
}

export const Sidebar: FC<SidebarProps> = ({
	data,
	setActiveGenre,
	activeGenre,
}) => {
	return (
		<Aside>
			<SidebarList
				activeGenre={activeGenre}
				setActiveGenre={setActiveGenre}
				data={data}
			/>
		</Aside>
	);
};

const Aside = styled.aside`
	background-color: ${Colors.LIGHT};
	border-radius: 8px;
	padding: 20px;
	grid-column: 3 span;
	height: 659px;
`;
