import styled from 'styled-components'

export default styled.div`
    display: flex;
    position: absolute;
    top: 75px;

    // mobile //
    @media screen and (max-width:650px){
        width: 100%;
        height: 52px;
        justify-content: space-between;
        align-items: center;
        padding: 0 24px;
        border-bottom: 1px solid rgba(255,255,255,0.2);
    }

    // tablet //
    @media screen and (min-width: 651px) and (max-width:999px){
        top: 676px;
        right: 40px;
        width: 281px;
        height: 152px;
        flex-direction: column;
        justify-content: space-between;
    }

    // desktop //
    @media screen and (min-width:1000px){
        top: 577px;
        right: 165px;
        width: 350px;
        height: 176px;
        flex-direction: column;
        justify-content: space-between;
    }


`