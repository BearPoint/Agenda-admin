import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)
export function getYearsAll(date_brith: string) {
  return dayjs().diff(date_brith, 'years')
}