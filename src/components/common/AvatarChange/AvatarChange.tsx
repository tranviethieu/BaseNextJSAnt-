import {AiFillCamera} from 'react-icons/ai';
import Image from 'next/image';
import ImageWithFallback from '~/components/common/ImageWithFallback/ImageWithFallback';
import styles from './AvatarChange.module.scss';

function AvatarChange({src, name, onChange}: any) {
	return (
		<div className={styles.container}>
			{src ? <ImageWithFallback className={styles.AvatarChange} src={src} layout='fill' alt='AvatarChange' /> : null}
			<label className={styles.input}>
				<AiFillCamera />
				<input hidden type='file' name={name} onChange={onChange} onClick={(e: any) => (e.target.value = null)} />
			</label>
		</div>
	);
}

export default AvatarChange;
