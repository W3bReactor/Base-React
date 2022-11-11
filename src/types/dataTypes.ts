export interface IData {
	id: string;
	name: string;
	books: IBook[];
}

export interface IBook {
	id: string;
	name: string;
	authors: string[];
	mark: number;
	subgenre: string;
	price: number;
	annotation: string;
	reviews: IReview[];
}

export interface IReview {
	id: string;
	user: IUser;
	text: string;
	rating: number;
}

export interface IUser {
	id: string;
	name: string;
}
