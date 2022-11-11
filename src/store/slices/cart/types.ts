export interface CartState {
	entities: CartEntity[] | [];
	totalPrice: number;
}

export interface CartEntity {
	id: string;
	name: string;
	authors: string[];
	subgenre: string;
	price: number;
	count?: number;
}
