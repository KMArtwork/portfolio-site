import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import './style/App.scss';

function App() {
  return (
    <div className="App">
      <div className='app_bgi'>
        <Header />
        <Main />
        <Footer />        
      </div>
    </div>
  );
}

export default App;
