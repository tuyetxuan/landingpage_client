export const webSettingsService = (jsonString) => {
	try {
		const obj = JSON.parse(jsonString);
		return obj;
	} catch (error) {
		return null;
	}
}
