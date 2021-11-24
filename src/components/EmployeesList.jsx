import Employee from './Employee'
import classes from '../index.module.css'

const EmployeesList = () => {
  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ]

  return (
    <div className={classes.employees__list}>
      <h2 className={classes.employees__headline}>Employees</h2>
      {alphabet.map((alphabetLetter) => (
        <Employee alphabetLetter={alphabetLetter} key={alphabetLetter} />
      ))}
    </div>
  )
}

export default EmployeesList
