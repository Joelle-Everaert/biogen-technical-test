import { createGlobalStyle } from 'styled-components'
import Poppins from './font/Poppins-Medium.ttf'

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Poppins';
    src: url(${Poppins}) format('truetype');
    font-style: normal;
    font-display: auto;
  }

  body {
    font-family: 'Poppins';
    text-rendering: optimizeLegibility;
    margin: 0;
    padding: 0;
    max-width: 100%;
    font-weight: 500;
    -webkit-font-smoothing: antialiased;
  }

  .container {
    width: 100%;
    box-sizing: border-box;
    padding: 0 0 0 1rem;
}

@media screen and (min-width:992px) {

.container {
    max-width: 1184px;
    margin: 0 auto;
    padding: 0 1rem;
  }
}

`

export default GlobalStyle