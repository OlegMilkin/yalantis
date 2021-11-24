const getFullMonthName = (data) => {
  return new Date(data).toLocaleString('default', { month: 'long' }).toLowerCase()
}
export default getFullMonthName
