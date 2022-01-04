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
        top: 159px;
        left: 50%;
        transform: translateX(-50%);
        width: 224px;
        height: 224px;
    }

    // tablet //
    @media screen and (min-width:651px) and (max-width:999px){
        top: 214px;
        left: 50%;
        transform: translateX(-50%);        
        width: 369px;
        height: 369px;
    }

    // desktop (small) //
    @media screen and (min-width:1000px) and (max-width:1199px){
        top: 182px;
        left: 150px;
        width: 582px;
        height: 582px;
    }

    // desktop //
    @media screen and (min-width:1200px){
        top: 182px;
        left: 189px;
        width: 582px;
        height: 582px;
    }
`