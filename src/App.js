import React, {useState} from 'react';
import './App.css';
import Topgun from './Images/Topgun.jpeg'
import MonkeyKing from'./Images/MonkeyKing.jpeg'
import TheNun from './Images/TheNun.jpeg'
import MovieList from './component/MovieList';
import Filter from './component/Filter';
import AddMovie from './component/AddMovie';


const App = () => {
  const [movies, setMovies] = useState([
    {title: 'Topgun',
    description: 'Action',
    posterURL: Topgun,
    rating: 4.5},

    {title: 'The Monkey King',
    description: 'Animation',
    posterURL: MonkeyKing,
    rating: 3.1},

    {title: 'The Nun',
    description: 'Horror',
    posterURL: TheNun,
    rating: 3.0},
  ]); 
  
  const addMovieToList = (movie) => {
    setMovies((previous) => [...previous, movie])
    } 
  
    const [filter, setFilter] = useState('');
  
    const filteredMovies = movies.filter((movie) => movie.title.toLowerCase().includes(filter.toLowerCase()) || movie.rating >= Number(filter));
    return (
      <div>
        <Filter setFilter={setFilter} />
        <MovieList movies={filteredMovies} />
        <AddMovie addMovie={addMovieToList}/>
      </div>
    );
  };

export default App;
