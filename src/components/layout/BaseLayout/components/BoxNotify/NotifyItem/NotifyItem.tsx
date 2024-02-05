import ImageFill from '~/components/common/ImageFill';
import {PropsNotifyItem} from './interfaces';
import styles from './NotifyItem.module.scss';
import icons from '~/constants/images/icons';
import Moment from 'react-moment';
import clsx from 'clsx';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {useRouter} from 'next/router';
import {formatTimeUTC} from '~/common/func/convertDate';

function NotifyItem({data, onClose}: PropsNotifyItem) {
	const router = useRouter();
	const queryClient = useQueryClient();

	const readOneNoti = useMutation({
		// mutationFn: (body: {uuid: string}) =>
		// 	httpRequest({
		// 		http: notificationsServices.readOneNoti({
		// 			uuid: body.uuid,
		// 		}),
		// 	}),
		// onSuccess(data) {
		// 	if (data) {
		// 		queryClient.invalidateQueries([QUERY_KEY.Notifications]);
		// 		queryClient.invalidateQueries([QUERY_KEY.NotificationsCountUnRead]);
		// 	}
		// },
	});

	const handleReadNoti = ({uuid, typeNoti, dataObj}: {uuid: string; typeNoti: number; dataObj: any}) => {
		// readOneNoti.mutate({uuid: uuid});
		onClose();

		const t0 = JSON.parse(dataObj);

		if (!typeNoti) {
			return null;
		}
	};

	return (
		<div
			className={clsx(styles.container, {[styles.isRead]: data?.isRead})}
			onClick={() => handleReadNoti({uuid: data.uuid, typeNoti: data?.type, dataObj: data?.dataObj})}
		>
			<div className={styles.box_image}>
				<div>
					<ImageFill src={icons.icon_noti} alt='image notify' className={styles.image_noti} />
				</div>
			</div>
			<div className={styles.content}>
				<p className={styles.text_content}>{data?.content}</p>
				<p className={styles.time}>
					<Moment fromNow date={formatTimeUTC(data?.createdAt)} locale='vi' />
				</p>
			</div>
		</div>
	);
}

export default NotifyItem;
