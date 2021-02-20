import React from 'react'
import './About.css'
import * as svgs from '../../svg'
const about=()=>{
   return(
      <div className='About'>
         <div className="Why">
            <h3>Why choose us?</h3>
            <p> An integrated business soluutions portal for building businesses</p>
         </div>
         <div className="icons">
            <article>
               <div className="icon">
                  {svgs.handShake}
               </div>
                  <h6>
                     Trust
                  </h6>
                  <p>At eripuit signiferumque sea, vel ad mucius molestie, cu labitur iuvaret vulputate sed.</p>
            </article>
            <article>
               <div className="icon">
                  {svgs.lobe}
               </div>
                  <h6>
                     Innovation
                  </h6>
                  <p>At eripuit signiferumque sea, vel ad mucius molestie, cu labitur iuvaret vulputate sed.</p>
            </article>
            <article>
               <div className="icon">
                  {svgs.star}
               </div>
                  <h6>
                     Execellence
                  </h6>
                  <p>At eripuit signiferumque sea, vel ad mucius molestie, cu labitur iuvaret vulputate sed.</p>
               
            </article>
         </div>
      </div>
   )
}
export default about