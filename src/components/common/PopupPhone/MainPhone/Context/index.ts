import {createContext} from 'react';
import { IDetailPhone } from '../interface';

export interface IContextDetailPhone {
	data: IDetailPhone | null;
	setData: (any: any) => void;
}

export const ContextDetailPhone = createContext<IContextDetailPhone>({
	data: null,
	setData: () => null,
});
