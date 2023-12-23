import classes from './MoreMaterial.module.css' 
import React from 'react' 
import Divider from '../Divider';
 
interface PromoItem {
    title: string;
    subtitle: string;
    img: string;
}

interface MoreProps {
    arr: PromoItem[]
}

const More: React.FC<MoreProps> = ( {arr} ) => { 
    return ( 
        
        <div className={classes.column}>
            <h1 className={classes.title_text}>Check out our latest article</h1>
            <Divider/>

            <div className={classes.row}>
                {arr.map((item, index) => (
                        <div key={index} className={classes.cardMaterial}>
                            <img className={classes.promo} src={arr[index].img} />
                            <h1 className={classes.h1}>{arr[index].title}</h1>
                            <h2 className={classes.h2}>{arr[index].subtitle}</h2>
                            <button className={classes.moreButton}>Read more ➜</button>
                        </div>
                    ))}
            </div>
        </div>
    ); 
}; 
 
export default More;