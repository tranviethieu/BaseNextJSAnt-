import axios from 'axios';
import {store} from '~/redux/store';

const createAxiosClient = () => {
	const axiosClient = axios.create({
		headers: {
			'content-type': 'application/json',
			Accept: 'text/plain',
		},
		timeout: 60000,
		timeoutErrorMessage: 'Request timeout',
	});

	axiosClient.interceptors.request.use(async (config) => {
		const token = store.getState().auth.token;
		const baseURL = process.env.NODE_ENV == 'production' ? store.getState().site.variableEnv?.publicApi : store.getState().site.variableEnv?.publicApiDev;

		// Cập nhật baseURL nếu có sự thay đổi
		if (config.baseURL !== baseURL) {
			config.baseURL = baseURL;
		}

		config.headers.Authorization = token ? 'Bearer ' + token : null;

		return config;
	});

	axiosClient.interceptors.response.use(
		(response) => {
			if (response && response.data) {
				return response.data;
			}

			return response;
		},
		(error) => {
			if (error.response && error.response.data) {
				throw error.response.data;
			}

			if (!axios.isCancel(error)) throw error;
		}
	);

	return axiosClient;
};

export default createAxiosClient;
