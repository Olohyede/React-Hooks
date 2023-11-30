import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Topgun from './Images/Topgun.jpeg'
import MonkeyKing from'./Images/MonkeyKing.jpeg'
import TheNun from './Images/TheNun.jpeg'
import MovieList from './component/MovieList';
import Filter from './component/Filter';
import AddMovie from './component/AddMovie';
import Trailer from './component/Trailer';


const App = () => {
  const [movies, setMovies] = useState([
    {title: 'Topgun',
    description: 'Action',
    trailerLink: "https://youtu.be/giXco2jaZ_4?si=dvYfQZSz8ynJazxp",
    posterURL: Topgun,
    rating: 4.5},

    {title: 'The Monkey King',
    description: 'Animation',
    posterURL: MonkeyKing,
    trailerLink: "https://youtu.be/mr7tVEdS6L0?si=5MDgznXErVA67vWA",
    rating: 3.1},

    {title: 'The Nun',
    description: 'Horror',
    trailerLink: "https://youtu.be/CAeeIdD4KQU?si=wu0BRNrQPOqTkMun",
    posterURL: TheNun,
    rating: 3.0},
  ]); 
  
  const addMovieToList = (movie) => {
    setMovies((previous) => [...previous, movie])
    } 
  
    const [filter, setFilter] = useState('');
  
    const filteredMovies = movies.filter((movie) => movie.title.toLowerCase().includes(filter.toLowerCase()) || movie.rating >= Number(filter));
    
    return (
      <>
      
      <Filter setFilter={setFilter} />
      <Router>
        <Routes>
          {/* <Filter setFilter={setFilter} /> */}
          <Route path="/" exact element={<MovieList movies={filteredMovies} filter={filter} />}>

            {/* <AddMovie addMovie={addMovieToList}/> */}
          </Route>
          <Route path="/movies/:title" element={<Trailer movies={movies} />}>
          </Route>
        </Routes>
      </Router>
      <AddMovie addMovie={addMovieToList}/> 
     
      </>
    );
  };

  
export default App;
