import { ThemeProvider } from 'styled-components'
import Input from './componentes/Input'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>

      <Input/>
    </ThemeProvider>
  )
}