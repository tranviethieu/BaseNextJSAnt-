import {Fragment} from 'react';
import Loading from './components/Loading';
import Noti from './components/Noti';
import {PropsDataWrapper} from './interfaces';
import styles from './DataWrapper.module.scss';
import clsx from 'clsx';

function DataWrapper({loading, data = [], children, isWapperLoad, small = false, LoadingCustom, noti = <Noti />}: PropsDataWrapper) {
	return (
		<Fragment>
			{isWapperLoad ? (
				<Fragment>
					{loading ? (
						<div className={clsx(styles.container, {[styles.small]: small})}>
							{LoadingCustom || (
								<div className={styles.loading}>
									<Loading />
								</div>
							)}
						</div>
					) : null}
					{!loading ? children : null}
				</Fragment>
			) : (
				<Fragment>
					{loading ? (
						<div className={clsx(styles.container, {[styles.small]: small})}>
							{LoadingCustom || (
								<div className={styles.loading}>
									<Loading />
								</div>
							)}
						</div>
					) : null}
					{!loading && data?.length <= 0 ? (
						<div className={clsx(styles.container, {[styles.small]: small})}>
							<div className={styles.loading}>{noti}</div>
						</div>
					) : null}
					{!loading && data?.length > 0 ? children : null}
				</Fragment>
			)}
		</Fragment>
	);
}

export default DataWrapper;
