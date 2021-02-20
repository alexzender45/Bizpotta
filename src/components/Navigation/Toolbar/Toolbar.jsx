import React from 'react'
import './Toolbar.css'
import NavigationItems from "../NavigationItems/NavigationItems"
const Toolbar=()=>{
   return(
      <div className="Toolbar">
         <h2 className='Logo'>BIZPOTTA</h2>
         <div className="Nav"><NavigationItems /></div>
         <div className="signup">
            <div className="sign">
               <a href="#">Sign In</a>
            </div>
            <div className="sign">
               <a href="#">Sign Up</a>
            </div>
            
         </div>
      </div>
   )
}
export default Toolbar