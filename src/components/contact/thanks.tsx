import React from 'react'
import { Button } from '../ui/button'

interface HeaderProps {
    onClose: () => void;
  }

const ThankYouMessage = ({ onClose }: HeaderProps) => {
  return (
    <div className="flex flex-col items-center justify-center bg-accent p-8">
      <h2 className="text-3xl font-bold text-blue-700 mb-4">Thank You!</h2>
      <p className="text-gray-700 text-center mb-6">
        We appreciate you contacting us. We will be in touch with you soon!
        Have a great day!
      </p>
      <Button 
        onClick={onClose} 
        className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
      >
        Close
      </Button>
    </div>
  )
}

export default ThankYouMessage