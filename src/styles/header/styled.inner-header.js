import styled from 'styled-components'

export default styled.div`
    width: 100%;
    z-index: 99;
    display: flex;

    // mobile // 
    @media screen and (max-width:650px){
        height: 36px;
        margin: 24px 16px;
        justify-content: space-between;
        align-items: center;
    }
`