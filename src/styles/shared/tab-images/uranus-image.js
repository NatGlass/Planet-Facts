import styled from 'styled-components'

export default styled.img`
    display: none;
    position: absolute;
    color: #fff;

    // show active class//
    &.active-tab-image{
        display: block;
    }

    // mobile //
    @media screen and (max-width:650px){
        top: 183px;
        left: 50%;
        transform: translateX(-50%);
        width: 176px;
        height: 176px;
    }

    // tablet //
    @media screen and (min-width:651px) and (max-width:999px){
        top: 253px;
        left: 50%;
        transform: translateX(-50%);        
        width: 290px;
        height: 290px;
    }

    // desktop (small) //
    @media screen and (min-width:1000px) and (max-width:1199px){
        top: 244px;
        left: 150px;
        width: 458px;
        height: 458px;
    }

    // desktop //
    @media screen and (min-width:1200px){
        top: 244px;
        left: 251px;
        width: 458px;
        height: 458px;
    }
`