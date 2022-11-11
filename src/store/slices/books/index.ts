import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { BookState, IBookData, IBooksData } from './types';
import { Status } from '../../common/enums';
import { instance } from '../../../utils/instance';

export const fetchBooks = createAsyncThunk<IBooksData, string>(
	'books/fetchBooks',
	async (id) => {
		const { data } = await instance.get<IBooksData>(`genres/${id}`);
		return data;
	}
);
export const fetchBook = createAsyncThunk<IBookData, string>(
	'books/fetchBook',
	async (id) => {
		const { data } = await instance.get<IBookData>(`books/${id}`);
		return data;
	}
);

const initialState: BookState = {
	entities: [],
	status: Status.LOADING,
};

export const booksSlice = createSlice({
	name: 'books',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchBooks.pending, (state) => {
			state.status = Status.LOADING;
			state.entities = [];
		});
		builder.addCase(fetchBooks.fulfilled, (state, action) => {
			state.status = Status.SUCCESS;
			state.entities = action.payload.data;
		});
		builder.addCase(fetchBooks.rejected, (state) => {
			state.status = Status.FAILED;
			state.entities = [];
		});
		builder.addCase(fetchBook.pending, (state) => {
			state.status = Status.LOADING;
			state.entities = [];
		});
		builder.addCase(fetchBook.fulfilled, (state, action) => {
			state.status = Status.SUCCESS;
			state.entities = [action.payload.data];
		});
		builder.addCase(fetchBook.rejected, (state) => {
			state.status = Status.FAILED;
			state.entities = [];
		});
	},
});

// export const {} = booksSlice.actions;

export default booksSlice.reducer;
