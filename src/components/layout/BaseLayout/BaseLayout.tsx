import {PropsBaseLayout} from './interfaces';

import Header from './components/Header';
import MenuTab from './components/MenuTab';
import clsx from 'clsx';
import styles from './BaseLayout.module.scss';
import Footer from './components/Footer';
import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '~/redux/store';
import HistoryCallRecent from './components/HistoryCallRecent';

function BaseLayout({isChild = false, children}: PropsBaseLayout) {
	const {fontSize, loading, bgColor} = useSelector((state: RootState) => state.site);

	useEffect(() => {
		if (!loading) {
			document.body.classList.remove('global-size-sm', 'global-size-md', 'global-size-xl');
			document.body.classList.add(fontSize == 'sm' ? 'global-size-sm' : fontSize == 'md' ? 'global-size-md' : 'global-size-xl');
		}
	}, [fontSize, loading]);

	return (
		<div style={{background: bgColor}} className={clsx(styles.container)}>
			<Header />
			<div className={styles.box_main}>
				<div className={styles.main}>
					<MenuTab />
					<div className={clsx(styles.children, {[styles.notChild]: !isChild})}>{children}</div>
				</div>
				{/* <HistoryCallRecent /> */}
			</div>
			<Footer />
		</div>
	);
}

export default BaseLayout;
