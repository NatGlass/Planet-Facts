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
        top: 207px;
        left: 50%;
        transform: translateX(-50%);
        width: 129px;
        height: 129px;
    }

    // tablet //
    @media screen and (min-width:651px) and (max-width:999px){
        top: 292px;
        left: 50%;
        transform: translateX(-50%);        
        width: 253px;
        height: 253px;
    }

    // desktop (small) //
    @media screen and (min-width:1000px) and (max-width:1199px){
        top: 305px;
        left: 150px;
        width: 336px;
        height: 336px;
    }

    // desktop //
    @media screen and (min-width:1200px){
        top: 305px;
        left: 312px;
        width: 336px;
        height: 336px;
    }
`