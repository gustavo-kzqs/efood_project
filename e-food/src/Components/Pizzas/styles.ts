import styled from 'styled-components'
import { Cores } from '../../styles'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;
  padding: 32px;
  background-color: #fff6f0;
`

export const Card = styled.div`
  background-color: ${Cores.TagColor};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 320px;
  padding: 16px;
`

export const PizzaImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`

export const PizzaName = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  font-size: 18px;
  margin: 12px 0 8px;
  color: white;
`

export const PizzaDescription = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: white;
  padding: 0 12px;
  margin-bottom: 16px;
`

export const AddButton = styled.button`
  background-color: #ffe5b4;
  color: #e66767;
  border: none;
  border-top: 1px solid #ffb3b3;
  padding: 8px 8px;
  width: 100%;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ffd699;
  }
`
