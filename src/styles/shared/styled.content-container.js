import styled from 'styled-components'

export default styled.div`
    position: absolute;
    
    // mobile //
    @media screen and (max-width:650px){
        top: 424px;
        left: 50%;
        transform: translateX(-50%);
        width: 90vw;
        max-width: 327px;
        height: 235px;
    }

    // tablet //
    @media screen and (min-width:651px) and (max-width:999px){
        top: 620px;
        left: 39px;
        width: 339px;
        height: 253px;
    }

    // desktop //
    @media screen and (min-width:1000px){
        top: 212px;
        right: 165px;
        width: 350px;
        height: 326px;
    }
`