import React from 'react'
import './Courses.css'
import * as svg from '../../svg'
const courses = ()=>{
   return(
      <div className="Courses">
         <div className="title">
            <h3>Free courses for you!</h3>
            <p>Et has minim elitr intellegat. Mea aeterno eleifend antiopa quaerendum.</p>
         </div>
         <div className="Course-div">
            <article>
                  {svg.course}
                  <h6>Ad eos saepe lucilius</h6>
                  <p>At eripuit signiferumque sea, vel ad mucius molestie, cu labitur.</p>
            </article>
            <article>
                  {svg.course}
                  <h6>Ad eos saepe lucilius</h6>
                  <p>At eripuit signiferumque sea, vel ad mucius molestie, cu labitur.</p>
            </article>
            <article>
                  {svg.course}
                  <h6>Ad eos saepe lucilius</h6>
                  <p>At eripuit signiferumque sea, vel ad mucius molestie, cu labitur.</p>
            </article>
            <article>
                  {svg.course}
                  <h6>Ad eos saepe lucilius</h6>
                  <p>At eripuit signiferumque sea, vel ad mucius molestie, cu labitur.</p>
            </article>
         </div>
      </div>
   )
}
export default courses