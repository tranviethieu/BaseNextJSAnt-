export interface PropsDialog {
	open: boolean;
	title: string;
	note?: string | React.ReactNode;
	Icon?: any;
	onClose: () => any;
	[props: string]: any;
}
