import classes from './PrimaryOutlinedButton.module.css' 
import React from 'react' 
 
interface PrimaryOutlinedButtonProps {
    text: string;
    onClick?: () => void;
}

const PrimaryOutlinedButton: React.FC<PrimaryOutlinedButtonProps> = ({text, onClick }) => { 
    return ( 
        <button className={classes.primaryOutlinedButton} onClick={onClick}> 
            {text}
        </button> 
    ); 
}; 
 
export default PrimaryOutlinedButton;