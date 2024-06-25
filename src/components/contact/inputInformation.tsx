import React from 'react'
import { Button } from '../ui/button'

const InputInformation = ({setPage}) => {
  return (
    <div className='flex flex-col'>
        inputInformation
        <div>
            <Button onClick={()=> setPage(2)} className='hover:bg-Blue bg-blue-700 mr-10'>Previous </Button>
            <Button className='bg-green-700 hover:bg-Teal '>Submit</Button>
        </div>
    </div>
  )
}

export default InputInformation