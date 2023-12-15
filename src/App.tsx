import { useState } from 'react'
import clsx from 'clsx'
import headerImage from './assets/header_illustration_1.svg'
import classes from './App.module.css'
import PrimaryButton from './components/primary-button'
import TopNav from './components/top_nav/TopNav'
import profileNav from './components/profile-nav'
import pochka from './assets/pochka.svg'
import ProfileNav from './components/profile-nav'
import img1 from './assets/img1.svg'
import HeaderText from './components/header-text'
import OurServices from './components/our-services/OurServices'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className={classes.header}>

        <div className={classes.headerRow}>
          <ProfileNav name='T'></ProfileNav>
          <TopNav arr={['Home', 'Find a doctor', 'Apps', 'Testimonials', 'About us']}></TopNav>
        </div>

        <div className={classes.headerRow}>
          <HeaderText arr={[
            'Virtual healthcare for you', 
            'Our service provides progressive, and affordable healthcare, accessible on mobile and online for everyone', 
            'Consult today']}/>
            <div className={classes.imgBox}>
              <img src={headerImage} alt='картинка 1'/>
            </div>
        </div>
      </header>

      <OurServices>
        <Card title='Search doctor' subtitle="Choose your doctor from thousands of specialist, general, and trusted hospitals" logo={img1}/>

        <Card title='Search doctor' subtitle="Choose your doctor from thousands of specialist, general, and trusted hospitals" logo={img1}/>

        <Card title='Search doctor' subtitle="Choose your doctor from thousands of specialist, general, and trusted hospitals" logo={img1}/>

        <Card title='Search doctor' subtitle="Choose your doctor from thousands of specialist, general, and trusted hospitals" logo={img1}/>

        <Card title='Search doctor' subtitle="Choose your doctor from thousands of specialist, general, and trusted hospitals" logo={img1}/>

        <Card title='Search doctor' subtitle="Choose your doctor from thousands of specialist, general, and trusted hospitals" logo={img1}/>

        <div className={classes.pochka}>
          <img src={pochka}/>
        </div>
      </OurServices>
    </>
  )
}

export default App
