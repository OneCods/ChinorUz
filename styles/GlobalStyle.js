import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
  }

  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: 'Exo', sans-serif;
    overflow-x: hidden;
    touch-action: pan-x pan-y;


    @media only screen and (max-width: 1250px) {
      margin-top: 30px;
    }
  }

  ul {
    list-style: none;
  }

  a {
    display: inline-block;
    text-decoration: none;
  }
`
