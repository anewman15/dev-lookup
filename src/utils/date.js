import {
  parseISO, format, formatDistanceToNow,
} from 'date-fns';

export const formattedDate = time => format(new Date(parseISO(time)), 'MMM dd, yyyy, HH:mm');

export const commitTime = time => formatDistanceToNow(new Date(parseISO(time)));
