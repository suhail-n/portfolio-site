import type { NextPage } from 'next'
import About from '../components/About/About'
import Contact from '../components/Contact/Contact'
import Experience from '../components/Experience/Experience'
import Hero from '../components/Hero/Hero'

const Home: NextPage = () => {
  return <>
    <Hero />
    <About />
    <Experience />
    <Contact />
  </>
}

export default Home
