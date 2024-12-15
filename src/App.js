import './App.css';
import CarDetails from './components/CarDetails';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App font-poppins">
    <Header/>
      <CarDetails/>
      <Footer />
    </div>
  );
}

export default App;
