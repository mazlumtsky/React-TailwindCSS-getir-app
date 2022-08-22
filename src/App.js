import './index.css';
import Header from './components/Header';
import HeroSelection from './components/HeroSelection';
import Categories from './components/Categories';
import Campaigns from './components/Campaigns';
import Favorites from './components/Favorites';
import MobileApp from './components/MobileApp';
import Card from './components/Card';
import Footer from './components/Footer';





function App() {
  return (
    <>
      <Header/>
      <HeroSelection/>
      <Categories/>
      <Campaigns/>
      <div className='container mx-auto'>
      <Favorites/>
      <MobileApp/>
      <Card/>
      </div>

      <Footer/>
    </>
  );
}

export default App;
