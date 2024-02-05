import {toast} from 'react-toastify';

export const toastText = ({msg}: {msg: string}) =>
	toast.info(msg, {
		position: 'top-center',
		autoClose: 3000,
		hideProgressBar: true,
		closeButton: false,
		className: 'toastify-custom',
		icon: false,
	});

export const toastSuccess = ({msg}: {msg: string}) =>
	toast.success(msg, {
		autoClose: 3000,
		hideProgressBar: true,
		closeButton: true,
		className: 'toastify-custom-success',
	});

export const toastInfo = ({msg}: {msg: string}) =>
	toast.info(msg, {
		autoClose: 3000,
		hideProgressBar: true,
		closeButton: true,
		className: 'toastify-custom-info',
		icon: true,
	});
export const toastWarn = ({msg}: {msg: string}) =>
	toast.warning(msg, {
		autoClose: 3000,
		hideProgressBar: true,
		closeButton: true,
		className: 'toastify-custom-warn',
		icon: true,
	});
export const toastError = ({msg}: {msg: string}) =>
	toast.error(msg, {
		autoClose: 3000,
		hideProgressBar: true,
		closeButton: true,
		className: 'toastify-custom-error',
		icon: true,
	});
