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
        top: 184px;
        left: 50%;
        transform: translateX(-50%);
        width: 173px;
        height: 173px;
    }

    // tablet //
    @media screen and (min-width:651px) and (max-width:999px){
        top: 256px;
        left: 50%;
        transform: translateX(-50%);        
        width:285px;
        height: 285px;
    }

    // desktop (small) //
    @media screen and (min-width:1000px) and (max-width:1199px){
        top: 248px;
        left: 150px;
        width: 450px;
        height: 450px;
    }

    // desktop //
    @media screen and (min-width:1200px){
        top: 248px;
        left: 255px;
        width: 450px;
        height: 450px;
    }
`