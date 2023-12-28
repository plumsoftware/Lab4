import classes from './Card.module.css' 
import React from 'react' 
 
interface CardProps {
    title: string;
    subtitle: string;
    logo: string;
}

const Card: React.FC<CardProps> = ({title, subtitle, logo}) => { 
    return ( 
       <div className={classes.card}>
        <div className={classes.imgBox}>
        <img src={logo} className={classes.img}></img>
        </div>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
       </div>
    ); 
}; 
 
export default Card;