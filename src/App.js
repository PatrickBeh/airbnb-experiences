import './App.css';
import Header from './components/Header'
import Banner from './components/Banner'
import Content from './components/Content'
import Slider from './components/Slider'


function App() {
  return (
    <div className='bg-slate-900 p-20 '>
      <div className='max-w-xl m-auto rounded-lg overflow-hidden bg-white'>
        <Header />
        <Banner />
        <Content />
        <Slider />
      </div>
    </div>
  );
}

export default App;
