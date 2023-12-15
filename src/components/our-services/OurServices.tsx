import classes from './OurServices.module.css' 
import React from 'react' 
 
interface OurServicesProps {
    
}

const OurServices: React.FC<OurServicesProps> = ({}) => { 
    return ( 
       <div className={classes.container}>
        <h1>Our services</h1>
        <div className={classes.divider}></div>
        <h2>We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</h2>
       </div>
    ); 
}; 
 
export default OurServices;