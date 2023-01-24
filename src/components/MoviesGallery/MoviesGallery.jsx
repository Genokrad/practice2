export const MoviesGallery = ({ movies, deleteMovie }) => {
  // const {  } = movies;

  return (
    <ul>
      {movies.map(movies => {
        const { id, title, vote_count: votes } = movies;

        return (
          <li key={id}>
            <h2>{title}</h2>
            <p>Votes:{votes}</p>
            <button type="button" onClick={() => deleteMovie(id)}>
              Delete
            </button>
            {/* <button
              type="button"
              onClick={() => {
                showPoster({ src: { img }, alt: { title } });
              }}
            >
              Open poster
            </button> */}
          </li>
        );
      })}
    </ul>
  );
};
