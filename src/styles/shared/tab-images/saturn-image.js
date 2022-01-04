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
        top: 144px;
        left: 50%;
        transform: translateX(-50%);
        width: 256px;
        height: 256px;
    }

    // tablet //
    @media screen and (min-width:651px) and (max-width:999px){
        top: 187px;
        left: 50%;
        transform: translateX(-50%);        
        width: 422px;
        height: 422px;
    }

    // desktop (small) //
    @media screen and (min-width:1000px) and (max-width:1199px){
        top: 155px;
        left: 150px;
        width: 666px;
        height: 666px;
    }

    // desktop //
    @media screen and (min-width:1200px){
        top: 155px;
        left: 147px;
        width: 666px;
        height: 666px;
    }
`