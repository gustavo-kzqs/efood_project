import styled from 'styled-components'
import { Cores } from '../../styles'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 32px;
  padding: 32px;
  background-color: ${Cores.backColor};
  justify-items: center;
`

export const Card = styled.div`
  background-color: ${Cores.TagColor};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 24px;
  box-sizing: border-box;
`

export const PizzaImage = styled.img`
  object-fit: cover;
`

export const PizzaName = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  font-size: 18px;
  margin: 12px 0 8px;
  color: ${Cores.backColor};
`

export const PizzaDescription = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: ${Cores.backColor};
  padding: 0 12px;
  margin-bottom: 16px;
  line-height: 22px;
  text-align: left;
`

export const AddButton = styled.button`
  background-color: #ffebd9;
  color: #e66767;
  border: none;
  border-top: 1px solid #ffb3b3;
  padding: 8px 8px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
  box-sizing: border-box;
  font-size: 16px;
`
