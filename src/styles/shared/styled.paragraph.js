import styled from 'styled-components'

export default styled.p`
    display: none;
    position: absolute;
    color: #fff;

    // show active class//
    &.active-tab-content{
        display: block;
    }

    // mobile //
    @media screen and (max-width:650px){
        top: 520px;
        left: 50%;
        transform: translateX(-50%);
        width: 90vw;
        max-width: 327px;
        font-size: 11px;
        text-align: center;
    }

    // tablet //
    @media screen and (min-width:651px) and (max-width:999px){
        top: 700px;
        left: 39px;
        width: 339px;
        font-size: 11px;
    }

    // desktop //
    @media screen and (min-width:1000px){
        top: 339px;
        right: 165px;
        width: 350px;
        font-size: 14px;
        line-height: 25px;
    }
`