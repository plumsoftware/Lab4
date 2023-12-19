import classes from './OurServices.module.css' 
import React from 'react' 
import Divider from '../Divider'
 
interface OurServicesProps {
    children: React.ReactNode
}

const OurServices: React.FC<OurServicesProps> = ({children}) => { 
    return ( 
       <div className={classes.container}>
        <h1 className={classes.h1}>Our services</h1>
        <Divider/>
        <h2 className={classes.h2}>We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</h2>
        <div className={classes.list}>
            {children}
        </div>
       </div>
    ); 
}; 
 
export default OurServices;