const getFullMonthName = (data: string): string => {
  return new Date(data).toLocaleString('default', { month: 'long' }).toLowerCase()
}
export default getFullMonthName
