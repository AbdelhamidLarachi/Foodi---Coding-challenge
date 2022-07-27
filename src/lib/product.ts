import { requests } from './utils';


export const ProductAPI = {
	get: (): Promise<any> => requests.get('product/get'),
};