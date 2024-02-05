import ImageWithFallback from '../ImageWithFallback/ImageWithFallback';
import {PropsAvatar} from './interfaces';
import clsx from 'clsx';
import imageConfig from '~/constants/images/config';
import styles from './Avatar.module.scss';

function Avatar({src, className}: PropsAvatar) {
	return (
		<div className={clsx(styles.container, className)}>
			<ImageWithFallback className={styles.avatar} layout='fill' alt='avatar' src={src || imageConfig.placeholder} priority />
		</div>
	);
}

export default Avatar;
