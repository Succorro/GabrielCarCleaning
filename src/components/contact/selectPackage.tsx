import React from 'react'
import { Button } from '../ui/button'

const SelectPackage = ({setPage}) => {
  return (
    <div className='flex flex-col'>
        SelectPackage
        <div className="flex ">
            <Button onClick={()=> setPage(1)} className='bg-blue-700 hover:bg-Blue mr-10'>Previous </Button>
            <Button onClick={()=> setPage(3)} className='bg-blue-700 hover:bg-Blue'>Next </Button>
        </div>    
    </div>
  )
}

export default SelectPackage