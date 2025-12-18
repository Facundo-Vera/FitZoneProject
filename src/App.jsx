
import Footer from './components/Footer'
import HeaderApp from './components/HeaderApp'
import ListCard from './components/ListCard'
import ListProfile from './components/ListProfile'
import NavBarApp from './components/NavBarApp'
import StatsApp from './components/StatsApp'
import WhatsappFloat from './components/WhatsappFloat'
import WhyChooseUs from './components/WhyChooseUs'

const App = () => {
  return (
    <div className='bg-dark min-h-screen p-0 m-0"'>
      <NavBarApp/>
      <HeaderApp/>
      <WhyChooseUs/>
      <ListCard/>
      <StatsApp/>
      <ListProfile/>
      <Footer/>
    <WhatsappFloat/>
    </div>
  )
}

export default App