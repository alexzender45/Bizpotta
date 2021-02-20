import './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'
const NavigationItems = () => {
   return(
      <ul className="NavigationItems">
         <NavigationItem link="/about">About</NavigationItem>
         <NavigationItem link="/hub">Hub</NavigationItem>
         <NavigationItem link="/learning">Learning</NavigationItem>
         <NavigationItem link="/funds">Funds</NavigationItem>
         <NavigationItem link="/community">Community</NavigationItem>
         <NavigationItem link="/contact-us">Contact us</NavigationItem>
      </ul>
   )
}
export default NavigationItems