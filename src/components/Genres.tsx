import React, { FC, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Colors } from './styles';
import { fetchGenres, setActiveGenre } from '../store/slices/genres';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';
import {
	selectActiveGenre,
	selectGenres,
	selectGenresStatus,
} from '../store/slices/genres/selectors';
import { Genre } from './Genre';
import { Status } from '../store/common/enums';
import { Preloader } from './Preloader';

export const Genres: FC = () => {
	const activeGenre = useAppSelector(selectActiveGenre);
	const genres = useAppSelector(selectGenres);
	const status = useAppSelector(selectGenresStatus);
	const isMounted = useRef(true);
	const dispatch = useAppDispatch();
	const fetchAllGenres = async () => {
		await dispatch(fetchGenres());
	};
	useEffect(() => {
		if (isMounted.current) {
			fetchAllGenres();
			isMounted.current = false;
		}
		if (genres && genres[0]) {
			dispatch(setActiveGenre(genres[0].id));
		}
	}, [genres]);

	return (
		<Aside>
			<List>
				{status === Status.LOADING && <Preloader />}
				{status === Status.SUCCESS &&
					genres.map((genre) => (
						<ListItem
							onClick={() => dispatch(setActiveGenre(genre.id))}
							key={genre.id}
						>
							<Genre isActiveGenre={activeGenre === genre.id}>
								{genre.name}
							</Genre>
						</ListItem>
					))}
				{status === Status.FAILED && <div>Не удалось получить жанры</div>}
			</List>
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

const List = styled.ul`
	list-style: none;
`;

const ListItem = styled.li`
	:not(:last-child) {
		margin-bottom: 24px;
	}
`;
