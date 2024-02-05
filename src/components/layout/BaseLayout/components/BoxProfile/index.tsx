import React, {useCallback, useState} from 'react';
import styles from './BoxProfile.module.scss';
import Link from 'next/link';
import clsx from 'clsx';
import {useRouter} from 'next/router';
import {LogoutCurve} from 'iconsax-react';
import {setStateLogin, setToken} from '~/redux/reducer/auth';
import {listMenuProfile} from '~/constants/config';
import Dialog from '~/components/common/Dialog';
import {store} from '~/redux/store';
import {setInfoAccount, setInfoHospital} from '~/redux/reducer/user';
import {setListMenuAccount, setPermissionsAccount} from '~/redux/reducer/permisstion';

function BoxProfile({onHide}: any) {
	const router = useRouter();

	// STATE
	const [showPopupSignOut, setShowPopupSignOut] = useState<boolean>(false);

	// Check active link
	const checkActive = useCallback(
		(pathname: string) => {
			const currentRoute = router.pathname;
			return pathname == `${currentRoute}`;
		},
		[router]
	);

	const handleLogout = async () => {
		setShowPopupSignOut(false);
		store.dispatch(setStateLogin(false));
		store.dispatch(setToken(null));
		store.dispatch(setInfoHospital(null));
		store.dispatch(setInfoAccount(null));
		store.dispatch(setPermissionsAccount([]));
		store.dispatch(setListMenuAccount([]));
	};

	return (
		<>
			<div className={styles.container}>
				{listMenuProfile.map((v, i) => (
					<Link
						href={v.href}
						key={i}
						className={clsx(styles.item, {
							[styles.active]: checkActive(v.href),
						})}
						onClick={onHide}
					>
						<div className={styles.icon}>
							<v.icon size={20} color='#4D5A66' />
						</div>
						<p className={styles.text}>{v.title}</p>
					</Link>
				))}
				<div
					className={styles.item}
					onClick={() => {
						setShowPopupSignOut(true);
						onHide();
					}}
				>
					<div className={styles.icon}>
						<LogoutCurve size={20} color='#4D5A66' />
					</div>
					<p className={styles.text}>Đăng xuất</p>
				</div>
			</div>
			<Dialog
				danger
				open={showPopupSignOut}
				onClose={() => setShowPopupSignOut(false)}
				onSubmit={handleLogout}
				titleCancel='Hủy'
				titleSubmit='Đăng xuất'
				title='Đăng xuất khỏi hệ thống!'
				note='Bạn có chắc chắn muốn đăng xuất khỏi hệ thống!'
			/>
		</>
	);
}

export default BoxProfile;
