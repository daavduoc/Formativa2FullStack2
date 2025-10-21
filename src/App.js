import logo from './logo.svg';
import './App.css';
import NavbarPropio from './components/NavbarPropio';
import 'bootstrap/dist/css/bootstrap.min.css';
import BannerPropio from './components/BannerPropio';
import Informacion from './components/Informacion';

function App() {
  return (
    <div className="App">
      <NavbarPropio/>
      <BannerPropio/>
      <Informacion/>
    </div>
  );
}

export default App;
