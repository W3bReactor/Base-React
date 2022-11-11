import { RootState } from '../../index';

export const selectCartEntities = (state: RootState) => state.cart.entities;
export const selectCartTotalPrice = (state: RootState) => state.cart.totalPrice;
export const selectCartEntityById = (id: string) => (state: RootState) =>
	state.cart.entities.find((entity) => entity.id === id);
