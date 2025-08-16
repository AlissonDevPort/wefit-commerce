import { useQuery } from "@tanstack/react-query";
import { getMovies } from "./getMovies";

export default function useGetMovies() {
  const queryKey = ["movies"];

  const {
    data: movies,
    isLoading,
    isSuccess,
    error,
    refetch,
    ...rest
  } = useQuery({
    queryKey,
    queryFn: () => getMovies(),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  return { movies, isLoading, isSuccess, error, refetch, ...rest };
}
