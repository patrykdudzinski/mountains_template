import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Hero header="travel" subheader="it's time to" ></Hero>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </div>
  );
}

export default App;
