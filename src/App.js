import React from 'react'
import styled from '@emotion/styled'
import debounce from 'lodash/debounce'

import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import Fab from '@material-ui/core/Fab'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import SettingsIcon from '@material-ui/icons/Settings'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'

import { ReactComponent as LogoTypeLight } from './assets/claravine-logotype-blue-green.svg'
import { ReactComponent as LogoTypeDark } from './assets/claravine-logotype-white-green.svg'
import ColorBlock from './components/ColorBlock'

import { isValidHexColor } from './utils/colorUtils'

const fontFamilies = [
  'Archivo Narrow',
  'Chivo',
  'Fjalla One',
  'Istok Web',
  'Lato',
  'Nunito Sans',
  'Open Sans',
  'Oswald',
  'Roboto Condensed',
  'Source Sans Pro',
]
const weights = [100, 200, 300, 400, 500, 600, 700, 800, 900]

function App() {
  const [drawerOpen, setDrawerOpen] = React.useState(true)

  const [primaryColor, setPrimaryColor] = React.useState('#264653') // #071e3d
  const [secondaryColor, setSecondaryColor] = React.useState('#5dd39e') // #1f4287
  const [tertiaryColor, setTertiaryColor] = React.useState('#e535ab') // #278ea5
  const [quaternaryColor, setQuaternaryColor] = React.useState('#cccccc') // #21e6c1
  const [primaryColorText, setPrimaryColorText] = React.useState(primaryColor)
  const [secondaryColorText, setSecondaryColorText] = React.useState(secondaryColor)
  const [tertiaryColorText, setTertiaryColorText] = React.useState(tertiaryColor)
  const [quaternaryColorText, setQuaternaryColorText] = React.useState(quaternaryColor)

  const [headerFont, setHeaderFont] = React.useState('Oswald')
  const [headerFontWeight, setHeaderFontWeight] = React.useState(200)
  const [bodyFont, setBodyFont] = React.useState('Lato')

  const [titleText, setTitleText] = React.useState('Claravine')
  const [subtitleText, setSubtitleText] = React.useState('Creating trust in data')
  const [bodyText, setBodyText] = React.useState(
    ' The only end-to-end platform to standardize, govern, and connect data across every team, system, and channel.',
  )

  const toggleDrawer = isOpen => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }

    setDrawerOpen(isOpen)
  }

  const handleColorChange = (textSetter, colorSetter) => e => {
    textSetter(e.target.value)
    if (isValidHexColor(e.target.value)) {
      colorSetter(e.target.value)
    }
  }

  const handleChange = setter => e => {
    setter(e.target.value)
  }

  // const handleChangeDebounced = (setter, ms = 150) => {
  //   const setterDebounced = debounce(setter, ms)
  //   return e => {
  //     setterDebounced(e.target.value)
  //   }
  // }

  const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    background-color: #f5f5f5;
    font-family: ${bodyFont};
  `

  const TypographyHeader = styled.header`
    margin-bottom: 2rem;
    font-family: ${headerFont};
    font-weight: ${headerFontWeight};
  `

  const Title = styled.h1`
    margin: 0;
    font-size: 5rem;
    font-weight: ${headerFontWeight};

    ${'' /* &:before {
      content: 'h1. ';
      color: whitesmoke;
      width: 125px;
      display: inline-block;
    } */}
  `

  return (
    <Container>
      <ColorBlockContainer>
        <ColorBlock hex={primaryColor} />
        <ColorBlock hex={secondaryColor} />
        <ColorBlock hex={tertiaryColor} />
        <ColorBlock hex={quaternaryColor} />
      </ColorBlockContainer>
      <ContentContainer>
        <LogoContainer>
          <DarkLogoContainer bg="#264653">
            <LogoTypeDark />
          </DarkLogoContainer>
        </LogoContainer>
        <LogoContainer>
          <LogoTypeLight />
        </LogoContainer>
        <TypographyContainer>
          <TypographyHeader>
            <Title>{titleText}</Title>
            <Subtitle>{subtitleText}</Subtitle>
          </TypographyHeader>
          <Paragraph>
            The <em>only</em> end-to-end platform to <strong>standardize</strong>,{' '}
            <strong>govern</strong>, and <strong>connect</strong> data across every team, system,
            and channel.
          </Paragraph>
          <Paragraph></Paragraph>
          <Paragraph>ABCDEFGHIJKLMNOPQRSTUVWXYZ</Paragraph>
          <Paragraph>abcdefghijklmnopqrstuvwxyz</Paragraph>
          <Paragraph>0123456789</Paragraph>
        </TypographyContainer>
      </ContentContainer>
      <FabContainer>
        <FabStyled onClick={toggleDrawer(true)}>
          <SettingsIcon />
        </FabStyled>
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
          <DrawerContent>
            <DrawerSection>
              <Typography variant="h5">Colors</Typography>
              <TextField
                value={primaryColorText}
                onChange={handleColorChange(setPrimaryColorText, setPrimaryColor)}
                label="Primary color"
                margin="normal"
                fullWidth
              />
              <TextField
                value={secondaryColorText}
                onChange={handleColorChange(setSecondaryColorText, setSecondaryColor)}
                label="Secondary color"
                margin="normal"
                fullWidth
              />
              <TextField
                value={tertiaryColorText}
                onChange={handleColorChange(setTertiaryColorText, setTertiaryColor)}
                label="Tertiary color"
                margin="normal"
                fullWidth
              />
              <TextField
                value={quaternaryColorText}
                onChange={handleColorChange(setQuaternaryColorText, setQuaternaryColor)}
                label="Quaternary color"
                margin="normal"
                fullWidth
              />
            </DrawerSection>
            <DrawerSection>
              <Typography variant="h5">Typography</Typography>
              <FormControl margin="normal" fullWidth>
                <InputLabel id="typography-header-font-select">Header Font</InputLabel>
                <Select
                  labelId="typography-header-font-select"
                  value={headerFont}
                  onChange={handleChange(setHeaderFont)}
                >
                  {fontFamilies.map(font => (
                    <MenuItem key={font} value={font}>
                      {font}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl margin="normal" fullWidth>
                <InputLabel id="typography-header-font-weight-select">
                  Header Font Weight
                </InputLabel>
                <Select
                  labelId="typography-header-font-weight-select"
                  value={headerFontWeight}
                  onChange={handleChange(setHeaderFontWeight)}
                >
                  {weights.map(weight => (
                    <MenuItem key={weight} value={weight}>
                      {weight}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl margin="normal" fullWidth>
                <InputLabel id="typography-body-font-select">Body Font</InputLabel>
                <Select
                  labelId="typography-body-font-select"
                  value={bodyFont}
                  onChange={handleChange(setBodyFont)}
                >
                  {fontFamilies.map(font => (
                    <MenuItem key={font} value={font}>
                      {font}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </DrawerSection>
            <DrawerSection>
              <Typography variant="h5">Sample Text</Typography>
              <TextField
                value={titleText}
                onChange={handleChange(setTitleText)}
                label="Title Text"
                margin="normal"
                fullWidth
              />
              <TextField
                value={subtitleText}
                onChange={handleChange(setSubtitleText)}
                label="Subtitle Text"
                margin="normal"
                fullWidth
              />
              <TextField
                value={bodyText}
                onChange={handleChange(setBodyText)}
                label="Body Text"
                margin="normal"
                fullWidth
              />
            </DrawerSection>
          </DrawerContent>
        </Drawer>
      </FabContainer>
    </Container>
  )
}

// const GenericSelect = ({ label, items, ...props }) => {
//   <FormControl margin="normal" fullWidth>
//     <InputLabel id={label}>{label}</InputLabel>
//     <Select
//       labelId={label}
//       value={headerFont}
//       onChange={handleChange(setHeaderFont)}
//     >
//       {items.map(item => (
//         <MenuItem key={item} value={item}>
//           {item}
//         </MenuItem>
//       ))}
//     </Select>
//   </FormControl>
// }

const ContentContainer = styled.div`
  min-width: 700px;
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
  min-width: ${100 / 4}vh;
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
  <div style={{ backgroundColor: bg, margin: '-36px', padding: '24px' }}>{children}</div>
)

const TypographyContainer = styled(ContentCard)`
  display: flex;
  flex-direction: column;
`

const Subtitle = styled.h2`
  margin: 0;
  font-size: 2.5rem;
`
const Paragraph = styled.p`
  margin: 0 0 1rem 0;
  font-size: 1.125rem;
`

const FabContainer = styled.div`
  width: 100%;
  padding: 24px 24px;
  text-align: right;
`

const FabStyled = styled(Fab)`
  background-color: #1f4287;
`

const DrawerContent = styled.div`
  width: 350px;
  padding: 24px 24px;
`

const DrawerSection = styled.div`
  margin-bottom: 24px;
`

const DrawerDivider = styled(Divider)`
  margin: 16px 0 !important;
`

export default App
