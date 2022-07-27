import { requests } from './utils';


export const NotificationAPI = {
	set: (token: string): Promise<any> => requests.post('notification/set', token),
};