export const formatTitleCase = (text: string): string | undefined => {
	const splitStr = text.toLowerCase().split(" ");
	if (splitStr && splitStr.length > 0) {
		splitStr.forEach((e, i) => {
			splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
		});

		return splitStr.join(" ");
	}
};
