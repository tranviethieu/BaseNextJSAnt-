import {Fragment, useEffect} from 'react';
import {RootState, store} from '~/redux/store';
import {getItemStorage, setItemStorage} from '~/common/func/localStorage';
import {setBgColor, setFontSize, setIsMobile, setLoading, setRouterActive, setVariableEnv} from '~/redux/reducer/site';
import {setStateLogin, setToken} from '~/redux/reducer/auth';
import {setCookie} from 'cookies-next';
import {setPhoneCheck} from '~/redux/reducer/user';

import {PropsSplashScreen} from './interfaces';
import clsx from 'clsx';
import styles from './SplashScreen.module.scss';
import {useSelector} from 'react-redux';
import {setInfoAccount, setInfoHospital} from '~/redux/reducer/user';
import {KEY_STORE, ListPage} from '~/constants/config';
import {useRouter} from 'next/router';
import {getEnvConfig} from '~/common/func/env';
import {setPermissionsAccount, setListMenuAccount} from '~/redux/reducer/permisstion';

function SplashScreen({}: PropsSplashScreen) {
	const router = useRouter();

	const {token: tokenMeapp} = router.query;

	const {token, isLogin} = useSelector((state: RootState) => state.auth);
	const {permissionsAccount, listMenuAccount} = useSelector((state: RootState) => state.permisstion);
	const {infoHospital, infoAccount} = useSelector((state: RootState) => state.user);
	const {loading, fontSize, bgColor, variableEnv, routerActive} = useSelector((state: RootState) => state.site);

	// Connect meapp
	useEffect(() => {
		if (router.pathname == '/auth/login' && !!tokenMeapp) {
			store.dispatch(setToken(tokenMeapp as string));
			store.dispatch(setStateLogin(true));
			store.dispatch(setFontSize('sm'));
			store.dispatch(setBgColor('linear-gradient(135deg, rgb(71, 120, 209) 29%, rgb(247, 170, 248) 100%)'));
			router.replace('/auth/station', undefined, {scroll: false, shallow: false});
		}
	}, [router]);

	// Đọc biến env từ folder public
	useEffect(() => {
		(async () => {
			const envConfig = await getEnvConfig();

			if (envConfig) {
				store.dispatch(
					setVariableEnv({
						publicApi: envConfig.NEXT_PUBLIC_API,
						publicApiDev: envConfig.NEXT_PUBLIC_API_DEV,
						publicApiCore: envConfig.NEXT_PUBLIC_API_CORE,
						publicApiMeApp: envConfig.NEXT_PUBLIC_API_ME_APP,
						publicApiSocket: envConfig.NEXT_PUBLIC_SOCKET,
						publicApiMedia: envConfig.NEXT_PUBLIC_API_MEDIA,
						publicImgae: envConfig.NEXT_PUBLIC_IMAGES,
					})
				);
			}
		})();
	}, []);

	// Set data vào redux từ localStorage
	useEffect(() => {
		(async () => {
			const state = await getItemStorage(KEY_STORE);

			if (!!state) {
				setCookie(KEY_STORE, state);

				store.dispatch(setToken(state.token));
				store.dispatch(setStateLogin(state.isLogin));
				store.dispatch(setInfoHospital(state.infoHospital));
				store.dispatch(setInfoAccount(state.infoAccount));
				store.dispatch(setFontSize(state.fontSize || 'sm'));
				store.dispatch(setBgColor(state.bgColor || 'linear-gradient(135deg, rgb(71, 120, 209) 29%, rgb(247, 170, 248) 100%)'));
				store.dispatch(setVariableEnv(state.variableEnv));
				store.dispatch(setPermissionsAccount(state.permissionsAccount));
				store.dispatch(setListMenuAccount(state.listMenuAccount));
				store.dispatch(setRouterActive(state.routerActive));
				store.dispatch(setRouterActive(state.setPhoneCheck));

			}

			store.dispatch(setLoading(false));

			const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
			store.dispatch(setIsMobile(isMobile));
		})();
	}, []);

	// Lưu vào localStorage
	useEffect(() => {
		if (!loading) {
			setItemStorage(KEY_STORE, {
				token: token,
				isLogin: isLogin,
				infoHospital: infoHospital,
				infoAccount: infoAccount,
				fontSize: fontSize,
				bgColor: bgColor,
				variableEnv: variableEnv,
				permissionsAccount: permissionsAccount,
				listMenuAccount: listMenuAccount,
				routerActive: routerActive,
				setPhoneCheck: setPhoneCheck,
			});
			setCookie(KEY_STORE, {
				token: token,
				isLogin: isLogin,
				infoHospital: infoHospital,
				infoAccount: infoAccount,
				fontSize: fontSize,
				bgColor: bgColor,
				variableEnv: variableEnv,
				permissionsAccount: permissionsAccount,
				listMenuAccount: listMenuAccount,
				routerActive: routerActive,
				setPhoneCheck: setPhoneCheck,
			});
		}
	}, [token, isLogin, loading, infoHospital, infoAccount, fontSize, bgColor, variableEnv, permissionsAccount, listMenuAccount, routerActive, setPhoneCheck]);

	return (
		<Fragment>
			<div className={clsx(styles.container, {[styles.close]: !loading})}>
				<div className={styles.logo}>
					<img src='https://meapp.benhvien.tech/static/media/loadingMeapp.b167da29f35bccc2beac.gif' alt='SplashScreen ' />
				</div>
			</div>
		</Fragment>
	);
}

export default SplashScreen;
