import { useState } from 'react'
import clsx from 'clsx'
import headerImage from './assets/header_illustration_1.svg'
import classes from './App.module.css'

import PrimaryButton from './components/primary-button'
import PrimaryOutlinedButton from './components/primary-outlined-button'
import TopNav from './components/top_nav/TopNav'
import profileNav from './components/profile-nav'
import pochka from './assets/pochka.svg'
import ProfileNav from './components/profile-nav'
import HeaderText from './components/header-text'
import OurServices from './components/our-services/OurServices'
import Card from './components/card'
import PromoComponentOne from './components/promo-component-one'
import PromoComponentTwo from './components/promo-component-two'

import dots from './assets/dots.svg'
import img1 from './assets/img1.svg'
import img2 from './assets/img2.svg'
import img3 from './assets/img3.svg'
import img4 from './assets/img4.svg'
import img5 from './assets/img5.svg'
import img6 from './assets/img6.svg'
import img7 from './assets/illustration_2.svg'
import img8 from './assets/illustration_3.svg'

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

        <img className={classes.dotsRight} src={dots}/>
      </header>

      <OurServices>
        <Card title='Search doctor' subtitle="Choose your doctor from thousands of specialist, general, and trusted hospitals" logo={img1}/>

        <Card title='Online pharmacy' subtitle="Buy  your medicines with our mobile application with a simple delivery system" logo={img2}/>

        <Card title='Consultation' subtitle="Free consultation with our trusted doctors and get the best recomendations" logo={img3}/>

        <Card title='Details info' subtitle="Free consultation with our trusted doctors and get the best recomendations" logo={img4}/>

        <Card title='Emergency care' subtitle="You can get 24/7 urgent care for yourself or your children and your lovely family" logo={img5}/>

        <Card title='Tracking' subtitle="Track and save your medical history and health data " logo={img6}/>

        <div className={classes.pochka}>
          <img src={pochka}/>
        </div>
      </OurServices>

      <PrimaryOutlinedButton text='learn more'/>

      <PromoComponentOne arr={['Leading healthcare providers', 'We provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver', 'learn more']} img={img7}/>
      <PromoComponentTwo arr={['Download our mobile apps', 'Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely', 'Download  🠗']} img={img8}/>
    </>
  )
}

export default App
