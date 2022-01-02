import styled from 'styled-components'

export default styled.nav`
    // mobile //
    @media screen and (max-width: 650px){
        position: absolute;
        top: 75px;
        left: 100%;
        left: ${({open}) => open ? '50%' : '-200%'};
        transform: translateX(-50%);
        width: 100vw;
        height: 100vh;
        transition: left .3s ease-in-out;
        background: #070724;
        overflow: hidden;
    }

    // tablet //
    @media screen and (min-width: 651px) and (max-width: 999px){
        position: absolute;
        top: 107px;
        left: 50%;
        transform: translateX(-50%);
    }

    // desktop //
    @media screen and (min-width:1000px){
        position: absolute;
        top: 0;
        right: 40px;
        width: 665px;
        height: 65px;
    }

`