import Button from '~/components/common/Button';
import {Fragment} from 'react';
import Head from 'next/head';
import ImageFill from '~/components/common/ImageFill';
import {useSelector} from 'react-redux';
import {RootState} from '~/redux/store';

export default function Page() {
	const {routerActive} = useSelector((state: RootState) => state.site);

	return (
		<Fragment>
			<Head>
				<title>404 - Not found</title>
			</Head>
			<div className='page404'>
				<div className='image404'>
					<ImageFill className='image' default src='/static/images/404.png' />
				</div>
				<h3>Rất tiếc!!!</h3>
				<p>Trang bạn đang tìm kiếm không được tìm thấy.</p>
				<Button href={routerActive} primary bold maxContent rounded_8>
					Trở về trang chủ
				</Button>
			</div>
		</Fragment>
	);
}
