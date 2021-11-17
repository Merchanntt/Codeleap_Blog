export function createId() {
  return Math.random() * 100
}

export function createParseDate() {
  const day = new Date().getDay
  const month = new Date().getMonth
  const year = new Date().getFullYear

  const MonthParse = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
  const dateString = `${day} ${MonthParse[month()]}, ${year}`

  return dateString
}

export function timeToRead(lenght: number) {
  const time = (lenght * 3.33) / 60;

  return `${Math.floor(time)} min read`
}
