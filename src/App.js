import './index.css';
import Header from './components/Header';
import HeroSelection from './components/HeroSelection';
import Categories from './components/Categories';
import Campaigns from './components/Campaigns';
import Favorites from './components/Favorites';
import MobileApp from './components/MobileApp';
import Card from './components/Card';
import Footer from './components/Footer';
import { useWindowWidth } from '@react-hook/window-size/throttled'




function App() {
  const WindowWidth = useWindowWidth()
  return (
    <>
      <Header />
      <HeroSelection />
      <Categories />
      <div className='bg-slate-100 my-1 '>
      {WindowWidth <= 768 && <Campaigns />}
      {WindowWidth >= 768 && <Campaigns />}
        <Favorites />
        <MobileApp />
        <Card />
      </div>
      <Footer />

    </>
  );
}

export default App;
