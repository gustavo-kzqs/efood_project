import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Cores } from '../../styles'

export const ButtonContainer = styled.button`
  background-color: ${Cores.TagColor};
  color: ${Cores.textColor2};
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
  padding: 4px 6px;
`

export const ButtonLink = styled(Link)`
  background-color: ${Cores.TagColor};
  color: ${Cores.textColor2};
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
  padding: 4px 6px;
`
