import styled from '@emotion/styled'
import {css} from '@emotion/core'

export const Card = styled.div`
  position: relative;

  padding: 1.3em 2em;
  background: white;

  box-shadow: 0 6px 8px rgba(102, 119, 136, 0.03),
    0 1px 2px rgba(102, 119, 136, 0.3);
    
  ${props => props.top && css`
    margin-top: ${props.top}px;
  `}
`
