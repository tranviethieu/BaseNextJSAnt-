import Button from '~/components/common/Button';
import ImageFill from '~/components/common/ImageFill';
import {PropsNoti} from './interfaces';
import imageConfig from '~/constants/images/config';
import styles from './Noti.module.scss';
import clsx from 'clsx';

function Noti({
	disableButton,
	img = imageConfig.empty_table,
	title = 'Dữ liệu trống',
	des = 'Hiện tại dữ liệu đang trống!',
	titleButton = ' Tạo ngay',
	onClick = () => {},
	small = false,
}: PropsNoti) {
	return (
		<div className={styles.container}>
			<div className={clsx(styles.img, {[styles.small]: small})}>
				<ImageFill className={styles.icon} src={img} />
			</div>
			<h3>{title}</h3>
			<p>{des}</p>
			{!disableButton ? (
				<div className={styles.btn}>
					<Button primary bold rounded_8 onClick={onClick}>
						{titleButton}
					</Button>
				</div>
			) : null}
		</div>
	);
}

export default Noti;
