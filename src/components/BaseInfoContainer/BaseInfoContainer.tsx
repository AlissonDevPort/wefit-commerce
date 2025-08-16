import { BaseInfoContainerWrapper, Button } from "./BaseInfoContainer.styles";

interface BaseInfoContainerProps {
  image: string;
  alt: string;
  title?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

const BaseInfoContainer = ({
  image,
  alt,
  title,
  buttonText,
  onButtonClick,
}: BaseInfoContainerProps) => {
  return (
    <BaseInfoContainerWrapper>
      {title && <h2 style={{ textWrap: "balance" }}>{title}</h2>}
      <img src={image} alt={alt} />
      {buttonText && onButtonClick && (
        <Button onClick={onButtonClick}>{buttonText}</Button>
      )}
    </BaseInfoContainerWrapper>
  );
};

export default BaseInfoContainer;
