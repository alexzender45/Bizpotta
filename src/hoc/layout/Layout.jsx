import React, {Component} from 'react'
import './Layout.css'
import Auxillary from '../Auxillary/Auxillary'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
class Layout extends Component{
   render(){
      const { children } = this.props
      return(
         <Auxillary>
            <Toolbar/>
            <main>{children}</main>
         </Auxillary>
      )
   }
}
export default Layout