import clsx from 'clsx';
import styles from './BoxNotify.module.scss';
import {Fragment, useContext, useEffect, useState} from 'react';
import NotifyItem from './NotifyItem';
import {PropsBoxNotify} from './interfaces';
import {useInfiniteQuery, useMutation, useQueryClient} from '@tanstack/react-query';
import {QUERY_KEY} from '~/constants/config/enum';
import WrapperLoadMore from '~/components/common/WrapperLoadMore';
import {httpRequest} from '~/services';
import Noti from '~/components/common/DataWrapper/components/Noti';
import {HubConnection} from '@microsoft/signalr';
import {SocketContext} from '~/contexts/SocketProvider';

function BoxNotify({onClose}: PropsBoxNotify) {
	const queryClient = useQueryClient();
	const contextChat = useContext<HubConnection | null>(SocketContext);

	const [tab, setTab] = useState<string>('all');

	const {data, fetchNextPage, hasNextPage, isFetchingNextPage, refetch} = useInfiniteQuery(
		[QUERY_KEY.Notifications, tab],
		async ({pageParam = 1}) => {
			const notis: any = {};
			// const notis: any = await notificationsServices.getNotis({
			// 	limit: 10,
			// 	page: pageParam,
			// 	isUnRead: tab == 'noRead' ? true : false,
			// });

			return {
				items: notis?.data?.items || [],
				total: notis?.data?.pagination.totalCount || 0,
			};
		},
		{
			getNextPageParam: (lastPage: any, pages) => {
				if (pages.length < Math.ceil(lastPage.total / 20)) {
					return pages.length + 1;
				}
				return undefined;
			},
		}
	);

	useEffect(() => {
		contextChat?.on('Notification', () => {
			queryClient.invalidateQueries([QUERY_KEY.Notifications]);
			queryClient.invalidateQueries([QUERY_KEY.NotificationsCountUnRead]);
		});

		return () => {
			contextChat?.off('Notification');
		};
	}, [contextChat, refetch]);

	const readAllNoti = useMutation({
		// mutationFn: () =>
		// 	httpRequest({
		// 		http: notificationsServices.readAllNoti({}),
		// 	}),
		// onSuccess(data) {
		// 	if (data) {
		// 		queryClient.invalidateQueries([QUERY_KEY.Notifications]);
		// 		queryClient.invalidateQueries([QUERY_KEY.NotificationsCountUnRead]);
		// 	}
		// },
	});

	return (
		<div className={styles.container}>
			<h4 className={styles.title}>Thông báo</h4>
			<div className={styles.tabNoti}>
				<div className={styles.d_flex_tab}>
					<div className={clsx(styles.buttonNoti, {[styles.active]: tab == 'all'})} onClick={() => setTab('all')}>
						Tất cả
					</div>
					<div className={clsx(styles.buttonNoti, {[styles.active]: tab == 'noRead'})} onClick={() => setTab('noRead')}>
						Chưa đọc
					</div>
				</div>
				<p className={styles.textRead} onClick={() => readAllNoti.mutate()}>
					Xem tất cả
				</p>
			</div>

			{data?.pages[0]?.items?.length == 0 ? (
				<div className={styles.empty}>
					<Noti disableButton small title='Thông báo' des='Bạn chưa có thông báo nào!' />
				</div>
			) : (
				<WrapperLoadMore fetchNextPage={fetchNextPage} isFetchingNextPage={isFetchingNextPage} hasNextPage={hasNextPage} className={styles.main}>
					{data?.pages.map((group: any, i: any) => (
						<Fragment key={i}>
							{group.items.map((v: any) => (
								<NotifyItem key={v?.uuid} onClose={onClose} data={v} />
							))}
						</Fragment>
					))}
				</WrapperLoadMore>
			)}
		</div>
	);
}

export default BoxNotify;
