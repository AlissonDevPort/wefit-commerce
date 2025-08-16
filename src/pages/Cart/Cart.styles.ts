import styled from "styled-components";

export const CartContainer = styled.div`
  gap: 24px;
  border-radius: 4px;
  background: #ffffff;
  padding: 24px;
  @media (max-width: 768px) {
    padding: 16px;
    gap: 21px;
  }
`;

export const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media (max-width: 768px) {
    gap: 21px;
  }
`;

export const CartHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  font-weight: 600;
  font-family: "Open Sans", sans-serif;
  color: #495057;
  font-weight: 700;
  font-size: 14px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const CartItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  &:hover {
    background: #f8f9fa;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const CartItemMobile = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    gap: 16px;
  }
`;

export const MobileItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

export const MobileTopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`;

export const MobileTopRight = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`;

export const MobileBottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MobileSubtotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-end;
`;
export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: #999999;
`;
export const ItemInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ItemImage = styled.img`
  width: 91px;
  height: 114px;
  @media (max-width: 425px) {
    width: 64px;
    height: 82px;
  }
`;

export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const ItemTitle = styled.h3`
  margin: 0;
  color: #2f2e41;
  font-size: 14px;
  font-weight: 700;
  font-family: "Open Sans", sans-serif;
`;

export const ItemPrice = styled.div`
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #2f2e41;
`;

export const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 11px;
`;

export const QuantityBorderBox = styled.div`
  width: 62px;
  height: 26px;
  border-radius: 4px;
  border-width: 1px;
  border: 1px solid #d9d9d9;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    width: 59px;
  }
`;

export const QuantityButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;

  img {
    width: 18px;
    height: 18px;
    object-fit: contain;
  }
`;

export const Quantity = styled.span`
  font-size: 14px;
  font-weight: 400;
  font-family: "Open Sans", sans-serif;
  color: #2f2e41;

  text-align: center;
`;

export const RemoveButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  img {
    width: 18px;
    height: 18px;
    object-fit: contain;
    @media (max-width: 768px) {
      width: 16px;
      height: 18px;
    }
  }
`;

export const CartSummary = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 425px) {
    width: 100%;
    flex-direction: column-reverse;
    align-items: center;
    gap: 16px;
  }
`;

export const SummaryTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Open Sans", sans-serif;
  gap: 5px;
  width: 197px;
  @media (max-width: 425px) {
    width: 100%;
  }
`;

export const CheckoutButton = styled.button`
  background: #009edd;
  color: #ffffff;
  border: none;
  cursor: pointer;
  font-size: 12px;
  font-weight: 700;
  font-family: "Open Sans", sans-serif;
  transition: all 0.2s;
  width: 173px;
  height: 34px;
  border-radius: 4px;
  padding: 8px;
  text-transform: uppercase;
  @media (max-width: 425px) {
    width: 100%;
    height: 40px;
    font-size: 14px;
  }

  &:hover {
    background: #0077b3;
  }
`;

export const CartInfoText = styled.p`
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  line-height: 100%;
  font-size: 14px;
  color: #999999;
`;

export const TotalPrice = styled.span`
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  font-size: 24px;
  width: 130px;
  line-height: 100%;
  color: #2f2e41;
  @media (max-width: 425px) {
    width: unset;
  }
`;
