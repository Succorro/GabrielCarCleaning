import { Helmet } from 'react-helmet'
import { Hero } from 'src/components/hero'
import  Services  from 'src/components/services'
import Stats from 'src/components/stats'
import Contact from 'src/components/contact'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Gabriel Car Cleaning</title>
      </Helmet>
      <Hero/>
      <Stats/>
      <Services/>
      <Contact/>
    </>
  )
}
