import React, { Component } from 'react';

import movies from '../data/movies.json';
import { MoviesGallery } from './MoviesGallery/MoviesGallery';
// import { nanoid } from 'nanoid';
// import { Modal } from './Modal/Modal';

const MOVIES_KEY = 'MOVIES_KEY';

export class App extends Component {
  state = {
    movies: movies,
    currentImg: null,
  };

  componentDidMount() {
    const localData = localStorage.getItem(MOVIES_KEY);
    if (localData) {
      this.setState({ movies: JSON.parse(localData) });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.movies !== this.state.movies) {
      localStorage.setItem(MOVIES_KEY, JSON.stringify(this.state.movies));
    }
  }

  deleteMovie = id => {
    this.setState(prevState => {
      return { movies: prevState.movies.filter(movie => movie.id !== id) };
    });
  };

  showPoster = data => {
    this.setState({ currentImg: data });
  };

  render() {
    return (
      <>
        <MoviesGallery
          movies={this.state.movies}
          deleteMovie={this.deleteMovie}
        />
        {/* {this.currentImg && <Modal currentImg={this.currentImg} />} */}
      </>
    );
  }
}
