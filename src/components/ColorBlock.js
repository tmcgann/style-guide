import React from 'react'
import styled from '@emotion/styled'

import { getContrastText, hexToRgbArray } from '../utils/colorUtils'

const ColorBlock = ({
  hex = '#000000',
  // size = null,
  // width = size || 175,
  // height = size || 175,
  ...props
}) => {
  const [r, g, b] = hexToRgbArray(hex)

  const CoreBlockStyled = styled(CoreBlock)`
    ${'' /* width: ${width}px; */}
    ${'' /* height: ${height}px; */}
    background-color: ${hex};
    color: ${getContrastText(hex)};
  `

  return (
    <Container>
      <CoreBlockStyled>
        <div>{hex.toUpperCase()}</div>
        <RgbComponent letter="R">{r}</RgbComponent>
        <RgbComponent letter="G">{g}</RgbComponent>
        <RgbComponent letter="B">{b}</RgbComponent>
      </CoreBlockStyled>
    </Container>
  )
}

const Container = styled.div`
  height: 100%;
  font-weight: bold;
`

const CoreBlock = styled.div`
  height: 100%;
  min-width: 150px;
  min-height: 150px;
  padding: 18%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const SubBlock = ({ color }) => <div></div>

const RgbComponent = ({ letter, children }) => (
  <RgbComponentContainer>
    <LetterValue>{letter}</LetterValue>
    <NumberValue>{children}</NumberValue>
  </RgbComponentContainer>
)

const RgbComponentContainer = styled.div`
  display: flex;
`
const LetterValue = styled.span`
  width: 25%;
`
const NumberValue = styled.span`
  width: 75%;
`

export default ColorBlock
