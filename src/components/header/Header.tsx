import HeaderText from '../header-text';
import ProfileNav from '../profile-nav';
import TopNav from '../top_nav/TopNav';
import classes from './Header.module.css' 
import React from 'react' 

interface HeaderProps {
    dots: string,
    headerImage: string,
}

const Header: React.FC<HeaderProps> = ({dots, headerImage}) => { 
    return ( 
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
    ); 
}; 
 
export default Header;