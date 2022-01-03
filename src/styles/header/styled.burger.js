import styled from 'styled-components'

export default styled.img`
    width: 24px;
    height: 17px;

    // mobile //
    @media screen and (max-width:650px){
        margin: 30px 16px 0 0;
    }

    // hide on large screens //
    @media screen and (min-width:651px){
        display: none;
    }

    // active styles //
    opacity: ${({ open }) => open ? '0.25' : '1'};
`