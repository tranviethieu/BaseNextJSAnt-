import React from 'react';

import {PropsListDateHour} from './interfaces';
import styles from './ListDateHour.module.scss';
import {LIST_HOUR} from '~/constants/config';
import clsx from 'clsx';

function ListDateHour({hour, setHour, onClose}: PropsListDateHour) {
	return (
		<div className={styles.container}>
			{LIST_HOUR.map((v, i) => (
				<div
					onClick={() => {
						onClose();
						setHour(v);
					}}
					key={i}
					className={clsx(styles.item, {[styles.active]: hour == v})}
				>
					{v}
				</div>
			))}
		</div>
	);
}

export default ListDateHour;
