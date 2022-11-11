import { configureStore } from '@reduxjs/toolkit';
import books from './slices/books';
import genres from './slices/genres';
import cart from './slices/cart';
export const store = configureStore({
	reducer: {
		books,
		genres,
		cart,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
