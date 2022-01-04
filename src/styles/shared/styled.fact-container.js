import styled from 'styled-components'

export default styled.div`
    position: absolute;
    display: flex;

    // mobile //
    @media screen and (max-width: 650px){
        flex-direction: column;
        justify-content: space-between;
        top: 687px;
        left: 50%;
        transform: translateX(-50%);
        width: 90vw;
        max-width: 327px;
        height: 216px;
    }

    // tablet //
    @media screen and (min-width: 651px) and (max-width: 999px){
        justify-content: space-between;
        top: 900px;
        left: 50%;
        transform: translateX(-50%);
        width: 689px;
        height: 88px;
    }

    // desktop //
    @media screen and (min-width: 1000px){
        justify-content: space-between;
        top: 840px;
        left: 50%;
        transform: translateX(-50%);
        width: 1110px;
        height: 128px;
    }
`