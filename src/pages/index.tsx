
import Head from 'next/head';
import {ReactElement} from 'react';

import BaseLayout from '~/components/layout/BaseLayout';
import Home from '~/components/pages/Home';

export default function Page() {
	return (
		<>
			<Head>
				<title>Danh sách khách hàng</title>
			</Head>
			<Home></Home>
		</>
	);
}

Page.getLayout = function (Page: ReactElement) {
	return <BaseLayout>{Page}</BaseLayout>;
};
