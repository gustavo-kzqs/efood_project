import styled from 'styled-components'
import { Cores } from '../../styles'

export const FundoImagem = styled.img`
  width: 100%;
  height: 280px;
  background-image: url('./assets/image/massa.png');
  object-fit: cover;
  filter: brightness(0.5);
`
export const TextImg = styled.h1`
  font-weight: lighter;
  font-size: 32px;
`
export const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 280px;
  overflow: hidden;
`
export const BannerContent = styled.div`
  position: absolute;
  text-align: left;
  left: 180px;
  bottom: 24px;
  color: ${Cores.textColor2};
`
export const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  right: 170px;
  position: relative;
`
