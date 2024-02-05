import Head from 'next/head';
import {ReactElement} from 'react';

import BaseLayout from '~/components/layout/BaseLayout';
import LayoutTabLinkPage from '~/components/layout/LayoutTabLinkPage';
import {ListPage} from '~/constants/config';

export default function Page() {
	return (
		<>
			<Head>
				<title>Quản lý cuộc gọi vào</title>
			</Head>
			<LayoutTabLinkPage listUrl={ListPage[1].child!}>
				<div>PAGE CALL IN lo</div>
			</LayoutTabLinkPage>
		</>
	);
}

Page.getLayout = function (Page: ReactElement) {
	return <BaseLayout isChild={true}>{Page}</BaseLayout>;
};
