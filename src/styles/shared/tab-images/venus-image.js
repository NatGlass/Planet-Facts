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
        top: 194px;
        left: 50%;
        transform: translateX(-50%);
        width: 154px;
        height: 154px;
    }

    // tablet //
    @media screen and (min-width:651px) and (max-width:999px){
        top: 272px;
        left: 50%;
        transform: translateX(-50%);        
        width: 253px;
        height: 253px;
    }

    // desktop (small) //
    @media screen and (min-width:1000px) and (max-width:1199px){
        top: 273px;
        left: 150px;
        width: 290px;
        height: 290px;
    }

    // desktop //
    @media screen and (min-width:1200px){
        top: 273px;
        left: 280px;
        width: 400px;
        height: 400px;
    }
`