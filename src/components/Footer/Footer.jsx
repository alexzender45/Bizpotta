import React from 'react'
import "./Footer.css"
import * as svg from '../../svg'
function Footer() {
   return (
      <footer className="Footer">
         <article>
            <h5 className="FooterLogo">BIZPOTTA</h5>
            <ul className="FooterDetail">
               <li>Copyright © 2021 Bizpotta.</li>
               <li>All rights reserved</li>
            </ul>
            <ul className="Socials">
               <li><a href="/">{svg.instagram}</a></li>
               <li><a href="/">{svg.circle}</a></li>
               <li><a href="/">{svg.twitter}</a></li>
               <li><a href="/">{svg.youtube}</a></li>
            </ul>
         </article>
         <article>
            <h5>Company</h5>
            <ul className="Mydetail">
               <li><a href="/">About us</a></li>
               <li><a href="/">Hub</a></li>
               <li><a href="/">Learning</a></li>
               <li><a href="/">Funds</a></li>
               <li><a href="/">Community</a></li>
            </ul>
         </article>
         <article>
            <h5>Support</h5>
            <ul className="Mydetail">
               <li><a href="/">Help center</a></li>
               <li><a href="/">Terms of service</a></li>
               <li><a href="/">Legal</a></li>
               <li><a href="/">Privacy policy</a></li>
               <li><a href="/">Status</a></li>
            </ul>
         </article>
         <article className="Inputs">
            <h5>Stay up to date</h5>
            <div className="Input">
               <input type="text" placeholder="Your email address" />
            </div>
         </article> 
         
      </footer>
   )
}

export default Footer
