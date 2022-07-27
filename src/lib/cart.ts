import { requests } from './utils';


export const CartAPI = {
	get: (): Promise<any> => requests.get('cart/get'),
	checkout: (products: any): Promise<any> => requests.post('checkout', products),
};