import Button from '../Button';
import {PiWarningCircleBold} from 'react-icons/pi';
import Popup from '~/components/common/Popup';
import {PropsDialog} from './interfaces';
import clsx from 'clsx';
import styles from './Dialog.module.scss';
import {useStyleClass} from '~/common/hooks/usStyleClass';
import {BsX} from 'react-icons/bs';

function DialogNotify({titleSubmit = 'Xác nhận', titleCancel = 'Hủy bỏ', Icon, className, ...props}: PropsDialog) {
	const styleClass = useStyleClass(props, styles);
	return (
		<Popup open={props.open} onClose={props.onClose}>
			<div className={clsx('effectZoom', styles.popup, styleClass)}>
				<div className={styles.titleFlex}>
					<h6>{props.title}</h6>
					<BsX className={styles.close} onClick={props.onClose} />
				</div>
				<div className={styles.iconWarn}>{Icon ? Icon : <PiWarningCircleBold />}</div>

				<p className={styles.note}>{props?.note}</p>
			</div>
		</Popup>
	);
}

export default DialogNotify;
