import classes from './PromoComponentOne.module.css' 
import React from 'react' 
import PrimaryOutlinedButton from '../primary-outlined-button';
import Divider from '../divider'
 
interface PromoComponentOneProps {
    arr: string[];
    img: string;
}

const PromoComponentOne: React.FC<PromoComponentOneProps> = ({arr, img}) => { 
    return ( 
        <div className={classes.row}>
            <div className={classes.imgBox}>
                <img src={img}/>
            </div>
            <div className={classes.column}>
                <h1>{arr[0]}</h1>
                <Divider/>
                <h2>{arr[1]}</h2>
                <PrimaryOutlinedButton text={arr[2]}/>
         </div>
        </div>
    ); 
}; 
 
export default PromoComponentOne;