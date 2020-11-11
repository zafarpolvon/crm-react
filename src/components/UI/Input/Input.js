import React from 'react'
import classes from './Input.css'

function isInvalid({valid, touched, shouldValidate}) {
  return !valid && shouldValidate && touched
}

const Input = props => {
  const inputType = props.type || 'text'
  const cls = [classes.Input]
  const htmlFor = `${inputType}-${Math.random()}`

  if (isInvalid(props)) {
    cls.push(classes.invalid)
  }

  return (
    <div className={cls.join(' ')}>
      <label className="font-semibold text-xl text-gray-800" htmlFor={htmlFor}>{props.label}</label>
      <input
        className="shadow appearance-none border border-red rounded w-full py-2 mt-4 px-3 text-gray-800 font-semibold mb-3"
        type={inputType}
        id={htmlFor}
        value={props.value}
        onChange={props.onChange}
      />

      {
        isInvalid(props)
          ? <span className="text-red-600">{props.errorMessage || 'Введите верное значение'}</span>
          : null
      }
    </div>
  )
}

export default Input