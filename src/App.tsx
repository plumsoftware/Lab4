import classes from './App.module.css'
import PrimaryOutlinedButton from './components/primary-outlined-button'
import pochka from './assets/pochka.svg'
import OurServices from './components/our-services/OurServices'
import PromoComponentOne from './components/promo-component-one'
import PromoComponentTwo from './components/promo-component-two'
import Slider from './components/slider'

import _dots from './assets/dots.svg'
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
import Header from './components/header'
import _headerImage from './assets/header_illustration_1.svg'

function App() {

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
    }
  ];

  return (
    <>
      <Header dots={_dots} headerImage={_headerImage}/>

      <OurServices images={[img1, img2, img3, img4, img5, img6]}>
        <div className={classes.pochka}>
          <img src={pochka}/>
        </div>
      </OurServices>

      <PrimaryOutlinedButton text='learn more'/>

      <PromoComponentOne arr={['Leading healthcare providers', 'We provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver', 'learn more']} img={img7}/>
      <PromoComponentTwo arr={['Download our mobile apps', 'Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely', 'Download  🠗']} img={img8}/>

      <Slider arr={customers} cardChildren={<img className={classes.dotsRight2} src={_dots}/>}>
        <img className={classes.dotsLeft} src={_dots}/>
      </Slider>

      <More arr={promoes} dots={_dots}/>

      <Footer/>
    </>
  )
}

export default App
