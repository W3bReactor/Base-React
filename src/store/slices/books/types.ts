import { IBook } from '../../../types/dataTypes';
import { Status } from '../../common/enums';

export interface BookState {
	entities: [] | IBook[];
	status: Status;
}

export interface IBooksData {
	data: IBook[];
}
export interface IBookData {
	data: IBook;
}
