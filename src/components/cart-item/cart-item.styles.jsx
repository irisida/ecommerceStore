import styled from 'styled-components';

export const CartItemStyle = styled.div`
  width: 100%;
  display: flex;
  height: 75px;
  margin-bottom: 15px;
`;

export const CartItemImageStyle = styled.img`
  width: 30%;
`;

export const ItemDetailsStyle = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
`;

export const NameStyle = styled.span`
  font-size: 16px;
`;

export const PriceStyle = styled.span`
  ${NameStyle}
`;
