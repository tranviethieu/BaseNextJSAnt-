'use client';

import {HttpTransportType, HubConnection, HubConnectionBuilder, LogLevel} from '@microsoft/signalr';
import {createContext, useEffect, useState} from 'react';

import {RootState} from '~/redux/store';
import {useSelector} from 'react-redux';

export const SocketContext = createContext<HubConnection | null>(null);

function SocketProvider({children}: {children: React.ReactNode}) {
	const {token} = useSelector((state: RootState) => state.auth);
	const {variableEnv} = useSelector((state: RootState) => state.site);

	const [connection, setConnection] = useState<HubConnection | null>(null);

	useEffect(() => {
		(async () => {
			try {
				if (token) {
					const initConection: HubConnection = new HubConnectionBuilder()
						.withUrl(`${variableEnv?.publicApiSocket!}`, {
							skipNegotiation: true,
							transport: HttpTransportType.WebSockets,
							accessTokenFactory: () => token,
						})
						.configureLogging(LogLevel.Information)
						.withAutomaticReconnect()
						.build();

					initConection.onclose(() => {
						console.log('Websocket: Disconnected');
					});

					await initConection.start();
					setConnection(initConection);
				}
			} catch (e) {
				console.error('Websocket: ' + e);
			}

			return () => {
				console.log('Websocket: Disconnected Return');
			};
		})();
	}, [token, variableEnv?.publicApiSocket]);

	return <SocketContext.Provider value={connection}>{children}</SocketContext.Provider>;
}

export default SocketProvider;
