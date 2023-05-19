import BaseInfo from '../components/homePage/BaseInfo';
import HotOffer from '../components/homePage/HotOffer';
import CarCard from '../components/homePage/carCard';
import Landing from '../components/homePage/landing';
import Footer from '../components/layout/footer';

const Home = ()=>{
  return (
    <>  
      <Landing />
      <HotOffer />
      <CarCard />
      <BaseInfo />
      <Footer />
    </>
  )
}

export default Home;