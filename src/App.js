import Layout from './hoc/layout/Layout'
import './App.css';
import Landing from './components/landing/Landing'
import About from './components/About/About'
import Videos from './components/Videos/Videos'
import Courses from './components/Courses/Courses'
import Testimony from './components/Testimony/Testimony'
import Footer from './components/Footer/Footer'
function App() {
  return (
    <div className="App">
    <Layout>
      <Landing/>
      <About/>
      <Videos/>
      <Courses/>
    </Layout>
    <Testimony/>
    <Footer/>
    </div>
  );
}

export default App;
