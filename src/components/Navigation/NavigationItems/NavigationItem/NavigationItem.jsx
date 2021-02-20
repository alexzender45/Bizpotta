import React from 'react'
import './NavigationItem.css'
const NavigationItem = ({children, link}) => <li className="NavigationItem">
   <a href={link}>{children}</a>
</li>
export default NavigationItem