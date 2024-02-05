import {toastError, toastWarn} from '~/common/func/toast';

import Image from 'next/image';
import {IoClose} from 'react-icons/io5';
import {MAXIMUM_AVATAR} from '~/constants/config';
import {PropsInputUploadImage} from './interfaces';
import styles from './InputUploadImage.module.scss';
import {useState} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '~/redux/store';

function InputUploadImage({label, name, value, setForm}: PropsInputUploadImage) {
	const {variableEnv} = useSelector((state: RootState) => state.site);

	const [imgBase64, setImgBase64] = useState<any>('');

	function getBase64(file: any) {
		var reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = function () {
			setImgBase64(reader.result);
		};
	}

	const handleSelectImg = (e: any) => {
		/*---------- Kiểm tra nếu có file ----------*/
		if (!e.target.files[0]) {
			return;
		}

		const {size, type} = e.target.files[0];
		const maxSize = MAXIMUM_AVATAR; //MB

		if (size / 1000000 > maxSize) {
			toastError({msg: `Kích thước tối đa của ảnh là ${maxSize} mb`});
			return;
		} else if (type !== 'image/jpeg' && type !== 'image/jpg' && type !== 'image/png' && type !== 'image/gif') {
			toastWarn({
				msg: `Định dạng tệp không chính xác, đuôi tệp chấp nhận .jpg, .jpeg, .png`,
			});
			return;
		}

		/*---------- Chuyển thành dạng base64 ----------*/
		getBase64(e.target.files[0]);

		/*---------- Set form ----------*/
		setForm((prev: any) => ({...prev, [name]: e.target.files[0]}));
	};

	return (
		<div className={styles.container}>
			{label ? (
				<label htmlFor='input_file' className={styles.label}>
					{label}
				</label>
			) : null}
			<label className={styles.box_image} htmlFor='input_file'>
				{imgBase64 || value ? (
					<>
						<Image
							src={imgBase64 ? imgBase64 : variableEnv?.publicImgae + '/' + value}
							alt='file base64'
							layout='fill'
							objectFit='contain'
							className={styles.imageBase64}
						/>
						{value ? (
							<label className={styles.btnChange}>
								<input
									hidden
									name={name}
									type='file'
									id='input_file'
									onChange={handleSelectImg}
									onClick={(e: any) => (e.target.value = null)}
								/>
								Thay đổi
							</label>
						) : (
							<div
								className={styles.close}
								onClick={(e) => {
									e.preventDefault();
									setImgBase64(null);
									setForm((prev: any) => ({
										...prev,
										[name]: '',
									}));
								}}
							>
								<IoClose color='#000' size={20} />
							</div>
						)}
					</>
				) : (
					<>
						<input hidden name={name} type='file' id='input_file' onChange={handleSelectImg} onClick={(e: any) => (e.target.value = null)} />
						<p className={styles.type}>PNG /JPG / JPeg</p>
						<p className={styles.size}>Max file size: 10MB</p>
						<p className={styles.text}>Kéo và thả hình ảnh để tải lên</p>
						<span className={styles.or}>Hoặc</span>
						<div className={styles.btn}>Tải lên</div>
					</>
				)}
			</label>
		</div>
	);
}

export default InputUploadImage;
