import React from 'react'
import styled from '@emotion/styled'

import { getContrastText, hexToRgbArray } from '../utils/colorUtils'

const ColorBlock = ({
  hex = '#000000',
  size = null,
  width = size || 175,
  height = size || 175,
  ...props
}) => {
  const PADDING_RATIO = 0.18
  const [r, g, b] = hexToRgbArray(hex)

  const CoreBlockStyled = styled(CoreBlock)`
    ${'' /* width: ${width}px; */}
    ${'' /* height: ${height}px; */}
    padding: ${height * PADDING_RATIO}px ${width * PADDING_RATIO}px;
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
  font-weight: bold;
`

const CoreBlock = styled.div`
  min-width: 175px;
  min-height: 175px;
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
