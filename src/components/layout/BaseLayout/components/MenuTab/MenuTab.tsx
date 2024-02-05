import {useCallback} from 'react';

import {PropsMenuTab} from './interfaces';
import clsx from 'clsx';
import styles from './MenuTab.module.scss';
import {useRouter} from 'next/router';
import {ListPage} from '~/constants/config';
import Link from 'next/link';
import { Button, DatePicker } from 'antd';

function MenuTab({}: PropsMenuTab) {
	const router = useRouter();

	const checkActive = useCallback(
		(pathname: string) => {
			const currentRoute = router.pathname.split('/')[1];
			return pathname == `/${currentRoute}`;
		},
		[router]
	);
	
	return (
		<div id='menuTab' className={clsx(styles.container)}>
			<div className={styles.main}>
				
				<div className={styles.listTab}>
				
					{ListPage.map((v, i) => (
						<Link
							key={i}
							href={v.path}
							className={clsx(styles.tab, {
								[styles.active]: checkActive(v.path) || checkActive(v.pathActive!),
							})}
						>
							<p className={styles.tab_name}>{v.name}</p>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}

export default MenuTab;
