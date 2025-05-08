import styled from 'styled-components'
import { Cores } from '../../styles'
import fundo from '../../assets/images/fundo.png'

export const Container = styled.header`
  background-image: url(${fundo});
  height: 186px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 64px;
  position: relative;

  img {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`

export const Title = styled.span`
  font-size: 18px;
  color: ${Cores.textColor};
  font-weight: bold;
`

export const Cart = styled.span`
  font-size: 18px;
  color: ${Cores.textColor};
  font-weight: bold;
`
