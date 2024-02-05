import axios from 'axios';
import {store} from '~/redux/store';

const createAxiosClientCore = () => {
	const tokenTest = "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkRGRTcwQkNBRkFCMkUzQTQwRjQ4MzlFREE3RkJDRkIzQkQ0MUE1QjBSUzI1NiIsInR5cCI6ImF0K2p3dCIsIng1dCI6IjMtY0x5dnF5NDZRUFNEbnRwX3ZQczcxQnBiQSJ9.eyJuYmYiOjE3MDY3NTQzMTcsImV4cCI6MTcwNjg0MDcxNywiaXNzIjoiaHR0cHM6Ly9hcGktbWVhcHAuYmVuaHZpZW4udGVjaC9pZGVudGl0eSIsImNsaWVudF9pZCI6Imh0c3MuY2xpZW50Iiwic3ViIjoiNjU3MTIxODZjMzI1ZTY2ZjcxMDQyNzNiIiwiYXV0aF90aW1lIjoxNzA2NzU0MzE3LCJpZHAiOiJsb2NhbCIsImVtYWlsIjoiaW5mb0BiZW5odmllbmFudmlldC5jb20iLCJwaG9uZV9udW1iZXIiOiIwOTY1OTgzNzczIiwiZ2VuZGVyIjoiMSIsImFkZHJlc3MiOiJ4LCBQaMaw4budbmcgS2jGsMahbmcgTWFpLCBRdeG6rW4gVGhhbmggWHXDom4sIFRow6BuaCBwaOG7kSBIw6AgTuG7mWkiLCJiaXJ0aGRhdGUiOiIxNi8xMi8xOTY5IiwiY2hhdElkIjoiNjU3MTIxODZjMzI1ZTY2ZjcxMDQyNzNjIiwiYXZhdGFyIjoiNjU5YjY3Y2VjNzdlMTk5YTk4MzJmYTRiIiwidXNlck5hbWUiOiJpbmZvQGJlbmh2aWVuYW52aWV0LmNvbSIsImZ1bGxOYW1lIjoiQuG7h25oIHZp4buHbiBBbiBWaeG7h3QiLCJ0aXRsZSI6IiIsIndvcmsiOiIiLCJjb2RlIjoiYWRtaW4iLCJpc1Jvb3QiOiJGYWxzZSIsImRlcGFydG1lbnRJZCI6IjY1NzEzNDk4YzMyNWU2NmY3MTA0Mjc2MCIsImhvc3BpdGFsSWQiOiI2NTcxMWZlYWMzMjVlNjZmNzEwM2Y4OWUiLCJyb2xlIjpbIjY1N2JkODYxYTc3YmM0OTczZjVkZDAzNSIsIjY0ODdlN2Q4NzAxZjg5MzVhMDc2Y2E4NSIsIjY1N2JkODZlYTc3YmM0OTczZjVkZDAzNiIsIjY1N2JkOTY1YTc3YmM0OTczZjVkZDAzYSIsIjY1YTY5YTFlNmQyOGM4MzU0ZmE5N2ZlNSIsIjY1YTY5YTQ1NmQyOGM4MzU0ZmE5N2ZlNiIsIjY1YTY5YTU3NmQyOGM4MzU0ZmE5N2ZlNyIsIjY1YTY5YTgxNmQyOGM4MzU0ZmE5N2ZlOSIsIjY1YWYyMzI3MzE3N2M1MzM4MzAzNGRjMCJdLCJqdGkiOiJBQjdCQzYzRDYyRENFNkEyMzM5NjQzQ0MxQTA4OTQxRSIsImlhdCI6MTcwNjc1NDMxNywic2NvcGUiOlsib3BlbmlkIiwicHJvZmlsZSIsIm9mZmxpbmVfYWNjZXNzIl0sImFtciI6WyJwd2QiXX0.NiIG-ftb9500o6hkjkm2JoEMcfONSsZh0-lrOH7wpN4Be6MQCF0V2llbHnHNheeqccuYglV7e8g6DDDfHW6-wTeog5ferYvonA9PFYXMGqtgcpcHBzgZo79WgofdPd5SR7aC8ex5P5IOn_PA2hWmxgC_1hjFHSJwFTQts2Ed2iDM7SmG45-hAFycAnthyacZBTQhEF0V9Q8_YXfausv5KHnhyTh3wTrSb-iAK5kRdr_AvmKRgoLHRZ01CXdMt1iUyuXaVJiZDWmzFHX9Xk1qshjYu3n64lXO4ldDHc0EyyMp524CXeVwoJfM1HE4bMbGUhJzzUfaBNeisiF_ojbehA";
	const axiosClientCore = axios.create({
		headers: {
			'content-type': 'application/json',
			Accept: 'text/plain',
		},
		timeout: 60000,
		timeoutErrorMessage: 'Request timeout',
	});

	axiosClientCore.interceptors.request.use(async (config) => {
		const token = store.getState().auth.token;
		const baseURL = store.getState().site.variableEnv?.publicApiCore;

		// Cập nhật baseURL nếu có sự thay đổi
		if (config.baseURL !== baseURL) {
			config.baseURL = baseURL;
		}

		//config.headers.Authorization = token ? 'Bearer ' + token : null;
		config.headers.Authorization = tokenTest;

		return config;
	});

	axiosClientCore.interceptors.response.use(
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

	return axiosClientCore;
};

export default createAxiosClientCore;
