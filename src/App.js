import React from 'react'
import styled from '@emotion/styled'

import ColorBlock from './components/ColorBlock'

const fontFamily = 'Lato'

function App() {
  return (
    <Container>
      <ColorBlockContainer>
        <ColorBlock hex="#071e3d" />
        <ColorBlock hex="#1f4287" />
        <ColorBlock hex="#278ea5" />
        <ColorBlock hex="#21e6c1" />
      </ColorBlockContainer>
      <TypographyContainer>
        <TypographyHeader>
          <Title>Claravine</Title>
          <Subtitle>Creating trust in data</Subtitle>
        </TypographyHeader>
        <Paragraph>
          The <em>only</em> end-to-end platform to <strong>standardize</strong>,{' '}
          <strong>govern</strong>, and <strong>connect</strong> data across every team, system, and
          channel.
        </Paragraph>
      </TypographyContainer>
    </Container>
  )
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  font-family: ${fontFamily};
`

const ColorBlockContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

const TypographyContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 48px;
  width: 700px;
`

const TypographyHeader = styled.header`
  margin-bottom: 2rem;
`

const Title = styled.h1`
  margin: 0;
  font-size: 5rem;

  ${'' /* &:before {
    content: 'h1. ';
    color: whitesmoke;
    width: 125px;
    display: inline-block;
  } */}
`
const Subtitle = styled.h2`
  margin: 0;
  font-size: 2.5rem;
`
const Paragraph = styled.p`
  margin: 0;
  font-size: 1.125rem;
`

export default App
