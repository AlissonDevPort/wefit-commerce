import { useNavigate } from "react-router-dom";
import PaymentDone from "../../assets/payment-done.svg";
import BaseInfoContainer from "../../components/BaseInfoContainer/BaseInfoContainer";

const Success = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <BaseInfoContainer
      image={PaymentDone}
      alt="Pagamento realizado"
      title="Compra realizada com sucesso!"
      buttonText="VOLTAR"
      onButtonClick={handleBack}
    />
  );
};

export default Success;
