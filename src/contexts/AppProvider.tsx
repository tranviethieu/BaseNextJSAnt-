import {Hydrate, QueryClient, QueryClientProvider} from '@tanstack/react-query';

import LoadingTopBar from '~/components/common/LoadingTopBar';
import {Provider} from 'react-redux';
import SplashScreen from '~/components/layout/SplashScreen';
import {ToastContainer} from 'react-toastify';
import {store} from '~/redux/store';
import SocketProvider from './SocketProvider';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
});

function AppProvider({children, pageProps}: {children: React.ReactNode; pageProps: any}) {
	return (
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<Hydrate state={pageProps.dehydratedState}>
					<LoadingTopBar />
					<SplashScreen />
					<ToastContainer autoClose={3000} />
					<SocketProvider>{children}</SocketProvider>
				</Hydrate>
			</QueryClientProvider>
		</Provider>
	);
}

export default AppProvider;
