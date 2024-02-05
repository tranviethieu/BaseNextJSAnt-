import React, {useState} from 'react';
import {PropsHeader} from './interfaces';
import styles from './Header.module.scss';
import Link from 'next/link';
import icons from '~/constants/images/icons';
import ImageFill from '~/components/common/ImageFill';
import Avatar from '~/components/common/Avatar';
import TippyHeadless from '@tippyjs/react/headless';
import BoxProfile from '../BoxProfile';
import {RootState} from '~/redux/store';
import {useSelector} from 'react-redux';
import BoxNotify from '../BoxNotify';

function Header({}: PropsHeader) {
	const [open, setOpen] = useState<boolean>(false);
	const [openNotify, setOpenNotify] = useState<boolean>(false);
	const [countUnRead, setCountUnRead] = useState<number>(0);

	const {variableEnv, routerActive} = useSelector((state: RootState) => state.site);
	const {infoAccount, infoHospital} = useSelector((state: RootState) => state.user);

	// useQuery([QUERY_KEY.NotificationsCountUnRead], {
	// queryFn: () =>
	// 	httpRequest({
	// 		http: notificationsServices.getCountUnRead({}),
	// 	}),
	// onSuccess(data) {
	// 	setCountUnRead(typeof data == 'boolean' ? 0 : data);
	// },
	// });

	return (
		<div className={styles.container}>
			<div className={styles.left}>
				<Link href={routerActive ? routerActive : '/'} className={styles.box_logo}>
					<ImageFill
						src={infoHospital?.logoId ? `${variableEnv?.publicApiMedia}/${infoHospital?.logoId}` : ''}
						alt='logo'
						className={styles.box_logo}
					/>
				</Link>
				<div className={styles.info}>
					{/* <div className={styles.box_info_image}>
						<ImageFill src={icons.tongDai} className={styles.info_image} alt='logo' />
					</div>
					<h4 className={styles.info_name}>QUẢN LÝ TỔNG ĐÀI</h4> */}
				</div>
			</div>
			<div className={styles.right}>
				<TippyHeadless
					maxWidth={'100%'}
					interactive
					visible={openNotify}
					onClickOutside={() => setOpenNotify(false)}
					placement='bottom'
					render={(attrs) => <BoxNotify onClose={() => setOpenNotify(false)} />}
				>
					<div className={styles.box_noti} onClick={() => setOpenNotify(!openNotify)}>
						<ImageFill className={styles.icon} src={icons.bell} />
						{countUnRead > 0 ? <div className={styles.number_noti}>{countUnRead > 9 ? <span>9+</span> : <span>{countUnRead}</span>}</div> : null}
					</div>
				</TippyHeadless>

				<TippyHeadless
					maxWidth={'100%'}
					interactive
					visible={open}
					onClickOutside={() => setOpen(false)}
					placement='bottom-start'
					render={(attrs) => <BoxProfile onHide={() => setOpen(false)} />}
				>
					<div className={styles.account} onClick={() => setOpen(!open)}>
						<div className={styles.box_avatar}>
							<Avatar src={infoAccount?.avatar ? `${variableEnv?.publicApiMedia}/${infoAccount?.avatar}` : ''} className={styles.avatar} />
						</div>
						<p className={styles.name}>{infoAccount?.fullName}</p>
					</div>
				</TippyHeadless>
				<div className={styles.icon_list}>
					<ImageFill className={styles.icon} src={icons.icon_list} />
				</div>
			</div>
		</div>
	);
}

export default Header;
