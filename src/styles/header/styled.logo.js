import styled from 'styled-components'

export default styled.span`
    color: #fff;
    font-size: 28px;
    font-family: ${({ theme }) => theme.fonts.antonio};
    
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