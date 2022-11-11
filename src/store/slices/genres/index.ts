import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GenresState, IGenreData } from './types';
import { instance } from '../../../utils/instance';
import { Status } from '../../common/enums';

export const fetchGenres = createAsyncThunk<IGenreData>(
	'genres/fetchGenres',
	async () => {
		const { data } = await instance.get<IGenreData>('genres');
		return data;
	}
);

const initialState: GenresState = {
	entities: [],
	status: Status.LOADING,
	activeGenre: '',
};

export const genresSlice = createSlice({
	name: 'genres',
	initialState,
	reducers: {
		setActiveGenre(state, action: PayloadAction<string>) {
			state.activeGenre = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchGenres.pending, (state) => {
			state.status = Status.LOADING;
			state.entities = [];
		});
		builder.addCase(fetchGenres.fulfilled, (state, action) => {
			state.status = Status.SUCCESS;
			state.entities = action.payload.data;
		});
		builder.addCase(fetchGenres.rejected, (state) => {
			state.status = Status.FAILED;
			state.entities = [];
		});
	},
});

export const { setActiveGenre } = genresSlice.actions;

export default genresSlice.reducer;
