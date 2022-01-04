import styled from 'styled-components'

export default styled.h1`
    position: absolute;
    color: #fff;

    // mobile //
    @media screen and (max-width:650px){
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        font-size: 40px;
    }

    // tablet //
    @media screen and (min-width:651px) and (max-width:999px){
        top: 0;
        left: 0;
        font-size: 48px;
        line-height: 62px;
    }

    // desktop //
    @media screen and (min-width:1000px){
        top: 0;
        left: 0;
        font-size: 80px;
        line-height: 104px;
    }
`