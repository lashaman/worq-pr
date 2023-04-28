const addThreeDots = (text: string, maxLength: number) => (
	text.length > (maxLength - 3) ?
		text.substring(0, (maxLength - 3)) + '...' :
		text
);

export default addThreeDots;
