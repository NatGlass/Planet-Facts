import styled from 'styled-components'

export default styled.header`
    width: 100%;
    z-index: 99;
    border-bottom: 1px solid rgba(255,255,255,0.2);

    // mobile // 
    @media screen and (max-width:650px){
        height: 75px;
    }

    // tablet //
    @media screen and (min-width: 651px) and (max-width:999px){
        height: 160px;
    }

    // desktop //
    @media screen and (min-width:1000px){
        height: 85px;
    }
`