import Employee from './Employee'

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
    <div className='employees__list'>
      <h2 style={{ width: '100%' }}>Employees</h2>
      {alphabet.map((alphabetLetter) => (
        <Employee alphabetLetter={alphabetLetter} key={alphabetLetter} />
      ))}
    </div>
  )
}

export default EmployeesList
