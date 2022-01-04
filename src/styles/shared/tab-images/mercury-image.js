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
        top: 200px;
        left: 50%;
        transform: translateX(-50%);
        width: 154px;
        height: 154px;
    }

    // tablet //
    @media screen and (min-width:651px) and (max-width:999px){
        top: 306px;
        left: 50%;
        transform: translateX(-50%);        
        width: 184px;
        height: 184px;
    }

    // desktop (small) //
    @media screen and (min-width:1000px) and (max-width:1199px){
        top: 328px;
        left: 150px;
        width: 290px;
        height: 290px;
    }

    // desktop //
    @media screen and (min-width:1200px){
        top: 328px;
        left: 335px;
        width: 290px;
        height: 290px;
    }
`