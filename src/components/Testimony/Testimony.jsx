import React from 'react'
import * as svg from '../../svg'
import './Testimony.css'
const testimony = ()=>{
   return(
      <div className="Testimony">
         <div className="Title">
            <h3>What they say about us!</h3>
            <p>We have built thousands of businesses for different clients and this are some of the reviews we got.</p>
         </div>
         <div className="Vids">
            <div className="vid">
               {svg.video}
            </div>
            <article>
               <div className="Quote">
                  {svg.quote}
               </div>
               <p className="text">Est tation latine aliquip id, mea ad tale illud definitiones. Periculis omittantur necessitatibus eum ad, pro eripuit minimum comprehensam ne, usu cu stet prompta reformidans.</p>
               <p className="subtitle">Connie Robertson at Google</p>
            </article>
         </div>
         <div className="Tes">
            {svg.community1}
         </div>
      </div>
   )
}
export default testimony