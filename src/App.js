import './App.css';
import './components/MatchList';
import MatchList from './components/MatchList';
import './components/PlayerList';
import PlayerList from './components/PlayerList';

function App() {
  return (
    <div className="App">
      <h1>
        Tourney Matches{" "} 
        <span>Where Coding and Tournaments found their Match!</span>
      </h1>
      <PlayerList />
      <MatchList />
    </div>
  );
}

export default App;
