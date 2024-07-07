import React from 'react'

const ErrorMessage = ({ label = '', }) => {
  return (
    <p className='text-red-600 text-sm pt-2'>{label}</p>
  )
}

export default ErrorMessage