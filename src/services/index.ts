import {logout} from '~/redux/reducer/auth';
import {toastError, toastInfo, toastSuccess, toastWarn} from '~/common/func/toast';

import {store} from '~/redux/store';

enum RESULT {
	SUCCESSFUL = 0,
}

export const httpRequest = async ({
	http,
	setLoading,
	msgSuccess = 'Thành công',
	showMessageSuccess = false,
	showMessageFailed = false,
	onError,
}: {
	http: any;
	setLoading?: (any: any) => void;
	onError?: () => void;
	showMessageSuccess?: boolean;
	showMessageFailed?: boolean;
	msgSuccess?: string;
}) => {
	setLoading && setLoading(() => true);

	try {
		const res: any = await http;

		if (res?.code == RESULT.SUCCESSFUL) {
			showMessageSuccess && toastSuccess({msg: msgSuccess || res?.message});
			return res?.data || true;
		} else {
			onError && onError();
			showMessageFailed && toastWarn({msg: res?.message});
			return res?.data;
		}
	} catch (err: any) {
		console.log({err});

		if (err?.error?.code == 401 || err?.response?.status == 401) {
			store.dispatch(logout());
			// store.dispatch(setInfoHospital(null));
			// store.dispatch(setInfoAccount(null));
			// store.dispatch(setStation(null));
			// store.dispatch(setStationId(null));
			// store.dispatch(setPermissionsAccount([]));
			// store.dispatch(setListMenuAccount([]));
			showMessageFailed && toastError({msg: 'Hết hạn đăng nhập'});
		} else if (typeof err == 'string') {
			showMessageFailed && toastWarn({msg: err || 'Có lỗi đã xảy ra'});
		} else if (err?.code == 'ERR_NETWORK' || err?.code == 'ECONNABORTED') {
			showMessageFailed && toastInfo({msg: 'Kiểm tra kết nối internet'});
		}
	} finally {
		setLoading && setLoading(() => false);
	}
};
