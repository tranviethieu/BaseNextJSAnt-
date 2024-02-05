import React, {Fragment, useState} from 'react';
import {IoCloseSharp} from 'react-icons/io5';

import {PropsPopupChangeTheme} from './interfaces';
import styles from './PopupChangeTheme.module.scss';
import clsx from 'clsx';
import Button from '~/components/common/Button';
import {useSelector} from 'react-redux';
import {RootState, store} from '~/redux/store';
import {setBgColor, setFontSize} from '~/redux/reducer/site';
import {listBgColor} from '~/constants/config/data';

function PopupChangeTheme({onClose}: PropsPopupChangeTheme) {
	const {fontSize, bgColor} = useSelector((state: RootState) => state.site);

	const [typeTheme, setTypeTheme] = useState<number>(1);
	const [typeFont, settypeFont] = useState<'sm' | 'md' | 'xl'>(fontSize);
	const [bg, setBg] = useState<string>(bgColor);

	const handleChangeTheme = () => {
		store.dispatch(setFontSize(typeFont));
		store.dispatch(setBgColor(bg));
		onClose();
	};

	const handleSetDefaultTheme = () => {
		store.dispatch(setFontSize('sm'));
		store.dispatch(setBgColor('linear-gradient(135deg, rgb(71, 120, 209) 29%, rgb(247, 170, 248) 100%)'));
		onClose();
	};

	return (
		<div className={styles.container}>
			<h5 className={styles.title}>Cấu hình cài đặt</h5>
			<div className={styles.main}>
				<div className={styles.tabs}>
					<div className={clsx(styles.tab, {[styles.active]: typeTheme == 1})} onClick={() => setTypeTheme(1)}>
						<p>Giao diện</p>
					</div>
					<div className={clsx(styles.tab, {[styles.active]: typeTheme == 2})} onClick={() => setTypeTheme(2)}>
						<p>Cỡ chữ</p>
					</div>
				</div>
				<div className={styles.children}>
					{typeTheme == 1 ? (
						<div className={styles.bgs}>
							{listBgColor.map((v, i) => (
								<div key={i} style={{background: v}} className={clsx(styles.bg, {[styles.active]: bg == v})} onClick={() => setBg(v)}></div>
							))}
						</div>
					) : null}

					{typeTheme == 2 ? (
						<Fragment>
							<div className={styles.fonts}>
								<div className={clsx(styles.tabFont, {[styles.active]: typeFont == 'sm'})} onClick={() => settypeFont('sm')}>
									<p>Nhỏ</p>
								</div>
								<div className={clsx(styles.tabFont, {[styles.active]: typeFont == 'md'})} onClick={() => settypeFont('md')}>
									<p>Vừa</p>
								</div>
								<div className={clsx(styles.tabFont, {[styles.active]: typeFont == 'xl'})} onClick={() => settypeFont('xl')}>
									<p>To</p>
								</div>
							</div>

							<p className={styles.des}>Xem trước: </p>
							<p className={clsx(styles.value, {[styles.sm]: typeFont == 'sm', [styles.md]: typeFont == 'md', [styles.xl]: typeFont == 'xl'})}>
								Medical Appointment
							</p>
						</Fragment>
					) : null}
				</div>
			</div>

			<div className={styles.listBtn}>
				<div>
					<Button grey p_8_24 rounded_6 onClick={onClose}>
						Hủy
					</Button>
				</div>
				<div>
					<Button primary_outline p_8_24 rounded_6 onClick={handleSetDefaultTheme}>
						Mặc định
					</Button>
				</div>
				<div>
					<Button primary p_8_24 rounded_6 onClick={handleChangeTheme}>
						Thay đổi
					</Button>
				</div>
			</div>

			<div className={styles.close} onClick={onClose}>
				<IoCloseSharp size={24} />
			</div>
		</div>
	);
}

export default PopupChangeTheme;
