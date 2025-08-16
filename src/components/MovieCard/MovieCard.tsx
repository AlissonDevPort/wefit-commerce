import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import type { Movie } from "../../types";
import {
  Card,
  MovieImage,
  MovieInfo,
  MovieTitle,
  Price,
  AddButton,
  AddButtonContent,
} from "./MovieCard.styles";
import { formatPrice } from "../../utils/price";
import CartIcon from "../../assets/cart-icon.svg";

interface MovieCardProps {
  movie: Movie;
  isInCart: boolean;
  quantity: number;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, isInCart, quantity }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ ...movie, quantity: 1 }));
  };

  return (
    <Card>
      <MovieImage src={movie.image} alt={movie.title} />
      <MovieInfo>
        <MovieTitle>{movie.title}</MovieTitle>
        <Price>{formatPrice(movie.price)}</Price>
      </MovieInfo>
      <AddButton onClick={handleAddToCart} isInCart={isInCart}>
        <AddButtonContent>
          <img src={CartIcon} alt="Adicionar ao carrinho" />
          <span>{quantity}</span>
        </AddButtonContent>
        ADICIONAR AO CARRINHO
      </AddButton>
    </Card>
  );
};

export default MovieCard;
