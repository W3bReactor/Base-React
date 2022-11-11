import { Status } from '../../common/enums';

export interface IGenre {
	id: string;
	name: string;
}

export interface IGenreData {
	data: IGenre[];
}

export interface GenresState {
	entities: [] | IGenre[];
	status: Status;
	activeGenre: string;
}
