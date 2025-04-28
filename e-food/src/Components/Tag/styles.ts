import styled from 'styled-components'
import { Cores } from '../../styles'
import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${Cores.TagColor};
  font-size: 12px;
  font-weight: bold;
  padding: 6px 4px;
  display: inline-block;
  color: ${Cores.textColor2};
`
