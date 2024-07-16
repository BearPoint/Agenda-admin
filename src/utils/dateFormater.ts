import dayjs from "dayjs";

export default function dateFormatter(date: string):string {
  return dayjs(date).format('DD/MM/YYYY')
}