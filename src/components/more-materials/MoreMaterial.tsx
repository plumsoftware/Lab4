import classes from './MoreMaterial.module.css' 
import React from 'react' 
import Divider from '../divider';
import { useState } from 'react'
import PrimaryOutlinedButton from '../primary-outlined-button';
 
interface PromoItem {
    title: string;
    subtitle: string;
    img: string;
}

interface MoreProps {
    arr: PromoItem[];
    dots: string;
}

const More: React.FC<MoreProps> = ( {arr, dots} ) => { 
    const [expanded, setExpanded] = useState(false)

    const toggleExpanded = () => {
        setExpanded(!expanded);
    }

    return ( 
        
        <div className={classes.column}>
            <h1 className={classes.title_text}>Check out our latest article</h1>
            <Divider/>

            <div className={classes.row}>
                <img className={classes.dotsLeft} src={dots} />
                {arr.slice(0, expanded ? arr.length : 3).map((item, index) => (
                <div key={index} className={classes.cardMaterial}>
                    <img className={classes.promo} src={arr[index].img} />
                    <h1 className={classes.h1}>{arr[index].title}</h1>
                    <h2 className={classes.h2}>{arr[index].subtitle}</h2>
                    <button className={classes.moreButton}>Read more ➜</button>
                </div>
                ))}
            </div>

            <PrimaryOutlinedButton text={expanded ? 'Collapse' : 'Learn More'} onClick={toggleExpanded} ></PrimaryOutlinedButton>
        </div>
    ); 
}; 
 
export default More;