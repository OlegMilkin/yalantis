import getFullMonthName from './getFullMonthName'

const modifyEmployeesData = (data) => (
  data.map((item) => ({
    ...item,
    dob: getFullMonthName(item.dob),
    isActive: false,
  }))
)

export default modifyEmployeesData