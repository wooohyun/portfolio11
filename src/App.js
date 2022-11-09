import './App.css';
import Header from './component/Header';
import MainVisual from './component/MainVisual';
import CardSlider from './component/CardSlider';

function App() {
  return (
    <div className='Wrap'>
      <Header />
      <MainVisual/>
      <CardSlider />
    </div>
  );
}

export default App;
