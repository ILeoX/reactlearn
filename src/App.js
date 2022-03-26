import { useEffect, useState } from 'react';
import './App.css';
import searchIcon from './search.svg';
import MovieCard from './MovieCard';
//import {API_KEY} from 'dotenv/config'

//5eec3b96
const API_URL = `http://www.omdbapi.com?apikey=5eec3b96`;

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState(' ');

  const searchMovies = async (title) => {
    if (title !== undefined) {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();

      setMovies(data.Search);
    }
  };
  useEffect(() => {
    searchMovies('spiderman');
  }, []);

  return (
    <div className='App'>
      <h1> MovieLand </h1>

      <div className='search'>
        <input
          placeholder='search for movies'
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <img src={searchIcon} alt='search' onClick={searchMovies} />
      </div>

      <div className='container'>
        {movies?.length > 0 ? (
          movies.map((movie) => {
            <MovieCard movie={movie} />;
          })
        ) : (
          <div className='empty'>
            <h2> No Movies Found </h2>{' '}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
