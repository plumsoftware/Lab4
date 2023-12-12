import classes from './NavText.module.css' 
import React from 'react'

interface NavTextProps {
    _enabled: boolean;
    text: string;
}

const NavText: React.FC<NavTextProps> = ({ _enabled, text }) => {  
    const primaryTopNavColor = '#1F1534';
    const primaryUnavailableTopNavColor = 'rgba(31, 21, 52, 0.5)';
  
    const textStyle = {
        color: _enabled ? primaryTopNavColor : primaryUnavailableTopNavColor,
        enabled: _enabled.toString(),
    };
  
    return (
        <h3 style={textStyle} className={classes.h3}>{text}</h3>
    );
};

export default NavText;