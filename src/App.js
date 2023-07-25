import logo from './logo.svg';
import './App.css';
import Nabar from './components/Nabar';
import Hero from './components/Hero';
import HeadlineCards from './components/HeadlineCards';
import Food from './components/Food'
import Category from './components/Category';

function App() {
  return (
    <div>
      <Nabar/>
      <Hero/>
      <HeadlineCards/>
      <Food/>
      <Category/>
    </div>
  );
}

export default App;
