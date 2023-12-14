import { useState } from 'react'
import clsx from 'clsx'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import classes from './App.module.css'
import PrimaryButton from './components/primary-button'
import TopNav from './components/top_nav/TopNav'
import profileNav from './components/profile-nav'
import ProfileNav from './components/profile-nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className={classes.header}>
        <ProfileNav name='T'></ProfileNav>
        <TopNav arr={['Home', 'Find a doctor', 'Apps', 'Testimonials', 'About us']}></TopNav>
      </header>
    </>
  )
}

export default App
