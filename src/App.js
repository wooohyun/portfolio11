import './App.css';
import CardDeck from './component/CardDeck';
import CardSlider from './component/CardSlider';

function App() {
  return (
    <div className='Wrap'>
      <CardSlider />
      <CardDeck/>
    </div>
  );
}

export default App;
