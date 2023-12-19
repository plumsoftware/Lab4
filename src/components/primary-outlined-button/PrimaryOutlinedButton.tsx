import classes from './PrimaryOutlinedButton.module.css' 
import React from 'react' 
 
interface PrimaryOutlinedButtonProps {
    text: string;
}

const PrimaryOutlinedButton: React.FC<PrimaryOutlinedButtonProps> = ({text}) => { 
    return ( 
        <button className={classes.primaryOutlinedButton}> 
            {text}
        </button> 
    ); 
}; 
 
export default PrimaryOutlinedButton;