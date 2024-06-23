import React, { useState } from 'react'
import { Header } from '../header'

export const getNoneLayout = (page: React.ReactElement) => page

export const getDefaultLayout = (page: React.ReactElement) => {
  const [theme, setTheme] = useState(true)
  return (
    <div className={theme ? '' : 'dark'}>
      <Header setTheme={setTheme} theme={theme}/>
      {page}
    </div>
  )
}
