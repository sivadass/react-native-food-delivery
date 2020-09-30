import React from 'react';
import {HeaderButton} from 'react-navigation-header-buttons';
import {Ionicons} from '@expo/vector-icons';


const CustomHeaderButton = props =>{
    return (
        <HeaderButton {...props} 
        IconComponent = {Ionicons} 
        iconSize = {23} 
        color = 'white'
        />
    )
}

export default CustomHeaderButton;