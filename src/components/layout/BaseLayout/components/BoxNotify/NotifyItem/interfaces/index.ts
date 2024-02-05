export interface PropsNotifyItem {
	data: {
		uuid: string;
		content: string;
		type: number;
		isRead: boolean;
		dataObj: string;
		createdAt: Date | string | null;
	};
	onClose: () => void;
}
