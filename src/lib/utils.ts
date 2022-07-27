import axios, { AxiosResponse } from 'axios';
import Constants from 'expo-constants';
import { secureStore } from '../services/secure-store';


const constants = Constants?.manifest?.extra;


const instance = axios.create({
	baseURL: constants?.API_URL,
	timeout: parseInt(constants?.TIMEOUT),
	headers: {
		'x-api-key': constants?.X_API_KEY,
	}
});


// @request interceptor
instance.interceptors.request.use(async function (req) {
	console.log("fetching ", req.url)
	if (!req.headers) return;

	// has Attachement
	if (req.url == "signup/basic") req.headers['Content-Type'] = 'multipart/form-data';

	const session = await secureStore.get("session");
	if (session) req.headers.Authorization = 'Bearer ' + session.accessToken;
	return req;
});



// @response interceptor 
instance.interceptors.response.use(function (res) {
	return res;
}, function (err) {
	alert(err.response.data.message)
	console.log("\nStatus : " + err.response.status + "\n Body : ", err.response.data)
	return Promise.reject(err);
});



const response = (res: AxiosResponse) => res.data;


export const requests = {
	get: (url: string) => instance.get(url).then(response),
	post: (url: string, body: {}) => instance.post(url, body).then(response),
	put: (url: string, body: {}) => instance.put(url, body).then(response),
	delete: (url: string) => instance.delete(url).then(response),
};