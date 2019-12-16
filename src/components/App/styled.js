import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,700');
  @import url("https://fonts.googleapis.com/icon?family=Material+Icons");
  * { box-sizing: border-box }
  body {
    margin: 0px !important;
    padding: 0px !important;
    font-family: 'Source Sans Pro';
    background-color: #424242;
  }
`;
