import MovieCard from "../../components/MovieCard/MovieCard";
import { MoviesGrid } from "./Home.styles";
import Spinner from "../../components/Spinner/Spinner";
import EmptyPicture from "../../assets/empty-pic.svg";
import type { Movie } from "../../types";
import BaseInfoContainer from "../../components/BaseInfoContainer/BaseInfoContainer";
import SharedLayoutAnimation from "../../components/shared/animated/SharedLayoutAnimation";
import useHome from "./useHome";

const Home = () => {
  const {
    moviesData,
    isLoading,
    error,
    successWithNoMovies,
    hasMovies,
    isMovieInCart,
    getMovieQuantity,
  } = useHome();

  return (
    <>
      <SharedLayoutAnimation type="blink">
        {isLoading && <Spinner key="spinner" />}

        {(successWithNoMovies || error) && (
          <BaseInfoContainer
            key="base-info-container"
            image={EmptyPicture}
            alt="Parece que não há nada por aqui :("
            title="Parece que não há nada por aqui :("
            buttonText="Recarregar página"
            onButtonClick={() => window.location.reload()}
          />
        )}
        {hasMovies && (
          <MoviesGrid key="movies-grid">
            {moviesData?.map((movie: Movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                isInCart={isMovieInCart(movie.id)}
                quantity={getMovieQuantity(movie.id)}
              />
            ))}
          </MoviesGrid>
        )}
      </SharedLayoutAnimation>
    </>
  );
};

export default Home;
