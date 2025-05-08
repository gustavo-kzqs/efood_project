import styled from 'styled-components'
import banner from '../../assets/images/massa.png'

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 280px;
  background-image: url(${banner});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px;
  box-sizing: border-box;
`

export const Img = styled.div`
  content: '';
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.45);
  z-index: 1;
`

export const Categoria = styled.h3`
  font-size: 32px;
  font-weight: 100;
  color: #fff;
  margin: 0;
  z-index: 2;
`

export const Titulo = styled.h2`
  font-size: 32px;
  font-weight: 900;
  color: #fff;
  margin: 0;
  z-index: 2;
`
