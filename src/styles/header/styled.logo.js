import styled from 'styled-components'

export default styled.span`
    color: #fff;
    font-size: 28px;
    font-family: ${({ theme }) => theme.fonts.antonio};

    // mobile //
    @media screen and (max-width: 650px){
        margin: 30px 0 0 16px;

    }
    
    // tablet //
    @media screen and (min-width:651px) and (max-width:999px){
        position: absolute;
        top: 32px;
        left: 50%;
        transform: translateX(-50%);
    }

    // desktop //
    @media screen and (min-width:1000px){
        margin: 22px 32px;
    }

`