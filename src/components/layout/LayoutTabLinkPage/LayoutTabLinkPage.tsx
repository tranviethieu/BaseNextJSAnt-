import clsx from 'clsx';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {Fragment, useCallback} from 'react';

import {PropsLayoutTabLinkPage} from './interfaces';
import styles from './LayoutTabLinkPage.module.scss';

function LayoutTabLinkPage({listUrl, children}: PropsLayoutTabLinkPage) {
	const router = useRouter();

	const checkActive = useCallback(
		(pathname: string) => {
			return pathname == router.pathname;
		},
		[router]
	);

	return (
		<div className={styles.flex}>
			<div className={clsx(styles.container, {[styles.outline]: true})}>
				{listUrl.map((item, i) => (
					<Link
						href={item.path}
						className={clsx(styles.item, {
							[styles.active]: checkActive(item.path),
						})}
						key={i}
					>
						{item.name}
					</Link>
				))}
			</div>
			<div className={styles.children}>{children}</div>
		</div>
	);
}

export default LayoutTabLinkPage;
