export default function datetimeDifferenceInSeconds(date1: Date, date2: Date): number {
    // Convert dates to timestamps (milliseconds since January 1, 1970)
    const timestamp1 = date1.getTime();
    const timestamp2 = date2.getTime();

    // Calculate the difference in milliseconds
    const diffInMilliseconds = Math.abs(timestamp2 - timestamp1);

    // Convert milliseconds to seconds
    const diffInSeconds = diffInMilliseconds / 1000;

    return diffInSeconds;
}