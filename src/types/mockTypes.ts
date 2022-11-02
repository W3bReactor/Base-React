export interface IData {
	id: string;
	name: string;
	books: IBook[];
}

export interface IBook {
	id: string;
	name: string;
	author: string;
	genre: string;
	price: number;
	annotation: string;
	reviews: IReview[];
}

export interface IReview {
	id: string;
	user: IUser;
	text: string;
}

export interface IUser {
	id: string;
	name: string;
}
