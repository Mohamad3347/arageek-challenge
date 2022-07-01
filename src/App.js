
import DataHandler from './components/DataHandler/dataHnadler';
import './index.css';

const  App = () => {
  return (
    <div>
      <header><h1 className='title'>Unsplash Wallpaper Downloader</h1></header>
      <section>
      <DataHandler />
      </section>
      <footer>

      </footer>
    </div>
  );
}

export default App;
