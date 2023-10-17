import './App.css';
import NavBar from './components/NavBar';
import MusicCard from './components/MusicCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { musicInfo } from './data/data.js';
import MusicBar from './components/MusicBar';


function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='wrapper'>
        {musicInfo.map(obj => {
          return (
            <MusicCard
              title={obj.songName}
              name={obj.artist}
            />
          )
        })}
      </div>
      <MusicBar/>
    </div>
  );
}

export default App;
