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
import Slider from './components/slider'

import dots from './assets/dots.svg'
import img1 from './assets/img1.svg'
import img2 from './assets/img2.svg'
import img3 from './assets/img3.svg'
import img4 from './assets/img4.svg'
import img5 from './assets/img5.svg'
import img6 from './assets/img6.svg'
import img7 from './assets/illustration_2.svg'
import img8 from './assets/illustration_3.svg'
import edward from './assets/edward.png'
import Footer from './components/footer'
import More from './components/more-materials/MoreMaterial'
import promo1 from './assets/promo1.png'
import promo2 from './assets/promo2.png'
import promo3 from './assets/promo3.png'

function App() {
  const [count, setCount] = useState(0)

  const customers = [
    {
      name: 'Edward Newgate',
      job: 'Founder Circle',
      review: 'Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely',
      img: edward
    },
    {
      name: 'Jane Smith',
      job: 'Graphic Designer',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      img: edward
    },
    {
      name: 'Jane Smith',
      job: 'Graphic Designer',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      img: edward
    },
  ];

  const promoes = [
    {
      title: 'Disease detection, check up in the laboratory',
      subtitle: 'In this case, the role of the health laboratory is very important to do a disease detection...',
      img: promo1
    },
    {
      title: 'EHerbal medicines that are safe for consumption',
      subtitle: 'Herbal medicine is very widely used at this time because of its very good for your health...',
      img: promo2
    },
    {
      title: 'Natural care for healthy facial skin',
      subtitle: 'A healthy lifestyle should start from now and also for your skin health. There are some...',
      img: promo3
    },
  ];

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

      <Slider arr={customers} cardChildren={<img className={classes.dotsRight2} src={dots}/>}>
        <img className={classes.dotsLeft} src={dots}/>
      </Slider>

      <More arr={promoes}/>

      <PrimaryOutlinedButton text="learn more"></PrimaryOutlinedButton>

      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default App
