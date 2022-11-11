import { RootState } from '../../index';

export const selectGenres = (state: RootState) => state.genres.entities;
export const selectGenresStatus = (state: RootState) => state.genres.status;
export const selectActiveGenre = (state: RootState) => state.genres.activeGenre;
