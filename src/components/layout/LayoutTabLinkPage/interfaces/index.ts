export interface PropsLayoutTabLinkPage {
	children: React.ReactNode;
	listUrl: {
		name: string;
		path: string;
		pathActive?: string;
		code?: string;
	}[];
}
