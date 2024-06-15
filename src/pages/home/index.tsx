import { Helmet } from 'react-helmet'
import { Hero } from 'src/components/hero'
import  Services  from 'src/components/services'
import Stats from 'src/components/stats'
import ContactForm from 'src/components/contactForm'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Gabriel Car Cleaning</title>
      </Helmet>
      <Hero/>
      <Services/>
      <Stats/>
      <ContactForm/>
    </>
  )
}
