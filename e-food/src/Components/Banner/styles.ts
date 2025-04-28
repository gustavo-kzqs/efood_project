import styled from 'styled-components'
import { Cores } from '../../styles'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 186px;
  background-size: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`
export const Logo = styled.img`
  width: 120px;
  margin-bottom: 16px;
  padding-top: 64px;
`
export const Title = styled.h1`
  color: ${Cores.textColor};
  font-size: 36px;
  font-weight: bold;
  line-height: 1.4;
`
export const BackButton = styled.a`
  color: ${Cores.textColor};
  font-weight: bold;
  font-size: 18px;
  text-decoration: none;
  position: relative;
  display: flex;
  right: 341px;
`
export const LinkCart = styled.a`
  color: ${Cores.textColor};
  font-weight: bold;
  font-size: 18px;
  text-decoration: none;
  position: relative;
  display: flex;
  left: 341px;
`
