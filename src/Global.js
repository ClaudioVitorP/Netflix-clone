import { createGlobalStyle } from "styled-components";



const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Secular+One&display=swap');

    *{
        box-sizing: border-box;
    }

    body{
        background-color: #111;
        color: #fff;
        margin: 0;
        font-family: 'Roboto', sans-serif;
    }

    .Black{
        background-color: #141414;
    }
`

export default GlobalStyle