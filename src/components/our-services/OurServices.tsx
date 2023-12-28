import classes from './OurServices.module.css' 
import React from 'react' 
import Divider from '../divider'
import Card from '../card';
 
interface OurServicesProps {
    children: React.ReactNode;
    images: string[]
}

const OurServices: React.FC<OurServicesProps> = ({children, images}) => { 
    return ( 
       <div className={classes.container}>
        <h1 className={classes.h1}>Our services</h1>
        <Divider/>
        <h2 className={classes.h2}>We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</h2>
        <div className={classes.list}>
            {children}

            <Card title='Search doctor' subtitle="Choose your doctor from thousands of specialist, general, and trusted hospitals" logo={images[0]}/>

            <Card title='Online pharmacy' subtitle="Buy  your medicines with our mobile application with a simple delivery system" logo={images[1]}/>

            <Card title='Consultation' subtitle="Free consultation with our trusted doctors and get the best recomendations" logo={images[2]}/>

            <Card title='Details info' subtitle="Free consultation with our trusted doctors and get the best recomendations" logo={images[3]}/>

            <Card title='Emergency care' subtitle="You can get 24/7 urgent care for yourself or your children and your lovely family" logo={images[4]}/>

            <Card title='Tracking' subtitle="Track and save your medical history and health data " logo={images[5]}/>
        </div>
       </div>
    ); 
}; 
 
export default OurServices;