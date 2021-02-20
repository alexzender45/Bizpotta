import React from 'react'
import './Videos.css'
import * as svgs from '../../svg'
const videos =()=>{
   return(
      <div className="Videos">
         <article>
            <div className="Video">
               {svgs.video}
            </div>
            <div className="Details">
               <div className="Detail">
                  <p>ABOUT US</p>
                  <h2>We scratch, build and play together</h2>
                  <p>Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum.</p>
               </div>
               <button>Read more</button>
            </div>
         </article>
         <article>
            <div className="Details">
               <div className="Detail">
                  <p>HUB</p>
                  <h2>We scratch, build and play together</h2>
                  <p>Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum.</p>
               </div>
               <button>Read more</button>
            </div>
            <div className="Video">
               {svgs.video}
            </div>
         </article>
         <article>
            <div className="Video">
               {svgs.video}
            </div>
            <div className="Details">
               <div className="Detail">
                  <p>LEARNING</p>
                  <h2>We scratch, build and play together</h2>
                  <p>Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum.</p>
               </div>
               <button>Read more</button>
            </div>
         </article>
      </div>
   )
}
export default videos