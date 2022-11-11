import { RootState } from '../../index';

export const selectBooks = (state: RootState) => state.books.entities;
export const selectBook = (id?: string) => (state: RootState) =>
	state.books.entities.find((entity) => entity.id === id);
export const selectBooksStatus = (state: RootState) => state.books.status;
