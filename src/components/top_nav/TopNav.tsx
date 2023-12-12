import classes from './TopNav.module.css' 
import React from 'react' 
import NavText from '../nav-text'
 
interface TopNavProps {
    arr: string[];
}

const TopNav: React.FC<TopNavProps> = ({arr}) => { 
    return ( 
        <div className={classes.TopNav}> 
            <NavText _enabled={true} text='Home'></NavText>
            <NavText _enabled={false} text='Find a doctor'></NavText>
            <NavText _enabled={false} text='Apps'></NavText>
            <NavText _enabled={false} text='Testimonials'></NavText>
            <NavText _enabled={false} text='About us'></NavText>
        </div> 
    ); 
}; 
 
export default TopNav;