import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Playlist from '../Playlist/Playlist';
import SearchResults from '../SearchResults/SearchResults';
import SearchBar from '../SearchBar/SearchBar';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        { name: 'Numb', artist: 'Linkin park', album: 'Meteora', id: '1' },
        { name: 'Breaking the Habit', artist: 'Linkin park', album: 'Meteora', id: '2' },
        { name: 'Don\'t Stay', artist: 'Linkin park', album: 'Meteora', id: '3' },
        { name: 'From the Inside', artist: 'Linkin park', album: 'Meteora', id: '4' }
      ],
      playlistName: 'My Playlist',
      playlistTracks: [
        { name: 'Numb', artist: 'Linkin park', album: 'Meteora', id: '5' },
        { name: 'Breaking the Habit', artist: 'Linkin park', album: 'Meteora', id: '6' },
        { name: 'Don\'t Stay', artist: 'Linkin park', album: 'Meteora', id: '7' }
      ],
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find(savedTrack => savedTrack.id !== track.id)) {
      tracks.push(track);
      this.setState({ playlistTracks: tracks });
    } else {
      return;
    }
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(savedTrack => savedTrack.id !== track.id);
    this.setState({ playlistTracks: tracks });
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
