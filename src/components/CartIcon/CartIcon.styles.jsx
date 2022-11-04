import styled from 'styled-components';

import { ReactComponent as ShoppingSvg } from '../../assets/shopping-bag.svg';

export const ShoppingIcon = styled(ShoppingSvg)`
  width: 50px;
  cursor: pointer;
`;
export const CartIconContainer = styled.div`
  width: 45px;
  margin-left: 10px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 1rem;
  font-weight: bold;
  bottom: 5px;
  z-index: -1;
`;
