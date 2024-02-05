import {TYPE_DATE} from './enum';
import {ProfileCircle, ShieldSecurity} from 'iconsax-react';

export const MAXIMUM_FILE = 10; //MB

export const allowFiles = [
	'application/pdf',
	'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
	'image/jpeg',
	'image/jpg',
	'image/png',
];

export enum PATH {
	Any = 'any',
	Home = '/',
	ManagerCall = '/manager-call',
	CallIn = '/manager-call/call-in',
	CallOut = '/manager-call/call-out',
	Statistical = '/statistical',
	Settings = '/settings',
	Login = '/auth/login',
}

export const ListPage: {
	name: string;
	path: string;
	pathActive?: string;
	code?: string;
	child?: {
		name: string;
		path: string;
		pathActive?: string;
		code?: string;
	}[];
}[] = [
	{
		name: 'Trang chủ',
		path: PATH.Home,
		pathActive: PATH.Home
	},
	// {
	// 	name: 'Quản lý cuộc gọi',
	// 	path: PATH.CallOut,
	// 	pathActive: PATH.ManagerCall,
	// 	child: [
	// 		{
	// 			name: 'Cuộc gọi ra',
	// 			path: PATH.CallOut,
	// 		},
	// 		{
	// 			name: 'Cuộc gọi vào',
	// 			path: PATH.CallIn,
	// 		},
	// 	],
	// },
	// {
	// 	name: 'Thống kê',
	// 	path: PATH.Statistical,
	// },
	// {
	// 	name: 'Cài đặt',
	// 	path: PATH.Settings,
	// },
];

export const ListOptionTimePicker: {
	name: string;
	value: number;
}[] = [
	{
		name: 'Hôm nay',
		value: TYPE_DATE.TODAY,
	},
	{
		name: 'Tuần này',
		value: TYPE_DATE.THIS_WEEK,
	},
	{
		name: 'Tuần trước',
		value: TYPE_DATE.LAST_WEEK,
	},
	{
		name: 'Tháng này',
		value: TYPE_DATE.THIS_MONTH,
	},
	{
		name: 'Tháng trước',
		value: TYPE_DATE.LAST_MONTH,
	},
	{
		name: 'Năm này',
		value: TYPE_DATE.THIS_YEAR,
	},
	{
		name: 'Lựa chọn',
		value: TYPE_DATE.LUA_CHON,
	},
];

export const listMenuProfile: Array<any> = [
	{
		title: 'Tài khoản của tôi',
		icon: ProfileCircle,
		href: '/profile',
	},
	{
		title: 'Đổi mật khẩu',
		icon: ShieldSecurity,
		href: '/profile/change-pass',
	},
];

export const listLimit = [10, 20, 50, 100];

export const MAXIMUM_AVATAR = 10; // MB

export const KEY_STORE = 'MEAPP-SWITCHBOARD';

export const LIST_HOUR: string[] = [
	'00:00',
	'00:30',
	'01:00',
	'01:30',
	'02:00',
	'02:30',
	'03:00',
	'03:30',
	'04:00',
	'04:30',
	'05:00',
	'05:30',
	'06:00',
	'06:30',
	'07:00',
	'07:30',
	'08:00',
	'08:30',
	'08:00',
	'08:30',
	'08:00',
	'08:30',
	'09:00',
	'09:30',
	'10:00',
	'10:30',
	'11:00',
	'11:30',
	'12:00',
	'12:30',
	'13:00',
	'13:30',
	'14:00',
	'14:30',
	'15:00',
	'15:30',
	'16:00',
	'16:30',
	'17:00',
	'17:30',
	'18:00',
	'18:30',
	'19:00',
	'19:30',
	'20:00',
	'20:30',
	'21:00',
	'21:30',
	'22:00',
	'22:30',
	'23:00',
	'23:30',
];
