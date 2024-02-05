export const getEnvConfig = async () => {
	const response = await fetch('/static/env-config.json');
	const config = await response.json();
	return config;
};
