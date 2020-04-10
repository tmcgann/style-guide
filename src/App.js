import React from 'react'
import styled from '@emotion/styled'

import { ReactComponent as LogoTypeLight } from './assets/claravine-logotype-blue-green.svg'
import { ReactComponent as LogoTypeDark } from './assets/claravine-logotype-white-green.svg'
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
      <ContentContainer>
        <LogoContainer>
          <LogoTypeLight />
          <DarkLogoContainer bg="#264653">
            <LogoTypeDark />
          </DarkLogoContainer>
        </LogoContainer>
        <TypographyContainer>
          <TypographyHeader>
            <Title>Claravine</Title>
            <Subtitle>Creating trust in data</Subtitle>
          </TypographyHeader>
          <Paragraph>
            The <em>only</em> end-to-end platform to <strong>standardize</strong>,{' '}
            <strong>govern</strong>, and <strong>connect</strong> data across every team, system,
            and channel.
          </Paragraph>
        </TypographyContainer>
      </ContentContainer>
    </Container>
  )
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: #f5f5f5;
  font-family: ${fontFamily};
`

const ContentContainer = styled.div`
  width: 700px;
  padding: 24px 24px;
  display: flex;
  flex-direction: column;

  & > * {
    margin-bottom: 32px;
  }
`

const ContentCard = styled.div`
  background-color: #fff;
  padding: 36px 36px;
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.1);
  border-radius: 0px;
`

const ColorBlockContainer = styled.div`
  width: ${100 / 4}vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.2);
`

const LogoContainer = styled(ContentCard)`
  width: 100%;
  display: flex;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-bottom: 32px;
  }
`

const DarkLogoContainer = ({ bg, children }) => (
  <div style={{ backgroundColor: bg }}>{children}</div>
)

const TypographyContainer = styled(ContentCard)`
  display: flex;
  flex-direction: column;
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
