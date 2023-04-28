import { fromUnixTime, format } from 'date-fns';

const formatUnixTimestamp = (timestamp: number, dateFormat = 'MMMM d, yyyy') => {
	const date = fromUnixTime(timestamp);
	console.log(date);
	return format(date, dateFormat);
};

export default formatUnixTimestamp;
