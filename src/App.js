import './App.css';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Offices from './components/Offices';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <Slider/>
      <Offices title="PLANS"/>
      <Footer intro="VISIT US IN"/>
    </div>
  );
}

export default App;
