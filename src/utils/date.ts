const dayToString = (date: number): string =>
  date < 10 ? `0${date}` : `${date}`
const hoursToString = (hours: number): string =>
  hours < 10 ? `0${hours}` : `${hours}`
const minutesToString = (minutes: number): string =>
  minutes < 10 ? `0${minutes}` : `${minutes}`

const monthToString = (month: number): string => {
  switch (month) {
    case 0:
      return 'Янв'
    case 1:
      return 'Фев'
    case 2:
      return 'Мар'
    case 3:
      return 'Апр'
    case 4:
      return 'Мая'
    case 5:
      return 'Июн'
    case 6:
      return 'Июл'
    case 7:
      return 'Авг'
    case 8:
      return 'Сен'
    case 9:
      return 'Окт'
    case 10:
      return 'Ноя'
    case 11:
      return 'Дек'
    default:
      return 'Янв'
  }
}
const yearToString = (year: number): string => `${year}`

export const formatDate = (date: Date) => {
  const day = dayToString(date.getDate() || 0)
  const month = monthToString(date.getMonth() || 0)
  const year = yearToString(date.getFullYear() || 0)

  const hours = hoursToString(date.getHours() || 0)
  const minutes = minutesToString(date.getMinutes() || 0)

  return `${day} ${month} ${year} ${hours}:${minutes}`
}
