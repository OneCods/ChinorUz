import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  *::before,
  *::after,
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Exo', sans-serif;
    /* overflow-x: hidden; */
    background-color: #F9F9FB;


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

  span {
    display: inline-block;
  }

  img {
    display: inline-block;
  }
`
