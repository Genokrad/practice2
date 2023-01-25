import React, { useState, useEffect } from 'react';
import { MoviesGallery } from './MoviesGallery/MoviesGallery';
import { Modal } from './Modal/Modal';
import { Button } from './Button/Button';
import { fetchMovies } from '../Services/Services';

// const MOVIES_KEY = 'movies';

export function App() {
  const [movies, setMovies] = useState([]);
  const [currentImg, setCurrentImg] = useState(null);
  const [isListShown, setIsListShown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  const showPoster = data => {
    setCurrentImg(data);
  };

  const showMovies = () => {
    setIsListShown(prevIsListShown => !prevIsListShown);
  };

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const deleteMovie = id => {
    setMovies(prevMovies => prevMovies.filter(movie => movie.id !== id));
  };

  const closeModal = () => {
    setCurrentImg(null);
  };

  useEffect(() => {
    if (isListShown) {
      setIsLoading(true);
      fetchMovies(page)
        .then(data => {
          setMovies(prevMovies => [...prevMovies, ...data.data.results]);
        })
        .catch(error => console.log(error))
        .finally(() => setIsLoading(false));
    }
    if (!isListShown) {
      setPage(1);
      setMovies([]);
    }
  }, [page, isListShown]);

  return (
    <>
      <Button
        clickHandler={showMovies}
        text={isListShown ? 'Hide Movies List' : 'Show Movies List'}
      />
      {isListShown && (
        <>
          <MoviesGallery
            movies={movies}
            deleteMovie={deleteMovie}
            showPoster={showPoster}
          />
          <Button text="Load more" clickHandler={loadMore} />
        </>
      )}
      {currentImg && <Modal currentImg={currentImg} closeModal={closeModal} />}
      {isLoading && <p>Loading</p>}
    </>

  );

  // componentDidUpdate(_, prevState) {
  //   const { isListShown, page } = this.state;
  //   if (
  //     (isListShown && prevState.isListShown !== isListShown) ||
  //     (isListShown && prevState.page !== page)
  //   ) {
  //     this.getMovie();
  //   }
  //   if (!isListShown && prevState.isListShown !== isListShown) {
  //     this.setState({ page: 1, movies: [] });
  //   }
  // }

  // closeModal = () => {
  //   this.setState({ currentImg: null });
  // };

  // getMovie = () => {
  //   this.setState({ isLoading: true });
  //   fetchMovies(this.state.page)
  //     .then(data => {
  //       this.setState(prevState => ({
  //         movies: [...prevState.movies, ...data.data.results],
  //       }));
  //     })
  //     .catch(error => console.log(error))
  //     .finally(() => this.setState({ isLoading: false }));
  // };

  // deleteMovie = id => {
  //   this.setState(prevState => {
  //     return {
  //       movies: prevState.movies.filter(movie => movie.id !== id),
  //     };
  //   });
  // };

  // showPoster = data => {
  //   this.setState({ currentImg: data });
  // };

  // showMovies = () => {
  //   console.log('should show movies here');
  //   this.setState(prevState => ({ isListShown: !prevState.isListShown }));
  // };

  // loadMore = () => {
  //   this.setState(prevState => ({ page: prevState.page + 1 }));
  // };

  // render() {
  //   const { currentImg, isListShown, movies } = this.state;
  //   return (
  //     <>
  //       <Button
  //         clickHandler={this.showMovies}
  //         text={isListShown ? 'Hide Movies List' : 'Show Movies List'}
  //       />
  //       {isListShown && (
  //         <>
  //           <MoviesGallery
  //             movies={movies}
  //             deleteMovie={this.deleteMovie}
  //             showPoster={this.showPoster}
  //           />
  //           <Button text="Load more" clickHandler={this.loadMore} />
  //         </>
  //       )}
  //       {currentImg && (
  //         <Modal currentImg={currentImg} closeModal={this.closeModal} />
  //       )}
  //     </>
  //   );
  // }
}

// export class App extends Component {

//   state = {
//     movies: [],
//     currentImg: null,
//     isListShown: false,
//     isLoading: false,
//     page: 1,
//   };

//   componentDidUpdate(_, prevState) {
//     const { isListShown, page } = this.state;
//     if (
//       (isListShown && prevState.isListShown !== isListShown) ||
//       (isListShown && prevState.page !== page)
//     ) {
//       this.getMovie();
//     }
//     if (!isListShown && prevState.isListShown !== isListShown) {
//       this.setState({ page: 1, movies: [] });
//     }
//   }

//   closeModal = () => {
//     this.setState({ currentImg: null });
//   };

//   getMovie = () => {
//     this.setState({ isLoading: true });
//     fetchMovies(this.state.page)
//       .then(data => {
//         this.setState(prevState => ({
//           movies: [...prevState.movies, ...data.data.results],
//         }));
//       })
//       .catch(error => console.log(error))
//       .finally(() => this.setState({ isLoading: false }));
//   };

//   deleteMovie = id => {
//     this.setState(prevState => {
//       return {
//         movies: prevState.movies.filter(movie => movie.id !== id),
//       };
//     });
//   };

//   showPoster = data => {
//     this.setState({ currentImg: data });
//   };

//   showMovies = () => {
//     console.log('should show movies here');
//     this.setState(prevState => ({ isListShown: !prevState.isListShown }));
//   };

//   loadMore = () => {
//     this.setState(prevState => ({ page: prevState.page + 1 }));
//   };

//   render() {
//     const { currentImg, isListShown, movies } = this.state;
//     return (
//       <>
//         <Button
//           clickHandler={this.showMovies}
//           text={isListShown ? 'Hide Movies List' : 'Show Movies List'}
//         />
//         {isListShown && (
//           <>
//             <MoviesGallery
//               movies={movies}
//               deleteMovie={this.deleteMovie}
//               showPoster={this.showPoster}
//             />
//             <Button text="Load more" clickHandler={this.loadMore} />
//           </>
//         )}
//         {currentImg && (
//           <Modal currentImg={currentImg} closeModal={this.closeModal} />
//         )}
//       </>
//     );
//   }
// }
