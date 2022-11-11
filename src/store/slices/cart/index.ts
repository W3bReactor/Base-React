import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartEntity, CartState } from './types';

const initialState: CartState = {
	entities: [],
	totalPrice: 0,
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addEntity(state, action: PayloadAction<CartEntity>) {
			const findEntity = state.entities.find(
				(entity) => entity.id === action.payload.id
			);
			state.totalPrice = state.totalPrice + action.payload.price;
			if (typeof findEntity === 'undefined') {
				state.entities = [...state.entities, { ...action.payload, count: 1 }];
			}
			if (findEntity && findEntity.count) {
				findEntity.count = findEntity.count + 1;
			}
		},
		removeEntity(state, action: PayloadAction<CartEntity>) {
			const findEntity = state.entities.find(
				(entity) => entity.id === action.payload.id
			);
			state.totalPrice = state.totalPrice - action.payload.price;
			if (findEntity && findEntity.count) {
				if (findEntity.count === 1) {
					state.entities = state.entities.filter(
						(entity) => entity.id !== findEntity.id
					);
				} else {
					findEntity.count = findEntity.count - 1;
				}
			}
		},
	},
});

export const { addEntity, removeEntity } = cartSlice.actions;

export default cartSlice.reducer;
