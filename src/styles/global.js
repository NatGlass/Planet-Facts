import { createGlobalStyle } from 'styled-components';
import Stars from '../assets/background-stars.svg'

export default createGlobalStyle`
    // reset css //
    *, *::before, *::after{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        list-style: none;
        text-decoration: none;
    }

    body{
        position: relative;
        width: 100%;
        max-width: 1440px;
        height: 100vh;
        margin: auto;
        background: #070724;
        background-image: url(${Stars});
        background-size: cover;
        background-repeat: no-repeat;
    }

    // typography //
    h1{
        font-family: ${({ theme }) => theme.fonts.antonio};
        font-size: ${({ theme }) => theme.fontSettings.h1.size};
        line-height: ${({ theme }) => theme.fontSettings.h1.line};
        color: #fff;
        font-weight: 400;
    }

    h2{
        font-family: ${({ theme }) => theme.fonts.antonio};
        font-size: ${({ theme }) => theme.fontSettings.h2.size};
        line-height: ${({ theme }) => theme.fontSettings.h2.line};
        line-height: ${({ theme }) => theme.fontSettings.h2.letter};
        font-weight: 400;
    }

    h3{
        font-family: ${({ theme }) => theme.fonts.spartan};
        font-size: ${({ theme }) => theme.fontSettings.h3.size};
        line-height: ${({ theme }) => theme.fontSettings.h3.line};
        line-height: ${({ theme }) => theme.fontSettings.h3.letter};
        font-weight: 700;
    }

    h4{
        font-family: ${({ theme }) => theme.fonts.spartan};
        font-size: ${({ theme }) => theme.fontSettings.h4.size};
        line-height: ${({ theme }) => theme.fontSettings.h4.line};
        line-height: ${({ theme }) => theme.fontSettings.h4.letter};
        font-weight: 700;
    }

    p{
        font-family: ${({ theme }) => theme.fonts.spartan};
        font-size: ${({ theme }) => theme.fontSettings.p.size};
        line-height: ${({ theme }) => theme.fontSettings.p.line};
    }
`