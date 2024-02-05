import React, {useState} from 'react';

import {PropsFooter} from './interfaces';
import styles from './Footer.module.scss';
import ImageFill from '~/components/common/ImageFill';
import icons from '~/constants/images/icons';
import clsx from 'clsx';
import {ArrowDown2} from 'iconsax-react';
import Popup from '~/components/common/Popup';
import PopupChangeTheme from './PopupChangeTheme';
import {useSelector} from 'react-redux';
import {RootState} from '~/redux/store';

function Footer({}: PropsFooter) {
	const {bgColor} = useSelector((state: RootState) => state.site);

	const [openLang, setOpenLang] = useState<boolean>(false);
	const [openColor, setOpenColor] = useState<boolean>(false);

	return (
		<div className={styles.container}>
			<div className={styles.info}>
				<div className={styles.box_icon}>
					<ImageFill className={styles.icon} src={icons.shield} />
				</div>
				<p className={clsx(styles.text, styles.text_title)}>MEDICAL ECOSYSTEM</p>
			</div>
			<div className={styles.box}>
				<p className={styles.text}>© 2023 elSAGA Technology JSC</p>
			</div>
			<div className={clsx(styles.box, styles.lang)} onClick={() => setOpenLang(!openLang)}>
				<p className={styles.text}>
					Ngôn ngữ: <span>Tiếng Việt</span>
				</p>
				<div className={clsx(styles.arrow, {[styles.open]: openLang})}>
					<ArrowDown2 size={12} className={styles.icon_arrow} />
				</div>
			</div>

			<div className={clsx(styles.box, styles.lang)} onClick={() => setOpenColor(!openColor)}>
				<p className={styles.text}>Giao diện</p>
				<div style={{background: bgColor}} className={styles.color}></div>
				<div className={clsx(styles.arrow, {[styles.open]: openColor})}>
					<ArrowDown2 size={12} className={styles.icon_arrow} />
				</div>
			</div>

			<Popup open={openColor} onClose={() => setOpenColor(false)}>
				<PopupChangeTheme onClose={() => setOpenColor(false)} />
			</Popup>
		</div>
	);
}

export default Footer;
