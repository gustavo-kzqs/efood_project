import styled from 'styled-components'
import { Cores } from '../../styles'

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 32px;
  background-color: ${Cores.backColor};
`

export const Card = styled.div`
  width: 472px;
  height: 400px;
  background-color: ${Cores.CardColor};
  border: 1px solid ${Cores.borderColor};
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin: 16px;
`

export const Image = styled.img`
  width: 100%;
  height: auto;
`

export const Info = styled.div`
  padding: 16px;
`

export const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.h2`
  color: ${Cores.textColor};
  font-size: 20px;
  font-weight: bold;
  margin: 0;
`

export const Rating = styled.span`
  font-weight: bold;
  color: ${Cores.TagColor};
  display: flex;
  align-items: center;
  gap: 4px;
`

export const Description = styled.p`
  color: ${Cores.textColor};
  font-size: 14px;
  margin: 12px 0;
`

export const Button = styled.button`
  background-color: ${Cores.TagColor};
  color: white;
  font-weight: bold;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
`

export const Badge = styled.span`
  background-color: ${Cores.TagColor};
  color: white;
  font-size: 12px;
  padding: 4px 8px;
  margin-right: 8px;
  font-weight: bold;
`

export const Badges = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`

export const CardWrapper = styled.div`
  position: relative;
`
