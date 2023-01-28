import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
        font-family: 'Open Sans', sans-serif; 
    }
    #root{
        display: flex;
        width: 100vw;
        height: 100vh;
        overflow: hidden;
    }
 `;

export default GlobalStyles;
