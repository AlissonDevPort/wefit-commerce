import useGetMovies from "../../api/get-movies/useGetMovies";
import type { RootState } from "../../store/store";
import { useSelector } from "react-redux";

const useHome = () => {
  const { movies, isLoading, isSuccess, error } = useGetMovies();

  const moviesData = movies?.products;
  const successWithNoMovies = isSuccess && movies?.products?.length === 0;
  const hasMovies = isSuccess && movies?.products?.length > 0;
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const isMovieInCart = (movieId: number) => {
    return cartItems.some((item) => item.id === movieId && item.quantity > 0);
  };

  const getMovieQuantity = (movieId: number) => {
    return cartItems.find((item) => item.id === movieId)?.quantity || 0;
  };

  return {
    moviesData,
    isLoading,
    isSuccess,
    error,
    successWithNoMovies,
    hasMovies,
    isMovieInCart,
    getMovieQuantity,
  };
};

export default useHome;
