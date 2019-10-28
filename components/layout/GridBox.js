import React from 'react'
import styled from 'styled-components'

const BOX = styled.div`
  display: block;
  position: relative;
  margin: 0 auto;
  max-width: 980px;
`;

const GridBox = (props) => {
  return (
    <BOX>
      {props.children}
    </BOX>
  )
}

export default GridBox
