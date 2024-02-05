import {PropsTabNavLink} from './interface';
import clsx from 'clsx';
import styles from './TabNavLink.module.scss';
import {useRouter} from 'next/router';

function TabNavLink({listHref, query, outline, isPadding = true}: PropsTabNavLink) {
	const router = useRouter();
	const handleActive = (value: string | null) => {
		const {[query]: str, page, PageSize, patientCode, ...rest} = router.query;

		if (value == null) {
			return router.replace(
				{
					query: {
						...rest,
					},
				},
				undefined,
				{
					scroll: false,
				}
			);
		}

		return router.replace(
			{
				query: {
					...rest,
					[query]: value,
				},
			},
			undefined,
			{
				scroll: false,
			}
		);
	};

	return (
		<div
			className={clsx(styles.container, {
				[styles.outline]: outline,
				[styles.isPadding]: isPadding,
			})}
		>
			{listHref.map((item, i, arr) => (
				<div
					className={clsx(styles.item, {
						[styles.active]: router.query[`${query}`]
							? router.query[`${query}`] === item.query
							: !item.query,
					})}
					key={i}
					onClick={() => handleActive(item.query)}
				>
					{item.title}
				</div>
			))}
		</div>
	);
}

export default TabNavLink;
